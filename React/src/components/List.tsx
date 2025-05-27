import React from 'react'

type Props = {}


export const List = ({drink1, drink2, drink3}) => {
  return (
    <div className="bg-cyan-800 w-[200px] h-[80px] m-[30px] p-[5px]">
        <p className="border-b-2 border-white">{drink1}</p>
        <p className="border-b-2 border-white">{drink2}</p>
        <p className="border-b-2 border-white">{drink3}</p>
    </div>
  )
}
