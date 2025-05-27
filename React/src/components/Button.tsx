import React from 'react'

type Props = {}

export const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className="bg-green-600 m-2 p-1.5 hover:bg-green-800">{title}</button>
  )
}
