import React from 'react'
import Button from '../Button/Button'



const Amenities= ({check,data,title,text,bgclr,color}) => {
  return (
    <div>
        <h2>Amenities</h2>
        
        <div className='amenity'>
        {/* <select>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select> */}
        <Button className='btnaddnew' text='Add New'/>

        <div className='detailsamty'>
        <div className='amty'>
            <label>Internet Access</label>
            <Button className='btnaddnew' text='Delete'/>
        </div>
        <div className='amty'>
        <label>Television</label>
        <Button className='btnaddnew' text='Delete' />
        </div>
        <div className='amty'>
        <label>Air conditioner</label>
        <Button className='btnaddnew' text='Delete'/>
        </div>
        <div className='amty'>
        <label>Water heater</label>
        <Button className='btnaddnew' text='Delete'/>
        </div>
        </div>
        
       </div>
    </div>
  )
}

export default Amenities