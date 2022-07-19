import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete, handleChange}) {
  const question = questions.map((singleQuestion) => {
  return <QuestionItem key={singleQuestion.id} question={singleQuestion} handleDelete={handleDelete} handleChange={handleChange}/>})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question}</ul>
    </section>
  );
}

export default QuestionList;