import { Avatar, IconButton } from '@material-ui/core'
import { RateReviewOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import db from"./firebase"
import { dark } from '@material-ui/core/styles/createPalette';

const dark_theme = {
  backgroundColor: 'black',
}


function Sidebar() {
  const user=useSelector(selectUser);
  const[chats,setChats]=useState([]);


useEffect(()=>{
  db.collection("chats").onSnapshot((snapshot)=>
    setChats(snapshot.docs.map((doc)=>({
      id: doc.id,data: doc.data()
    }))
    )
  );
},[]);
const addChat=()=>{
  const chatName=prompt('Please enter a chat name')
  if(chatName){
  db.collection("chats").add({chatName:chatName});
  }
};
    return (
        <div id="sidebar" className='sidebar'>
          <div className='sidebar_header'>
            <Avatar src={user.photo}className="sidebar_avatar"/>
            <div className='sidebar_input'>
                <SearchIcon />
                <input placeholder="Search" />
            </div>
            <IconButton variant ="outlined" className="sidebar_inputButton">
            <RateReviewOutlined onClick={addChat}/>
            </IconButton>
          </div>
          <div className='sidebar_chats'>
            {chats.map(({id,data:{chatName}})=>(
              <SidebarChat key={id} id={id} chatName={chatName} />
            ))}
          </div>
          <div id="dark_mode_button">
            <button onClick = {() => handleClick()}>Dark Mode</button>
          </div>
        </div>
        
    );
}

function handleClick(){
  document.getElementById('sidebar').classList.toggle("dark_mode");
  document.getElementById('chat_box').classList.toggle("dark_mode");
}

export default Sidebar;
