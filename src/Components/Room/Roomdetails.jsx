import React from 'react'
import Button from '../Button/Button'
import './Room.css'
import { useState } from 'react'
import RoomPopup from '../Popup/RoomPopup'
const Roomdetails = ({data}) => {
  const [addroom, setAddroom] = useState(false);

  function popuproom() {
    console.log(addroom);
    setAddroom(true);
    
  }

  return (
    <div className='details'>
        <div className='rno'>{data.rno}</div>
        <div>{data.ac}</div>
        <div>{data.cc}</div>

        <div className='price'>{data.price} </div>
        <Button className='edit' text='EDIT' Functionality={popuproom}/>

        <div className={addroom ? "popupwindow" : ""}>
      
      {addroom && <RoomPopup setAddroom={setAddroom}/>}

      </div>
      
        
    </div>
  )
}

export default Roomdetails