import React from 'react'
import Chat from './Chat'
import "./Dmessage.css"
import Sidebar from './Sidebar'
function Dmessage() {
    return (
        <div className='dmessage'>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Dmessage
