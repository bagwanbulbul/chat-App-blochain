import React from 'react'
import { useHistory } from "react-router-dom";
import SideDrawer from '../Commponent/SideDrawer';
import MyChats from '../Commponent/MyChats';
import ChatBox from '../Commponent/ChatBox';
import {ChatState} from '../Context/ChatProvider'

 
export default function Chat() {
  const { user } = ChatState();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
 
  
  return (
    <>
      <header>
        <div className="container-fluid bgcolor-grey py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-6 col-sm-12 sm:text-center">
                <div className="brand color-dgrey">
                  <h3 className="fw-bold ">Credi<span className="fw-light">Block</span></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12  text-right sm:text-center">
                <a id="userId" href="fabricview.html?id=" className="btn btn-info">View on Fabric</a>
                <a className="btn btn-info  text-white" onClick={logoutHandler}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
 
    {/* if the user present in our app only sidedrewer will show */}
      {user &&  <SideDrawer/> } 
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
        {user &&   <MyChats/> }  
          </div>
          <div className='col-lg-8'>
           {user &&    <ChatBox/> }  
          </div>
        </div>
      </div> 


      
      

    </>
  )
}

