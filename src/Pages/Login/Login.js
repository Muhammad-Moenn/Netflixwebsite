import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login,logout, signup} from '../../Firebase'
function Login() {
 const [signstate,setSignstate]=useState("Sign Up")
 const [name,setname]=useState("")
 const [email,setemail]=useState("")
 const [password,setpassword]=useState("")
  const user_auth=async(e)=>{
    e.preventDefault();
    if(signstate==="Sign In"){
      await login(email,password)
     
      // setemail("");
      // setpassword("");
    }else{
      await signup(name,email,password)
      // setname("")
      // setemail("");
      // setpassword("");
    }
  }
  return (
    <div className='login'>
      <img src={logo} alt='' className='login-logo'></img>
      <div className='login-form'>
        <h1>{signstate}</h1>
        <from>
          {signstate==="Sign Up"?
          <input value={name} onChange={(e)=>{setname(e.target.value)}} type='text' placeholder='Your Name'/>
          :<></>
        }
          
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='email' placeholder='Email'/>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='Strong Password'/>
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className='from-help'>
            <div className='remember'>
              <input type='checkbox' id='remember-me'/>
              <label >Remember</label>
            </div>
            <p>Need Help</p>
          </div>
        </from>
        <div className='form-change'>
          {signstate==="Sign In"?
          <p>New to Netflix? <span onClick={()=>setSignstate("Sign Up")}>Sign Up</span></p>
          :
          <p>Already have an account?<span onClick={()=>setSignstate("Sign In")}>Sign In</span></p>
        }
          
        </div>
      </div>
    </div>
  )
}

export default Login
 
