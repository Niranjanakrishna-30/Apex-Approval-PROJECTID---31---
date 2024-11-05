import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiSquareQuestion } from "react-icons/ci";
import { FaTrashCan } from "react-icons/fa6";
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './RequestList.css'
const RequestList = () => {
  const[items,setitem] = useState(
    [
      {
        id:1,
        text:"Request submitted to HOD - Accepted"
      },
      {
        id:2,
        text:"Request submitted to HOD - In Process"
      },
      {
        id:3,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:4,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:5,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:6,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:7,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:8,
        text:"Request submitted to HOD - Rejected"
      },
      {
        id:9,
        text:"Request submitted to HOD - Rejected"
      }

    ]
  )
  const handledelete =(id)=>{
    const newarr = items.filter(item=>(
      item.id!==id
    ))
    setitem(newarr)
  }

  return (
    <div>
    <div className='container4'>
        <section className='section4'>
        <FaHome className='homeicon2'/>
        <nav><Link to={"/Request"}><h4 className='home2'>Home Page</h4></Link></nav>
        <CgProfile className='icon2'/>
        <h4 className='ph52'>Profile</h4>
        <CiSquareQuestion className='requesticon2'/>
        <nav><Link to={"/RequestForm"}><h4 className='rh52'>New Request</h4></Link></nav>
        <img src='request.png' className='image4' alt='failed'></img>
        </section>
        <section className='section5'>
            <h1 className='h34'>REQUEST LIST</h1>
            <div className='container5'>
            {items.map(item=>(
              <ul>
              <li className='list4'>
                <p className='para4'>{item.text} <FaTrashCan className='trash' onClick={()=>handledelete(item.id)}/></p>
                
              </li>
              </ul>
            ))}
            </div>
        </section>
        </div>
        
        
    </div>
  )
}

export default RequestList