using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using LearnEn.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Security.Cryptography;

namespace LearnEn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("login")]
        public JsonResult Login(LoginModel model)
        {
            try
            {
                Console.WriteLine("Enter the Login Post method");
                bool isValidUser;
                DataTable userCredentials;
                string userId;
                if (model.Email.StartsWith("admin", StringComparison.OrdinalIgnoreCase) ||
                    model.Email.StartsWith("super@", StringComparison.OrdinalIgnoreCase))
                {
                    isValidUser = ValidateUserCredentials(model.Email, model.Password, "Admin");
                    userCredentials = GetUserCredentials(model.Email, model.Password, "Admin");
                    userId = userCredentials.Rows[0]["AdminId"].ToString();
                } else
                {
                    isValidUser = ValidateUserCredentials(model.Email, model.Password, "Customer");
                    userCredentials = GetUserCredentials(model.Email, model.Password, "Customer");
                    userId = userCredentials.Rows[0]["CustomerId"].ToString();
                }
                if (!isValidUser)
                {
                    return new JsonResult("Invalid credentials") { StatusCode = 401 };
                }
                // Generate JWT token
                var token = GenerateJwtToken(userId, model.Email);

                return new JsonResult(new { token });
            }
            catch (Exception ex)
            {
                return new JsonResult("Something went wrong...") { StatusCode = 401 };
            }
        }

        [HttpPost("register")]
        public JsonResult Register(RegisterModel customer)
        {
            try
            {
                if (IsDuplicateEmail(customer.Email))
                {
                    return new JsonResult("This email has been registered for another account already") { StatusCode = 409 }; 
                }
                string query = @"
                                insert into Customer 
                                (Email, Password, Name, Age, Gender, IsSubscribe)
                                values
                                (@Email, @Password, @Name, @Age, @Gender, @IsSubscribe)
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Email", customer.Email);
                        sqlCommand.Parameters.AddWithValue("@Password", customer.Password);
                        sqlCommand.Parameters.AddWithValue("@Name", customer.Name);
                        sqlCommand.Parameters.AddWithValue("@Age", customer.Age);
                        sqlCommand.Parameters.AddWithValue("@Gender", customer.Gender);
                        sqlCommand.Parameters.AddWithValue("@IsSubscribe", customer.IsSubscribe);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Account registered!");
            }
            catch (SqlException ex)
            {
                return new JsonResult($"Database Error: {ex.Message}") { StatusCode = 500 };
            } 
            catch (Exception ex)
            {
                return new JsonResult($"Unexpected Error: {ex.Message}") { StatusCode = 500 };
            }
        }

        public bool IsDuplicateEmail(string email)
        {
            string query = @"
                            select * from Customer 
                            where Email = @Email
                            ";
            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@Email", email);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return dt.Rows.Count > 0;
        }

        private DataTable GetUserCredentials(string email, string password, string tableName)
        {
            string query = $"SELECT * FROM {tableName} WHERE Email = @Email AND Password = @Password";
            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@Email", email);
                    sqlCommand.Parameters.AddWithValue("@Password", password);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return dt;
        }

        private bool ValidateUserCredentials(string email, string password, string tableName)
        {
            DataTable dt = GetUserCredentials(email, password, tableName);
            return dt.Rows.Count > 0;
        }

        private string GenerateJwtToken(string userId, string email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            using var provider = new RNGCryptoServiceProvider();
            var keyBytes = new byte[32];
            provider.GetBytes(keyBytes);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("userId", userId),
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, UserRole(email))
                }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private string UserRole(string email)
        {
            if (email.StartsWith("admin", StringComparison.OrdinalIgnoreCase))
            {
                return "admin";
            } else if (email.StartsWith("super@", StringComparison.OrdinalIgnoreCase))
            {
                return "superAdmin";
            } else
            {
                return "user";
            }
        }
    }
}
