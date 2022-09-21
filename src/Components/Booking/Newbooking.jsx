import React from "react";
import InputComponent from './InputComponent'
import Button from '../Button/Button'
import { useState } from "react";
import './Book.css'

const Newbooking = () => {
  const [firstname,setFirstname]=useState('abhi')
  const [secondname,setSecondname]=useState('')
  const [checkindate,setCheckindate]=useState('')
  const [checkoutdate,setCheckoutdate]=useState('')
  const [adultcapacity,setAdultcapacity]=useState('')
  const [childrencapacity,setChildrencapacity]=useState('')
 
 

  const SendData=(e)=>{
    e.preventDefault()
    console.log(firstname,secondname,checkindate,checkoutdate,adultcapacity,childrencapacity);
  }
  
  
   return (
           <div className='main'>
            <div className='bookingtitle'>
           <div className='h1'><h1>New Booking</h1>
      
      </div>
      <div className="form">
        <form method="post" action="" onSubmit={SendData}>
        <label>Guest last name</label>
        <InputComponent placeholder=''setstate={setSecondname}/>
        <label>Guest first name</label>
     <InputComponent placeholder=''setstate={setFirstname}/>
     <label>Checkindate</label>
     <InputComponent placeholder=''setstate={setCheckindate}/>
     <label>Checkoutdate</label>
     <InputComponent placeholder=''setstate={setCheckoutdate}/>
     <label>Number of adults</label>
     <InputComponent placeholder=''setstate={setAdultcapacity}/>
     <label>Number of children</label>
     <InputComponent placeholder=''setstate={setChildrencapacity}/>
     <Button className='getroom'btnclr='#dab268' text='Get available room' color='white'/>
     </form></div>
      </div>
      
      <div >

      
    
      
      </div>

        

    </div>
  )
   }

export default Newbooking