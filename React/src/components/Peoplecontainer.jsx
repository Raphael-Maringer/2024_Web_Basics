import React from 'react'
import Card from './Card'
import Personcard from './Personcard'

export default function Peoplecontainer() {
  return (
    <div className='flex'>
        <h1>People</h1>
        <div>
            <Personcard name="hans" title="ceo" imageUri="https://picsum.photos/200/300"> </Personcard>
            <div>person2</div>
            <div>person3</div>
        </div>
    </div>
  )
}
