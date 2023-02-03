import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SubjectSelection = () => {
    const [subjects, setSubjects] = useState(['Spanish', 'Chinese', 'Russian'])


  return (
    <>
    <h2>Please select a Subject:</h2>
    <ul>
        {subjects.map((sub, index) => (
            <li key={index}>
                <Link to={`/subject/${sub}`}>{sub}</Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export default SubjectSelection
