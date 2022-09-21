import React from 'react'

const Button = ({btnclr,color,text,Functionality,className}) => {
  return (
    <div>
        <button className={className}  style={{backgroundColor:btnclr, color:color}} onClick={Functionality} >{text}</button>
    </div>
  )
}

export default Button