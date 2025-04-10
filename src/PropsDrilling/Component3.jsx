import React from 'react'
import Component4 from './Component4'

function Component3({count}) {
  return (
    <div>
        <h2>Component3 : {count}</h2>
        <Component4 count={count}/>
    </div>
  )
}

export default Component3