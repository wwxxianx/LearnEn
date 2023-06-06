using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using LearnEn.Models;

namespace LearnEn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WritingExerciseController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public WritingExerciseController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult GetAllExercises()
        {
            try
            {
                string query = @"
                                select * from WritingExercise
                                ";

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
            catch (SqlException ex)
            {
                return new JsonResult($"Database Error: {ex.Message}") { StatusCode = 500 };
            }
            catch (Exception ex)
            {
                return new JsonResult($"Unexpected Error: {ex.Message}") {StatusCode = 500};
            }
        }

        [HttpGet("allResponses")]
        public JsonResult GetAllExerciseResponse()
        {
            try
            {
                string query = @"
                                select WE.Title, WEP.*
                                from WritingExercise as WE JOIN WritingExerciseResponse as WEP
                                on WE.ExerciseId = WEP.ExerciseId
                                ";

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
            catch (SqlException ex)
            {
                return new JsonResult($"Database Error: {ex.Message}") { StatusCode = 500 };
            }
            catch (Exception ex)
            {
                return new JsonResult($"Unexpected Error: {ex.Message}") { StatusCode = 500 };
            }
        }

        [HttpGet("{exerciseId}")]
        public JsonResult GetExercise(string exerciseId)
        {
            Console.WriteLine("Enter the Get method GetWritingExercise(string id)");
            string query = @"
                            select * from WritingExercise
                            where ExerciseId =  @ExerciseId
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@ExerciseId", exerciseId);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dt);
        }

        [HttpGet("{exerciseId}/answers")]
        public JsonResult GetAnswers(string exerciseId)
        {
            string query = @"
                            select Answer, CustomerId from WritingExerciseResponse
                            where ExerciseId =  @ExerciseId
                            ";

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@ExerciseId", exerciseId);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(dt);
        }

        [HttpPost]
        public JsonResult CreateExercise(WritingExercise writingExercise)
        {
            try
            {
                string query = @"
                                insert into WritingExercise
                                (Title, Level, Image, WordCount, Duration, Price, Hints, Sample) values
                                (@Title, @Level, @Image, @WordCount, @Duration, @Price, @Hints, @Sample)
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Title", writingExercise.Title);
                        sqlCommand.Parameters.AddWithValue("@Level", writingExercise.Level);
                        sqlCommand.Parameters.AddWithValue("@Image", writingExercise.Image);
                        sqlCommand.Parameters.AddWithValue("@WordCount", writingExercise.WordCount);
                        sqlCommand.Parameters.AddWithValue("@Duration", writingExercise.Duration);
                        sqlCommand.Parameters.AddWithValue("@Price", writingExercise.Price);
                        sqlCommand.Parameters.AddWithValue("@Hints", writingExercise.Hints);
                        sqlCommand.Parameters.AddWithValue("@Sample", writingExercise.Sample);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult(writingExercise);
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

        [HttpPost("submitAnswer")]
        public JsonResult CreateAnswer(WritingExerciseResponse answer)
        {
            string query = @"
                            insert into WritingExerciseResponse
                            (CustomerId, ExerciseId, Answer, SubmitDate) values
                            (@CustomerId, @ExerciseId, @Answer, GETDATE())
                            ";
            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
            SqlDataReader sqlReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    sqlCommand.Parameters.AddWithValue("@CustomerId", answer.CustomerId);
                    sqlCommand.Parameters.AddWithValue("@ExerciseId", answer.ExerciseId);
                    sqlCommand.Parameters.AddWithValue("@Answer", answer.Answer);
                    sqlReader = sqlCommand.ExecuteReader();
                    dt.Load(sqlReader);
                    sqlReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Your answer has been submitted!");
        }

        [HttpPut]
        public JsonResult UpdateExercise(WritingExercise writingExercise)
        {
            try
            {
                string query = @"
                                update WritingExercise
                                set Title = @Title, Level = @Level, Image = @Image, WordCount = @WordCount,
                                Duration = @Duration, Price = @Price, Hints = @Hints, Sample = @Sample
                                where ExerciseId = @ExerciseId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@ExerciseId", writingExercise.ExerciseId);
                        sqlCommand.Parameters.AddWithValue("@Title", writingExercise.Title);
                        sqlCommand.Parameters.AddWithValue("@Level", writingExercise.Level);
                        sqlCommand.Parameters.AddWithValue("@Image", writingExercise.Image);
                        sqlCommand.Parameters.AddWithValue("@WordCount", writingExercise.WordCount);
                        sqlCommand.Parameters.AddWithValue("@Duration", writingExercise.Duration);
                        sqlCommand.Parameters.AddWithValue("@Price", writingExercise.Price);
                        sqlCommand.Parameters.AddWithValue("@Hints", writingExercise.Hints);
                        sqlCommand.Parameters.AddWithValue("@Sample", writingExercise.Sample);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Exercise Updated Successfully!");
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

        [HttpPut("marking/{responseId}")]
        public JsonResult UpdateResponseMark(string responseId, ResponseMarkModel markModel)
        {
            try
            {
                string query = @"
                                update WritingExerciseResponse
                                set Mark = @Mark
                                where ResponseId = @ResponseId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@Mark", markModel.Mark);
                        sqlCommand.Parameters.AddWithValue("@ResponseId", responseId);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Mark updated successfully!");
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

        [HttpDelete("{exerciseId}")]
        public JsonResult DeleteExercise(string exerciseId)
        {
            try
            {
                string query = @"
                                delete from WritingExercise
                                where ExerciseId = @ExerciseId
                                ";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LearnEnCon");
                SqlDataReader sqlReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                    {
                        sqlCommand.Parameters.AddWithValue("@ExerciseId", exerciseId);
                        sqlReader = sqlCommand.ExecuteReader();
                        dt.Load(sqlReader);
                        sqlReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Exercise Deleted Successfully!");
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
    }
}
