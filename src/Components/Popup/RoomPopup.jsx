import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import InputComponent from './InputComponent'
import './Popup.css'
import Amenities from './Amenities'

const RoomPopup = ({setAddroom})=> {

  const [roomnumber,setRoomnumber]=useState('')
  const [adultcapacity,setAdultcapacity]=useState('')
  const [childrencapacity,setChildrencapacity]=useState('')
  const [price,setPrice]=useState('')

  const SendData=(e)=>{
    e.preventDefault()
    console.log(roomnumber,adultcapacity,childrencapacity,price);
    setAddroom(false)
  }
  return (
    <div className='popup-box'>
    <div className='popup'>
      <div className='popup-title'>
      <div className='h1pop'><h1>Rooms</h1></div>
      </div>
      <div className='formpopup'>
      <form  action="" onSubmit={SendData}method='POST'> 
      
      <InputComponent text='Room Number' setstate={setRoomnumber} />
      <InputComponent text='Adult Capacity' setstate={setAdultcapacity}/>
      <InputComponent text='Children Capacity' setstate={setChildrencapacity}/>
      <InputComponent text='Price' setstate={setPrice}/>
      <div className='form-bottom'>
      <Button text='Save' btnclr='#0da2ff' color='white'/>
      <div> Or </div>
      <label className='cancle' onClick={()=>{setAddroom(false)}}>Cancel</label>
      </div>
      <div className='amenitypop'>
        
      </div>
      </form>
      <Amenities/></div>
      
     
    </div>

    </div>
  )
}

export default RoomPopup