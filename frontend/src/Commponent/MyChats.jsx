import React, { useState, useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { getSender } from '../common/Config';
import axios from 'axios';

export default function MyChats() {
  const [loggedUser, setLoggedUser] = useState();
  const { user, chats, setChats, selectedChat, setSelectedChat } = ChatState();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      };
      const { data } = await axios.get("http://localhost:3111/chat/fetchchat", config);
      console.log("fetchchat data:", data)
      setChats(data);
    } catch (error) {
      console.log("fecth api", error)
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

 
  return (
    <>

      <div className=' myChat'>
        <div className='mychat_heading'>
          <h1>My Chat</h1>
        </div>
        <hr />
        <div className='chat_container'>
          {chats.map((e) => {
            console.log("eeeeeeeeee", e)
            return (
              <div onClick={() => setSelectedChat(e)} key={e._id} className='mychat_container'>
                {getSender(loggedUser, e.users)}
              </div>
            )
          })}
        </div>

      </div>

    </>
  )
}










{/* 
        {chats.map((chat) => {
          console.log("chat", chat)
          return (
            <div onClick={() => setSelectedChat(chat)} cursor="pointer" key={chat._id} className='mychat_container'>
              {chat.users.map((arr) => {
                console.log("users_arr", arr)
                return (
                  <div >
                    {arr.first_name}
                  </div>
                )
              })}

            </div>
          )
        })} */}






{/* <button onClick={fetchChats} className='btn btn-primary'>clicl</button> */ }
{/* <div>
          {chats.map((e) => {
            console.log("fecthch data ",e)
            return(
              <div className='userChat' >
              
                {e.users.map((arr) => {
                  console.log("users_arr",arr)
                  return(
                    <div >
                      {arr.first_name}
                    </div>
                  )
                })}
              </div>
            )
          })
          }
        </div> */}



