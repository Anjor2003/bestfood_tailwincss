import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Cards */}
      <div className='roundedxl relative'>
        {/* overlays */}
        <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1572460534958-99d1e796f160?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
      </div>
      <div className='roundedxl relative'>
        {/* overlays */}
        <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1620167790054-de54f34308bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3JhcCUyMHRlcm5lcmF8ZW58MHwwfDB8fHww" alt="/" />
      </div>
      <div className='roundedxl relative'>
        {/* overlays */}
        <div className='absolute h-full w-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Top</p>
          <p className='px-2'>Testy Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://plus.unsplash.com/premium_photo-1667546202654-e7574a20872c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHN8ZW58MHwwfDB8fHww" alt="/" />
      </div>
    </div>
  )
}

export default HeadLineCards