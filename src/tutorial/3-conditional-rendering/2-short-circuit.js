import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      <h1>{text || 'Hello world'}</h1>
      <h1>{text && 'John Doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {/* <h1>{isError && 'Error!'}</h1> */}
      {isError ? <h1 className='red'>Error!</h1> : <h1>No error!</h1>}
    </>
  )
}

export default ShortCircuit
