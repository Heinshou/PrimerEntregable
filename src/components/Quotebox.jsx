import React from 'react'



const Card = ({ colorRandom, userRandom }) => {

  return (
    <article className='Card'>
      <p className='quote' style={{ color: `${colorRandom}` }}>"{userRandom.quote}"</p>
      <p className='author' style={{ color: `${colorRandom}` }}>-{userRandom.author}</p>
    </article>
  )
}

export default Card