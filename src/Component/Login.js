import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
const navigate=useNavigate()

const resultfun=()=>{
 
    
    if(user.length<3 || pass.length<3){
        alert("Please Fill The Details")
    }
    else{
        alert("Login SuccessFully")
        navigate("/")
    }
}

    return (
        <div className='container' >
            <div className="reg">
                <h1>Login Here</h1>
            <input type="text" required placeholder='Enter your User Name' name="name"  onChange={(e)=>{setUser({name:e.target.value})}}/> <br /><br />
            <input type="Password" required placeholder='Enter your Password' name="password"  onChange={(e)=>{setPass({password:e.target.value})}}  /> <br /><br />
            <input type="submit" name="" id="" onClick={resultfun} />
            </div>
        </div>
    )
}

export default Login
