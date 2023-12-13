import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {

  const navi = useNavigate ()

  const [adminUser,setAdminUser] = useState({})

  const adminLogin = {
    name :"anshid",
    password:"ak123"
  }

  const getObjValue = (e) => {
    const obj = {
      ...adminUser,
      [e.target.name] : e.target.value
    }
    setAdminUser(obj)
  }
  console.log(adminUser);

  const SubmitAdminLogin = () => {
   if(adminLogin.name === adminUser.name && adminLogin.password === adminUser.password){
    alert('login succesfilly')
    navi ('/admin-home')
   }
   else
   {
    alert('failed, ckeck name and password')
   }
  }


  return (
    <div>
        <h1>Admin Login</h1>
        <br/>
        <label>Admin Name</label>
        <br/>
      <input onChange={getObjValue} name='name' type='text' placeholder='name' />
      <br/><br/>
      <label>Password</label>
      <br/>
      <input onChange={getObjValue} name= "password" type='password' placeholder='password' />
      <br/><br/>
      <button onClick={SubmitAdminLogin} className="btn btn-primary">Submit</button>
    </div>

  )
}

export default AdminLogin
