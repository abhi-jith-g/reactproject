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
      <div className='h1pop'><h1>Rooms</h1><label className='cancle' onClick={()=>{setAddroom(false)}}><svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></label></div>
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