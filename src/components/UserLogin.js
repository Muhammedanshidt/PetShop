import "./style/userlogin.css";
import { myContext } from '../App';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
  const navig = useNavigate();
  const [password, setPassword] = useState('');
  const { allUser,userName, setUserName} = useContext(myContext);
console.log(allUser);
  const UlFormSubmitting = (e) => {
    e.preventDefault();

    if (!userName || !password) {
      alert('Please enter username and password');
      return;
    }

    const user = allUser.find((element) => element.username === userName && element.password === password);

    console.log(user);

    if (user) {
      alert('You are successfully logged in');

      navig('/');
    } else {
      alert('Check your username and password');
    }
  };
  return (
    <div className='cover'>
      <h1>LOGIN</h1>
      <form className='UlFormLogin' onSubmit={UlFormSubmitting}>
        <label>Name</label>
        <br />
        <input value={userName} placeholder='Username' type='text' onChange={(e) => setUserName(e.target.value)} />
        <br /><br />
        <label>Password</label>
        <br />
        <input value={password} placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        <p>Don't have an account..? <Link to='/registration'>Register</Link></p>
        <p> <Link to='/'>home</Link></p>
        <button type="submit" className="btn btn-info">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;

