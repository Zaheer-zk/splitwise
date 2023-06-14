import React from 'react'

const Button = ({children, onClick, type}) => {
  return (
    <>
        <button type={type} className='button' onClick={onClick}>{children}</button>
    </>
  )
}

export default Button