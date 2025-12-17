export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to test your knowledge in react</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "activeQuiz" })}
      >
        Start Quiz
      </button>
    </div>
  );
}
