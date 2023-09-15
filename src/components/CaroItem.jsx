import React from 'react'

const CaroItem = ({item}) => {
  return (
    <div className='h-[30rem] w-[25rem] border-2 border-solid border-[#65f5ff] rounded-xl p-5'>
        <div>{item.title}</div>
        <div>{item.description}</div>
    </div>
  )
}

export default CaroItem