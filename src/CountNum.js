import React from 'react'
import { useState } from 'react'

const CountNum = () => {
    const [value , setValue]=useState(0)
    function handleCountInc(){
        setValue(value+1)
    }
    function handleCountDec(){
         if(value>0){
            setValue(value-1)
        }
    }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleCountInc}>Increase Count</button>
        <button onClick={handleCountDec}>Decrease count</button>
    </div>
  )
}

export default CountNum