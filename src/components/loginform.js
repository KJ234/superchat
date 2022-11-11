import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";



function Loginform() {

    const Navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const handleUsernameSubmit = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordnameSubmit = (e) => {
        setPassword(e.target.value)
    }
 
    const handleFormSubmit = (e) => {
        e.preventDefault()
        login()
    }

    function login() {
        const hardcodedCred = {
            username: 'Komal',
            password: 'password123'
        }

        if (username === hardcodedCred.username && password === hardcodedCred.password) {
            console.log('correct')
            Navigate('/homepage')
        }else {
            console.log('incorrect')
        }
    }

  return (
    <div className='container'>
    <div className='box'>
    <h1>Login</h1>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor='username'>Username: </label>
        <input type='text' placeholder='Enter Username' value={username}  onChange={handleUsernameSubmit} ></input>
        <label htmlFor='Password'>Password: </label>
        <input type='password'placeholder='Enter Password' value={password} onChange={handlePasswordnameSubmit}></input>
        <button id='button' type='sumbit'>Submit</button>
   </form>
</div>

    </div>
  )
}

export default Loginform
