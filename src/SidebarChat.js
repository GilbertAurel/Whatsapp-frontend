import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar/>
            <div className="sidebarChat__info">
                <div className="sidebarChat__name">
                    <h2>Gilbert</h2>
                    <p>{new Date().toUTCString()}</p>
                </div>
                <p>Sample text here..</p>
            </div>
        </div>
    )
}

export default SidebarChat;
