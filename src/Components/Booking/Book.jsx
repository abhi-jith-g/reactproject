import React from "react";
import Booktable from './Booktable'; 
import InputComponent from './InputComponent'
import Button from '../Button/Button'
import {NavLink} from 'react-router-dom'



const Book = ({data}) => {

 
   return (
    <div className='main'>
      <div className='bookingtitle'>
      <div className='h1'><h1>Booking</h1>
      <div><NavLink to ='/Newbooking' className="link" >New booking</NavLink></div>
      </div>
      <div className="inputbox">
        <InputComponent placeholder='(Type guest name)'/>
     <InputComponent placeholder='-Any search-'/>
     <Button  className='search'btnclr='#dab268' text='search' color='white'/>
      </div>
      </div>
      
      <div >
      <Booktable data={data}/>
      
    
      
      </div>
      
       
    </div>
  )
}

export default Book