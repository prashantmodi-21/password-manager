import React, { useState } from "react";
import './App.css'

const App = () =>{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    return(
        <div className="app">
            <div className="form">
                <input type="text" placeholder="Username" className="form-input" onChange={(e)=> setUsername(e.target.value)}/>
                <input type={showPassword ? "text" : "password"} placeholder="Password" className="form-input" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="form-input btn" onClick={()=>setShowPassword(!showPassword)}>Click to Show/Hide</button>
            </div>
            <h1 className="heading">{username ? username : "Username"}</h1>
            <h1 className="heading">{showPassword ? password : password ? '*'.repeat(password.length) : "Password"}</h1>
        </div>
    )
}

export default App