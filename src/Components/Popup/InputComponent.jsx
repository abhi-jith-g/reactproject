import React from 'react'

const InputComponent = ({text,setstate,placeholder}) => {
  return (
    <div className='input_container'>
    {/* <div className='input-label'>
    <label for={text}>{text} :</label>
    </div>
   
    <input type='text' id={text} placeholder={text} required/> */}

    
     <div className='input-group'>
     <label className='placeholder'>{text}</label>
     <input type={text} className='input' placeholder={placeholder}onChange={(e)=>{setstate(e.target.value)}} required=''/>
     </div>
     
     
     
     
    </div>
  )
}

export default InputComponent