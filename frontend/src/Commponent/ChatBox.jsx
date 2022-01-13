import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { getSender } from '../common/Config';

export default function ChatBox() {
    const {selectedChat ,user,chats, setChats} = ChatState()
    return (
        <div className='chatbox'>
            <div className='chatbox_heading'>
             
            <hr/>
            </div>
            
                 { selectedChat? (<> </>) : (<div> Click on a user to Start Chatting</div>)} 
               
        </div>
    )
}
