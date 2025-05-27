import React from 'react'

type Props = {}


export const Person = ({name, jobtitle}) => {
  return (
    <div className="w-50 m-10 border-2 shadow-2xl bg-white">
        <img src="/public/img_avatar.png" alt="Avatar" />
        <p className='px-2.5 font-bold'>{name}</p>
        <p className='px-2.5'>{jobtitle}</p>
    </div>
  )
}
