import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate()

  const [credetisal, setCredetisal] = useState({
      email: "",
      password: "",
  })
  const onchangevalue = (
      e) => {
          setCredetisal({ ...credetisal, [e.target.name]: e.target.value })
          console.log(credetisal)
      }
  const handlesubmit=async (e)=>{
      e.preventDefault()
      const response=await fetch("http://localhost:5000/login",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({email:credetisal.email,password:credetisal.password})
      })
      const json=await response.json()
      console.log(json.auth)
      localStorage.setItem("auth-token",json.auth)
      console.log('localstorage', localStorage.getItem("auth-token"))
      if(json.authToken){
        navigate.navigate("/")
       
        
      }
  }
return (
<div className='container  align-items-center justify-content-center mt-5'>
<form onSubmit={handlesubmit}>
<div className="mb-3 width-500">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" onChange={onchangevalue} name='email' value={credetisal.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>

<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" name='password' onChange={onchangevalue} value={credetisal.password} className="form-control" id="exampleInputPassword1"/>
</div>

<button type="submit" onSubmit={handlesubmit} className="btn btn-primary">Signup</button>
<p>Dont have an account ? <Link  to="/signup">Signup</Link></p>
</form>
  </div>
)
}

export default Login
