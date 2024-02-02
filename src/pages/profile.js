import React, { useState } from 'react';
import "../styles/Profile.css"
const Profile = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className='container'>
    <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
    </div>
    
    <div className='inputs'>

      {action === "Log in" ? <div></div> : <div className='input'>
        <input type='text' placeholder='Name'></input>
      </div>}

      <div className='input'>
        <input type='email' placeholder='Email Address'></input>
      </div>
      <div className='input'>
        <input type='password' placeholder='Password'></input>
      </div>
    </div>
    {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Forgot Password, <span>Click here!</span></div>}

    <div className='submit-container'>

      <button onClick={() => { setAction("Sign Up") }}>Sign Up</button>

      <button onClick={() => { setAction("Log in") }}>Log in</button>

    </div>
  </div>
  )
}

export default Profile;