import React from 'react'
import './Book.css'

const InputComponent = ({text,setstate,placeholder}) => {
  return (
    <div className='input_container'>
    {/* <div className='input-label'>
    <label for={text}>{text} :</label>
    </div>
   
    <input type='text' id={text} placeholder={text} required/> */}

    
     
     <input type={text} className='input' placeholder={placeholder} onChange={(e)=>{setstate(e.target.value)}} required=''/>
     <label className='placeholder'>{text}</label>
     
     
     
     
    </div>
  )
}

export default InputComponent