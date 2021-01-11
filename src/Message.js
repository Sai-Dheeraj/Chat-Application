import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Message.css"
const Message=forwardRef(({id, contents: {
    timestamp,displayName,email,message,photo,uid}},ref)=>{
        const user=useSelector(selectUser)
    return (
        <div ref={ref} className={`message ${user.email===email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo} />
            <h6>{displayName}</h6>
            <p>{message}</p>
    
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
})

export default Message
