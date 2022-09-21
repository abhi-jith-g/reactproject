import React from 'react'
import Button from '../Button/Button'
import './Check.css'

const CheckComponent = ({data,text,color,bgclr}) => {
  return (
    <div>
        
        <div className='box'>
            <div >
                <div className='name'>{data.name}</div>
                <div>{data.date}</div>
            </div>
            <div>{data.rno}</div>
            <Button text={text} color={color} btnclr={bgclr} />
        </div>

    </div>
  )
}

export default CheckComponent