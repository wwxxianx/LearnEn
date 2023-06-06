using LearnEn.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace LearnEn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AdminController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("{email}")]
        public JsonResult Get(string email)
        {
            string query = "select * from Admin";

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

        [HttpGet]
        public JsonResult GetAllAdmins()
        {
            string query = "select * from Admin where Email <> 'super@gmail.com'";

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

        [HttpPost]
        public JsonResult CreateAdmin(Admin admin)
        {
            try
            {
                string query = @"
                                insert into Admin values
                                (@Email, @Password)
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Email", admin.Email);
                        sqlCommand.Parameters.AddWithValue("@Password", admin.Password);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult(admin);
            }
            catch (SqlException ex)
            {
                return new JsonResult($"Database error: {ex.Message}") { StatusCode = 500 };
            }
            catch (Exception ex)
            {
                return new JsonResult($"Error: {ex.Message}") { StatusCode = 500 };
            }
        }
    }
}
