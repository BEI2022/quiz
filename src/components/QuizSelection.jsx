import React, { useState} from 'react'
import { useParams, Link } from'react-router-dom'

const QuizSelection = () => {
  const { subject } = useParams()
  const [ quizzes, setQuizzes] = useState(['Quiz 1', 'Quiz 2', 'Quiz 3'])

  return (
    <div>
      <h2>You are in {subject} subject</h2>
      <h2>Please choice your quiz:</h2>
        <ul>
          {quizzes.map((quizzes, index) => (
            <li key={index}>
              <Link to={'/subject/:subject/quiz'}>{quizzes}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default QuizSelection
