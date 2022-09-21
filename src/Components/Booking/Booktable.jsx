import React from 'react'
import Bookingdetails from './Bookingdetails'
import './Book.css'

const Booktable = ({data}) => {
  return (
    <div>
        <div className='bookingtable'>
            <div className='booktitle'>
            <div className='bookheading' >Guest first name</div>
            <div className='bookheading'>Guest last name</div>
            <div className='bookheading'>Roomnumber</div>
            <div className='bookheading'>Checkindate</div>
            <div className='bookheading'>Checkoutdate</div>
            <div className='bookheading'>Status</div>
            </div>
            <div className='bookingdata' >
                {data.map((data,index)=>{
                    return(
                        <Bookingdetails data={data} key={index}/>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default Booktable