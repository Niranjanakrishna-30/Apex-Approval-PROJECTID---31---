import React from 'react'
import './Request.css'
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { Link } from 'react-router-dom';
const Request = () => {
  return (
    <div className='container2'>
       <section className='section2'>
            <FaHome className='homeicon1'/>
            <CgProfile className='icon1'/>
            <VscRequestChanges className='request1'/>
            <h4 className='h41'>Home Page</h4>
            <h4 className='hp41'>profile</h4>
            <nav><Link to={"/RequestList"}><h4 className='hr41'>View Request List</h4></Link></nav>
            <img className='image2'src='\request.png' alt='faied'></img>
       </section>
       <section className='section3'>
        
        <h1 className='head2'>Select Your Request</h1>
        <div className='container3'>
          <ul className='list1'>
          <input type='radio' id="finance"></input>
          <label htmlFor="finance">Financial Requirement</label><br></br><br></br>
          <input type='radio' id="od"></input>
          <label htmlFor='od'>On Duty</label><br></br><br></br>
          <input type='radio' id="da"></input>
          <label htmlFor='da'>DA</label><br></br><br></br>
          </ul>
        </div>
        <h3 className='head31'>Enter Description :</h3>
        <textarea rows={4} cols={30} className='textarea'></textarea>
        <nav><Link to={"/RequestForm"}><button className='b1'>Submit</button></Link></nav>
       </section>
        
    </div>
  )
}

export default Request