import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then((data) => setQuestions(data))
  }, [])

  function handleAddQuestion(newQuestion) {
    //console.log('NewQ', newQuestion)
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function handleChange(changedAnswer) {
    const updatedAnswer = questions.map((question) => {
      if (question.id === changedAnswer.id) {
        return updatedAnswer
      } else return question
    })
    setQuestions(updatedAnswer)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} handleDelete={handleDelete} handleChange={handleChange}/>}
    </main>
  );
}

export default App;