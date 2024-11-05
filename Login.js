import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  
  return (
    <div className='content'>
      <section className='section1'>
      <img className="image"src='\login image.png' alt='failed'></img>
      </section>
      <section className='container'>
        <h1 className='head'>APEX APPROVAL</h1><br></br>
        <label className="label1"htmlFor="name">Enter your Name: </label>
        <input type="name" id = "name" className='input1'></input><br></br><br></br>
        <label className="label1"htmlFor="psw">Enter Password: </label>
        <input type="password" id="psw" className='input1'></input><br></br><br></br><br></br>
        <nav><Link to={"/Request"}><button className='b'>Sign up</button></Link></nav><br></br>
        <button className='b'   >continue with Google</button><br></br>
        <p>Use Bitsathy mailid</p>
        </section>
    </div>
    
  )
}

export default Login