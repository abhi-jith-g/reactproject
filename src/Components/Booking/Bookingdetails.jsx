import React from 'react'
import './Book.css'
import './Navbar.css'

const Bookingdetails = ({data}) => {
  return (
    <div className='bookdetails'>
        <div>{data.gln}</div>
        <div>{data.gfn}</div>
        <div>{data.rno}</div>
        <div >{data.checkin}</div>
        <div >{data.checkout}</div>
        <div >{data.status}</div>
    </div>
  )
}
export default Bookingdetails