import React from 'react'

type Props = {}

export const Personcard = ({name, title, imageUri}) => {
  return (
    <div className='border grid grid-cols-2 h-40'>
        <div className='p-4'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div className='w-full'>
            <img src={imageUri} alt="" className='object-cover w-full h-[87%] pb-4'/>
        </div>
    </div>
  )
}
