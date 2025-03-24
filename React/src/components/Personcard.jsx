import React from 'react'

export default function Personcard({name, title, imageUri}) {
  return (
    <div className='border'>
        <div>
            <h2>{name}</h2>
            <h4>{title}</h4>
        </div>
        <div>
            <img src={imageUri} alt="" />
        </div>
    </div>
  )
}
