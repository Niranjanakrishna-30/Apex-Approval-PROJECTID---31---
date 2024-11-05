import React from 'react'
import './RequestForm.css'
import { Link } from 'react-router-dom'
const RequestForm = () => {
  return (
    <div>
      <form className='container1' >
        <h1 className='head1'>Apex Approval</h1>
       <label for="name" className='label2'>Faculty Name</label>
       <input type="text" id='name' className='input2'></input>
       <label for='id' className='label2'>Faculty id</label>
       <input type='text' id='id' className='input2'></input>
       <label for="incharge" className='label2'>Incharge</label>
       <input type='text' id='incharge' className='input2'></input>
       <label for="totamount" className='label2'>Total Amount</label>
       <input type='number' className='input2'></input>
       <label for="adamount" className='label2'>Advance Amount</label>
       <input type='number' className='input2'></input>
       <label for='date' className='label2'>Date</label>
       <input type='text' id="date"className='input2' placeholder='dd/mm/yy'></input>
       <label for='req' className='label2'>Request</label>
       <input type='text' id='req'className='input2'></input>
       <label for='outcome' className='label2'>Outcome</label>
       <input type='text' id="outcome"className='input2'></input>
       <label for='send' className='label2'>Submit to</label>
       <select className='select'>
        <option>HOD</option>
       </select>
       <nav> <Link to={"/Request"}><p className='para1'>Place Request</p> </Link></nav>
      </form>
    </div>
  )
}

export default RequestForm