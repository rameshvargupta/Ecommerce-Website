import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const resultfun = () => {


        if (user.length < 3 || email.length < 3) {
            alert("Please Fill The Details")
        }
        else {
            alert("Login SuccessFully")
            navigate("/")
        }
    }

    return (
        <div className='container' >
            <div className="reg">
                <h1>Register Here</h1>
                <input type="text" required placeholder='Enter your Name' name="name" onChange={(e) => { setUser({ name: e.target.value }) }} /> <br /><br />
                <input type="email" required placeholder='Enter your Email' name="email" onChange={(e) => { setEmail({ email: e.target.value }) }} /> <br /><br />
                <input type="submit" name="" id="" onClick={resultfun} />
            </div>
        </div>
    )
}

export default Logout
