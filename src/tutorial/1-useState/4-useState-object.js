import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Chidera',
    age: 19,
    message: 'Try harder',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: 'Hello world!' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={() => changeMessage()}>
        Change message
      </button>
    </>
  )
}

export default UseStateObject
