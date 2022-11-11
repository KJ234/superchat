import React, {useState} from 'react'


function Loginform() {

    const [userInput, setUserInput] = useState('');

    const [passwordInput, setPasswordInput] = useState('');



    const handleUsernameSubmit = (e) => {
        setUserInput(e.target.value)
    }

    const handlePasswordnameSubmit = (e) => {
        setPasswordInput(e.target.value);
    }
 
    const handleFormSubmit = (e) => {
        e.preventdefault()
        let hardcodedCred = {
            user: 'Komal',
            password: 'password123'
        }

        if ((userInput == hardcodedCred.user) && (passwordInput == hardcodedCred.password)) {
            alert('correct')
        }else {
            alert('incorrect')
        }
    }

    

  return (
    <div className='container'>

    <form  className='box' onSubmit={handleFormSubmit}>
    <h1>Login</h1>
        <input 
        type='user' 
        placeholder='Enter Username' 
        value={userInput}  
        onChange={handleUsernameSubmit} 
        />
        <input 
        type='password'
        placeholder='Enter Password' 
        value={passwordInput} 
        onChange={handlePasswordnameSubmit}
        />
        <button 
        type='submit'
        id='button' >Submit</button>
    </form>
</div>
  )
}

export default Loginform
