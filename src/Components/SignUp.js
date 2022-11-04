import React, { useState } from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom'



function Login () {
    // const navigate=useNavigate()
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")

function signUp(){
    let item={name,password,email}
    console.warn(item)

    
}    

return (
        <div className="background">
            <div className="Background">

         <div className="formbackground">
         <form className="form" >
           
          <div className="Login">
          <h2>SignUp to AgriAce</h2>

             </div>
             <div className="AgriAce">

                    
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Company Name" className="form-container"/> <br/>

          <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Company Email" className="form-container" /> <br/>
        
          <input type="text"value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="Company location" className="form-container"/> <br/>

          <button onClick={signUp} className="btn">SignUp</button>

          <p>Go back to ?
           <a href="/">Home</a>
          </p>
          <p>Already have an account?
           <a href="/Login">Login</a>
          </p>


         
             </div>



          </form>
         </div>
         
            </div>
            
            </div>
)
}
export default Login;


