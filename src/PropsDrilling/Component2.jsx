import React from 'react'
import Component3 from './Component3'

function Component2({count}) {
  return (
    <div>
        <h2>Component2 : {count}</h2>
        <Component3 count={count}/>
    </div>
  )
}

export default Component2