import React from 'react'

const Card = () => {
  return (
    <div className='bg-black p-10 rounded w-2/3 m-auto my-20 text-white'>
      <div>
        <h2 className='font-bold text-2xl'>'Make An Informed Choice</h2>
        <p className='py-2'>We back ourselves up to deliver and bring the best out of anything. Making a choice on quality should never be questioned.</p>
        <button className='bg-white text-black px-4 py-2 hover:bg-transparent hover:border hover:border-white hover:text-white rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Card