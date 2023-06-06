namespace LearnEn.Models
{
    public class WritingExerciseResponse
    {
        public int ResponseId { get; set; }

        public int CustomerId { get; set; }

        public int ExerciseId { get; set; }

        public string Answer { get; set; }

        public int Mark { get; set; }

        public DateTime SubmitDate { get; set; }

    }
}
