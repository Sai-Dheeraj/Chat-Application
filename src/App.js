import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Dmessage from './Dmessage';
import { selectUser,login,logout } from './features/userSlice';
import Login from './Login';

function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,photo:authUser.photoURL,email:authUser.email,displayName:authUser.displayName
        })
    );
      }else{
dispatch(logout());
      }
    });
  },[]);
  return (
    <div className="app">
      {user ?
       <Dmessage /> : <Login />}
     
    </div>
  );
}

export default App;
