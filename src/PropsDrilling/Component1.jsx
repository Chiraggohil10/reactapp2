import React,{useState} from 'react'
import Component2 from './Component2';
function Component1() {
    let [count, setCount] = useState(0);

function increment() {
    setCount((prev)=> prev + 1);
}
function decrement() {
    setCount((prev)=> prev - 1);
}
  return (
    <div>
        <button onClick={increment}><big><big>Increment</big></big></button>
        <button onClick={decrement}><big><big>Decrement</big></big></button>
        <h2>Component1 : {count}</h2>
        <Component2 count={count}/>
    </div>
  )
}

export default Component1