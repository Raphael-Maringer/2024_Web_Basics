import React, { useEffect, useState } from 'react'
import Card from './Card'
import Personcard from './Personcard'

export default function Peoplecontainer() {
  const [people, setPeople] = useState([]);
  const [color, setColor] = useState("green");

  useEffect(()=>{
    fetch("https://67b847d0699a8a7baef366ee.mockapi.io/person").then(
      (res) => res.json().then((data)=> {
        setPeople(data);
      })
    );
  }, []);

  useEffect(() => {
    alert("change");
  }, [color]);

  return (
    <div>
        <h1>People</h1>
        <button onClick={() => setColor("orange")}>Change Color</button>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {people.map(person => {
            return <Personcard name={person.name} title={person.jobTitle} imageUri={person.avatar}></Personcard>
          })}
        </div>
    </div>
  )
}
