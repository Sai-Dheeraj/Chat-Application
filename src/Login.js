import { Button } from '@material-ui/core'
import React from 'react'
import {auth,provider}from "./firebase"
import "./Login.css"
function Login() {
  const signIn=()=>{
auth.signInWithPopup(provider).catch((error)=>alert(error.message))
  };
  return (
    <div className='login'>
      <div className='login_logo'>
      <img src={require("./Free_Sample_By_Wix.jpg")} alt="img" />
        <h1>PepTalk</h1>
        <p>Chats Done Right</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default Login
