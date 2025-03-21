import { useState } from 'react'
import Card from './components/Card'
import List from './components/List'
import Button from './components/Button'
import Person from './components/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-amber-300 p-4 text-center">Hello</h1>
      <div className="flex">
      <Card name={"Lenz"} jobtitle={"AV"} description={"lässig"}/>
      <Card name={"Sams"} jobtitle={"AV"} description={"auch lässig"}/> </div> 
      <List drink1={"Coffee"} drink2={"Tea"} drink3={"Beer"} ></List>
      <p>Der Button wurde {count} mal geklickt!</p>
      <Button title={"Sendar"} onClick={() => setCount(count + 1)}>  </Button>
      <Person name={"Simon Metzler"} jobtitle={"Architect & Engineer"}></Person>
    </>
  )
}

export default App
