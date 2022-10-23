import React, { useState } from "react";
import './SignUp.css';
import {useNavigate} from 'react-router-dom'


function Signup () {
    const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState({
       name:"",
       email:'',
       location:'',

    })
    const onFieldChange=(fieldName,value)=>{

        setUserDetails( (prevState) => {
            return{
                ...prevState,
                [fieldName]:value
            }
         })
    }
  const handleSubmit= async(event)=>{
        console.log(1,2,3)
        event.preventDefault()
         const {name,email,location}=userDetails
        console.log("name");
        if (name&&email&&location){
            try {
                navigate('/')
            } catch (error) {
            }
        }
        else{
            console.log(name)
         alert("invalid input")
        };
    }

return (
        <div className="background">
            <div className="Background">

         <div className="formbackground">
         <form className="form" >
           
          <div className="Login">
          <h2>Signup to AgriAce</h2>

             </div>
             <div className="AgriAce">

                    
          <input type="text" name ="name"  placeholder="Company Name" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)}/> <br/>
          <input type="text" name ="name"  placeholder="PhoneNumber" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)}/> <br/>

          <input type="text" name="email" placeholder="Company Email" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)} /> <br/>

          <input type="text" name="location" placeholder="Company Location" required onChange={(e)=>onFieldChange(e.target.name,e.target.value)}/> <br/>


          <button className="button" type="submit" onClick = { (e) => handleSubmit(e)}>SignUp</button>

          <p>Already have an account?
           <a href="/Login">Login</a>
          </p>
          <p>Go back to?
           <a href="/">Home</a>
          </p>

         
             </div>



          </form>
         </div>
         
            </div>
            
            </div>
)
}
export default Signup;


