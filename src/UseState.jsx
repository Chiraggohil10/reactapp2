import { useState   } from "react";

/**
 * Restaurant
 * This component displays the number of orders and two buttons to add/remove orders.
 *
 * The component uses the useState hook to create a counter variable and
 * two functions to increment and decrement the counter.
 *
 * When the "Order Added" button is clicked, the add() function is called,
 * which increments the counter by 3, then by 1, and finally decrements it by 1.
 *
 * When the "Order Removed" button is clicked, the remove() function is called,
 * which decrements the counter by 1, then by 1, and finally decrements it by 1.
 */
function Restaurant() {
    /**
     * Counter is the dynamic variable that stores the number of orders.
     * setCounter is the function to update the counter variable.
     * useState is the hook to create the counter variable with an initial value of 0.
     */
    let [counter,setCounter] = useState(0); 

    /**
     * Increments the counter by adjusting values.
     * First adds 3, then adds 1, and finally subtracts 1.
     * This function is called when the "Order Added" button is clicked.
     */
    function add() {
        // Increment counter by 3
        setCounter((prev) => prev + 3);
        // Increment counter by 1
        setCounter((prev) => prev + 1);
        // Decrement counter by 1
        setCounter((prev) => prev - 1);
    }

    /**
     * Decrements the counter by adjusting values.
     * First subtracts 1, then subtracts 1, and finally subtracts 1.
     * This function is called when the "Order Removed" button is clicked.
     */
    function remove() {
        // Decrement counter by 1
        setCounter((prev) => prev - 1);
        // Decrement counter by 1
        setCounter((prev) => prev - 1);
        // Decrement counter by 1
        setCounter((prev) => prev - 1);
    }

    // Logs the counter value to the console
    console.log(counter);

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