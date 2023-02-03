import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const[ email, setEmail ] = useState('')
  const[ password, setPassword ] = useState('')
  const navigate = useNavigate()

  const submit = async (e, route) => {
      e.preventDefault()
      const response = await fetch('http://localhost:4002/' + route,{
        method: 'POST',
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },body: JSON.stringify({
          email,
          password
        })
      })
      if (response.status == 200) {
        const data =  await response.json()
        localStorage.setItem("token", data.token)
        setUser(data.user)
        navigate("/")
      } else {
        // const message = await response.json()
        alert("SOMETHING WENT WRONG")
      }}

  return (
    <>
    <form  padding="20px"   >
      <div  className="mb-3">
        <label >Email address</label><br />
        <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />
      </div>
      <div  className="mb-3">
        <label >Password</label><br />
        <input type="Password" value={password} onChange={e=> setPassword(e.target.value)} />
      </div >
      <div >
        <button onClick={e => submit(e,"login")} className="btn btn-primary">Log in</button>
        <button onClick={e => submit(e,"signup")} className="btn btn-primary">Sign Up</button>
      </div>
    </form>
   </>
  )

}



export default Login
