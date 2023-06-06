using LearnEn.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace LearnEn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CustomerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult GetAllCustomers()
        {
            string query = "select * from Customer";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dt);
        }

        [HttpGet("{userId}")]
        public JsonResult GetCustomer(string userId)
        {
            string query = @"
                            select * from Customer
                            where CustomerId =  @CustomerId
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@CustomerId", userId);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dt);
        }

        [HttpPut("updatePassword/{userId}")]
        public JsonResult UpdatePassword(string userId, PasswordModel password)
        {
            try
            {
                string query = @"
                                update Customer
                                set Password = @Password
                                where CustomerId = @CustomerId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Password", password.Password);
                        sqlCommand.Parameters.AddWithValue("@CustomerId", userId);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Password updated succesfully!");
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

        [HttpPut("updateProfileInfo/{userId}")]
        public JsonResult UpdateProfileInfo(string userId, CustomerProfileInfoModel customerProfile)
        {
            try
            {
                string query = @"
                                update Customer
                                set Name = @Name, Age = @Age, Gender = @Gender
                                where CustomerId = @CustomerId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@CustomerId", userId);
                        sqlCommand.Parameters.AddWithValue("@Name", customerProfile.Name);
                        sqlCommand.Parameters.AddWithValue("@Age", customerProfile.Age);
                        sqlCommand.Parameters.AddWithValue("@Gender", customerProfile.Gender);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Profile updated succesfully!");
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

        [HttpPut("updateEmail/{userId}")]
        public JsonResult UpdateEmail(string userId, EmailModel email)
        {
            try
            {
                if (IsDuplicateEmail(email.Email))
                {
                    return new JsonResult("Email has been registered by another account") { StatusCode = 409 };
                }
                string query = @"
                                update Customer
                                set Email = @Email
                                where CustomerId = @CustomerId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Email", email.Email);
                        sqlCommand.Parameters.AddWithValue("@CustomerId", userId);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Email updated succesfully!");
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

        [HttpDelete("deleteAccount/{userId}")]
        public JsonResult DeleteCustomer(string userId)
        {
            try
            {
                string query = @"
                                delete from Customer
                                where CustomerId =  @CustomerId
                                ";

                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@CustomerId", userId);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Account deleted");
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
                            select count(*) from Customer 
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
    }
}
