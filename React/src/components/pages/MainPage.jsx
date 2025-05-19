import React from 'react'
import {Link} from "react-router"


export default function MainPage(){
  return (
    <div className='m-4'>
        <Link to="/e1" className='hover:cursor-pointer bg-green-400 rounded-2xl hover:bg-green-900 p-4 m-4'>Exercise 1</Link>
        <Link to="/e3" className='hover:cursor-pointer bg-green-400 rounded-2xl hover:bg-green-900 p-4 m-4'>Exercise 3</Link>
    </div>   
  )
}
