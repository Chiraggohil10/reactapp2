import { useState   } from "react";

function Restaurant() {
    let [counter,setCounter] = useState(0); // counter is dynamic variable,setcounter is set function,usestate is hook and intial value is 0

    function add() {
        setCounter(counter + 1)
    }
    console.log(counter);
    function remove() {
        setCounter(counter-1);
    }

    return(
        <>
            <h1>Restaurant</h1>  
            <p>The Number of Order : <b>{counter}</b></p>     
            <button onClick={add}>Order Added</button> 
            <button onClick={remove}>Order Removed</button> 
        </>
    )
}

export default Restaurant;