import React, { useContext } from "react";
import UserContext from "./UserContext"; // Import Context

function CounterControls() {
    const { count, Incr, Decr } = useContext(UserContext); // Use Context inside Provider

    return (
        <div>
            <button onClick={Incr}>Increment</button>
            <button onClick={Decr}>Decrement</button>
            <h1>Component C1: {count}</h1>
        </div>
    );
}

export default CounterControls;
