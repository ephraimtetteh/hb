import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, text, cardBtn}) => {
  return (
    <div className='bg-blue-900 p-10 rounded w-2/3 m-auto my-20 text-white'>
      <div>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='py-2'>{text}</p>
        <Link to={'/contact'}>
          <button className='bg-white text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white rounded'>{cardBtn}</button>
        </Link>
      </div>
    </div>
  )
}

export default Card