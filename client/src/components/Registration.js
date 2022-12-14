import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Registration = () => {
  
  const navigate = useNavigate()

  // Separate state needed for the two forms
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

    const registrationHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register",{
            username,
            email,
            password,
            confirmPassword
        },{withCredentials:true, credentials:'include'})
        .then((res) => {
            navigate('/main')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark">
          <div className="container-fluid">
              <div className="navbar-nav ms-2">
              <a className="navbar-brand text-warning" href="/welcome"><strong>Scribe</strong></a>
              </div>
          </div>
      </nav>
      <div className='container bg-secondary bg-opacity-25 rounded p-4 mt-5' style={{width:"400px"}}>
          <h2 className='text-center'>Register</h2>
          <form className='mx-auto d-flex flex-column' onSubmit={registrationHandler}>
              <label>Username:</label>
              <input type='text' className='form-control' onChange={(e) => setUsername(e.target.value)}></input>
              <label className='mt-2'>Email:</label>
              <input 
                type='text' 
                className='form-control' 
                onChange={(e) => setEmail(e.target.value)}/>
              <label className='mt-2'>Password:</label>
              <input 
                type='text' 
                className='form-control' 
                onChange={(e) => setPassword(e.target.value)}/>
              <label className='mt-2'>Confirm Password:</label>
              <input 
                type='text' 
                className='form-control' 
                onChange={(e) => setConfirmPassword(e.target.value)}/>
              <button className='btn btn-primary mt-3'>Register</button>
          </form>
      </div>
    </div>
  )
}

export default Registration