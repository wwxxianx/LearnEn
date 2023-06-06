namespace LearnEn.Models
{
    public class WritingExercise
    {
        public int ExerciseId { get; set; }

        public string Title { get; set; }

        public string Level { get; set; }

        public string Image { get; set; }

        public int WordCount { get; set; }

        public int Duration { get; set; }

        public double Price { get; set; }

        public string Hints { get; set; }

        public string Sample { get; set; }

    }
}
