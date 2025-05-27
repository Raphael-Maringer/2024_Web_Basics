import React, { useEffect, useState } from 'react'
import Card from './Card'
import Personcard from './Personcard'

type Props = {}


export const Peoplecontainer = (props: Props) => {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [color, setColor] = useState("green");

  useEffect(()=>{
    fetch("https://67b847d0699a8a7baef366ee.mockapi.io/person").then(
      (res) => res.json().then((data)=> {
        setPeople(data);
        setFilteredPeople(data)
      })
    );
  }, []);

  useEffect(() => {
    alert("change");
  }, [color]);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered)
  }

  return (
    <div className=''>
        <div className='fixed border mb-4 bg-white w-full h-28 p-8'>
          <input className='border p-3' type="text" placeholder="Search" onChange={(el) =>{
            console.log(el.target.value)
            filterPeople(el.target.value)
          }}/>
        </div>
        <button onClick={() => setColor("orange")}>Change Color</button>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
          {filteredPeople.map(person => {
            return <Personcard name={person.name} title={person.jobTitle} imageUri={person.avatar}></Personcard>
          })}
        </div>
    </div>
  )
}
