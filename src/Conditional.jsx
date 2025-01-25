import React from 'react'
import { useState } from 'react'
import ConditionalText from './ConditionalText';
import Spin from './Spin';

export default function Conditional() {
    let [state, setState] = useState(false);

    // setTimeout(() => {
    //     setState(true)
    // },3000)

  return (
    <div className="app">
        <button onClick={()=>{setState(!state)}}>Display</button>
        <br />
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium assumenda accusamus iusto ullam! Distinctio dolorum ratione, natus nostrum reiciendis, eius optio et nam illo numquam in illum nihil modi.</h4>
        {state ? <ConditionalText/> : <Spin/>}
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque at dolore, fugiat illo architecto nulla accusamus ipsam est animi natus dignissimos officiis quasi dolorem qui, molestiae porro repudiandae sint distinctio.</h4>
    </div>
  )
}
