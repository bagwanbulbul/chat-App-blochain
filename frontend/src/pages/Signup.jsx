
import React,{useState} from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
 import { useHistory} from 'react-router-dom'



export default function Signup() {
const [role, setrole] = useState("");
 const [name, setName] = useState("");
 const [lastname, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmpassword, setConfirmPassword] = useState("");
 const [pic, setPic] = useState("");
 let Histroy = useHistory();

 console.log("role",role)

 const postDetails = (pics) => {

 }

 const submitHandler =  async () => {
    console.log(role, name, lastname, email, password, confirmpassword)

    //error handling

    //signup api call
    const article = { role:role, first_name:name, lastname:lastname, email:email, password:password, confirmpassword:confirmpassword };
    axios.post('http://localhost:3000/enrollUser', article)
        .then((response) => 
        console.log("response", response));

    //save data to localstroage of brower
    // localStorage.setItem("userInfo",JSON.stringify(article))
    Histroy.push("/")

   
  

 }

    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-8 col-sm-12 mx-auto">
                            <div className="authentication">
                                <div className="mb-12 sm:mb-8">
                                    <h2 className='text-center'>Sign Up</h2>
                                </div>
                               
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1">Role select</label>
                                        <select className="form-control" id="role" name="role"  onChange={(e) =>setrole(e.target.value)} >
                                            <option>Select Role</option> 
                                            <option>Client</option>
                                            <option>Broker</option>
                                            <option>Supervisor</option>
                                        </select>
                                    </div>
                                    <div className="form-group"  >
                                        <label className="fw-regular" for="exampleInputEmail1">First Name</label>
                                        <input type="text" className="form-control" name="first_name" id="first_name" aria-describedby="emailHelp"
                                            placeholder="Enter your firstname" onChange={(e) =>setName(e.target.value)}/>
                                    </div>

                     
                        
                                    <div className="form-group">
                                        <label className="fw-regular" for="exampleInputEmail1">Last Name</label>
                                        <input type="text" className="form-control" name="last_name" id="last_name" aria-describedby="emailHelp"
                                            placeholder="Enter your lastname" onChange={(e) =>setLastName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="fw-regular" for="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control validate" name="email" id="email" aria-describedby="emailHelp"
                                            placeholder="Enter your Email" onChange={(e) =>setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="fw-regular w-100" for="exampleInputPassword1">Password </label>
                                        <input type="password" className="form-control" name="password" id="password"
                                            placeholder="Enter 6 character or more" onChange={(e) =>setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="fw-regular" >Confirm Password</label>
                                        <input type="password" className="form-control validate" name="confirmpassword" id="confirmpassword" aria-describedby="emailHelp"
                                            placeholder="Confirm Password" onChange={(e) =>setConfirmPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="fw-regular">Upload your picture</label>
                                        <input type="file" accept='image/*' className="form-control validate" name="pic" id="pic" 
                                            onChange={(e) =>postDetails(e.target.files[0])} />
                                    </div>
                                    <button className="button uppercase w-100 text-center" type="submit" onClick={submitHandler}>Signup</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}




