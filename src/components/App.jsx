import React, { useState, useEffect } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import SubjectSelection from './SubjectSelection'
import QuizSelection from './QuizSelection'
import Quiz from './Quiz'
import CreateSubject from './CreateSubject'
import  Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  const [user, setUser ] = useState()
  
  useEffect(()=> {
    const fetchUser = async () => {
      const userToken = localStorage.getItem("token")
      if (userToken) {
        const response = await fetch("http://localhost:4002/userToken", {
          method: "GET",
          headers: { 
            'Content': "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${userToken}`
          }
        })
        const data = await response.json()
        setUser(data)
      }
    }
    fetchUser()
  },[])



  return (
   <>
      <BrowserRouter>
      <Navbar user={user} />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/subject' element={<SubjectSelection />} />
            <Route path='/subject/:subject' element={<QuizSelection />} />
            <Route path='/subject/:subject/quiz' element={<Quiz />} />
            <Route path='/create' element={<CreateSubject />} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='/signup' element={<Signup setUser={setUser}/>} />
            <Route path='/*' element={<h4>Page not found </h4>} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
