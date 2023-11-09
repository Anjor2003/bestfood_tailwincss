import React, { useState } from 'react'
import {data} from '../data/data'  


const Foods = () => {
  const [foods, setFoods] = useState(data)
  // filter por Categoria
  const filterType = (category)=> {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    );
  };
  // Filter por Precio
  const filterPrice = (price) => {
    setFoods (
      data.filter((item) => {
        return item.price === price
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto p-4 py-12'>
      <h1 className='text-center text-orange-600 text-4xl font-bold'>Top Rated Menu Items</h1>
      {/* filter Row */}
      <div className='flex flex-col lg:flex-row justify-between py-6'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='w-full flex justify-between flex-wrap'>
            <button onClick={()=> setFoods(data)} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
            <button onClick={() => filterType(('burger'))} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burguers</button>
            <button onClick={()=> filterType('pizza')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizzas</button>
            <button onClick={()=> filterType('salad')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salads</button>
            <button onClick={()=> filterType('chicken')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
          </div>
        </div>
        {/* filter Price */}
        <div> 
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex jbeeeq max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$</button>
            <button onClick={() => filterPrice('$$')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='border-r-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$$$$</button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=> (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-600 text-white p-1 rounded-full'>{item.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Foods