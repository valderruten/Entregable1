import React from 'react'

const BtnQuote = ({objStyleBtn,handleClick}) => {
  return (
    <button className='card__btn' onClick={handleClick} style={objStyleBtn} >&gt;</button>
  )
}

export default BtnQuote