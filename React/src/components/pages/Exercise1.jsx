import React from 'react'
import { useState } from 'react'
import Card from '../Card'
import List from '../List'
import Button from '../Button'
import Person from '../Person'

export default function Exercise1() {
  const [count, setCount] = useState(0);
  return (
    <div className="m-10 border-2 shadow-2xl bg-white">
      <h1 className="bg-amber-300 p-4 text-center">Hello</h1>
      <div className="flex">
        <Card name={"Lenz"} jobtitle={"AV"} description={"lässig"} />
        <Card name={"Sams"} jobtitle={"AV"} description={"auch lässig"} /> 
      </div>
      <List drink1={"Coffee"} drink2={"Tea"} drink3={"Beer"} ></List>
      <p>Der Button wurde {count} mal geklickt!</p>
      <Button title={"Sendar"} onClick={() => setCount(count + 1)}>  </Button>
      <Person name={"Simon Metzler"} jobtitle={"Architect & Engineer"}></Person>
    </div>
  )
}
