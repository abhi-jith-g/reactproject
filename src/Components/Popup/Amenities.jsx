import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'



const Amenities= ({check,data,title,text,index,bgclr,color}) => {
  
  const [select,setSelect]=useState([]) 

  return (
    <div>
        <h2>Amenities</h2>
        
        <div className='amenity'>
        <select onChange={(e)=>{
          setSelect([...select,e.target.value])}}>
          <option disabled value='select'>Select</option>
          <option value='Tv'>Television</option>
          <option value='Bed'>Bed</option>
          <option value='Wifi'>WiFi</option>
          
        </select>
        <div className='selectdata'>
          {select.map((data,index)=>{
            return(
              <Button className='btnaddnew' text={data} Functionality={()=>{
                setSelect(select.filter((item,itemindex)=>{
                  return itemindex !==index;
                }))
              }}/>
            )
          })}
      
</div>
        
       </div>
    </div>
  )
}

export default Amenities