import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Signup() {
    const [credetisal, setCredetisal] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    })
    const onchangevalue = (
        e) => {
            setCredetisal({ ...credetisal, [e.target.name]: e.target.value })
            console.log(credetisal)
        }
    const handlesubmit=async (e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:5000/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credetisal.name,email:credetisal.email,password:credetisal.password,location:credetisal.location})
        })
        const json=await response.json()
        console.log(json)
    }
  return (
<div className='container  align-items-center justify-content-center mt-5'>
<form onSubmit={handlesubmit}>
  <div className="mb-3 width-500">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={onchangevalue} name='email' value={credetisal.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" name='name' onChange={onchangevalue} value={credetisal.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' onChange={onchangevalue} value={credetisal.password} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Address</label>
    <input  value={credetisal.location} onChange={onchangevalue} name='location' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" onSubmit={handlesubmit} className="btn btn-primary">Signup</button>
  <p>Already have an account? <Link  to="/login">Login</Link></p>
</form>
    </div>
  )
}

export default Signup
