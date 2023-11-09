import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 bg-gray-100'>
      <div className='flex flex-col justify-around items-center px-8'>
        <h1 className='text-4xl font-bold'>Best <span className='text-orange-600'>Eats</span></h1>
        <p>&copy; 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer