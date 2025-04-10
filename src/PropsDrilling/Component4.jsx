import React from 'react'
import Component5 from './Component5'

function Component4({count}) {
  return (
    <div>
        <h2>Component4 : {count}</h2>
        <Component5 count={count}/>
    </div>
  )
}

export default Component4