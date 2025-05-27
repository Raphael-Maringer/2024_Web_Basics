import React, { useEffect, useState } from 'react'

type Props = {}


export const Card = ({props: name, jobtitle, description}) => {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks > 5 ? "bg-green-400" : "";
  return (
    <div 
      className={`border w-full pl-2 hover:cursor-pointer ${style}`} 
      onClick={() => {
        setAmountOfClicks(amountOfClicks+1);
      }}>
      <p className="font-bold">{name}</p>
      <p>{jobtitle}</p>
      <p>{description}</p>
      <p>Amount of Clicks: {amountOfClicks}</p>
    </div>
  )
}
