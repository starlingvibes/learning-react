import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// second parameter
// cleanup function
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value >= 1) {
      document.title = `New messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('Runs once')
  }, [])

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
