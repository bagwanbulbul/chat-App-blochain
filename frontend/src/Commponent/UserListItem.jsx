import React from 'react'

export default function UserListItem({user,handleFunction }) {

    return (
        
        <>
            <div className="container searchList" onClick={handleFunction}>
                <div className='row'>
                    <div className="col-sm-12">
                        <div className='searchlist '>
                            {user.first_name} {user.last_name} 
                            {user.email}  
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
