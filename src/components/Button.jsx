import React from 'react'
import { FaAngleRight } from "react-icons/fa";


const Button = ({ click, setClick, colorRandom }) => {


  return (
    <button style={{ backgroundColor: `${colorRandom}` }} onClick={() => setClick(click + 1)}>
      Next <FaAngleRight />
    </button>
  )
}

export default Button