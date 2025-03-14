import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-amber-300 p-4 text-center">Hello</h1>
      <div className="flex">
      <Card name={"Lenz"} jobtitle={"AV"} description={"lässig"}/>
      <Card name={"Sams"} jobtitle={"AV"} description={"auch lässig"}/> </div>     
    </>
  )
}

export default App
