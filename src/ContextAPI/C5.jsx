import React, { useContext } from "react";
import UserContext from "./UserContext"; // Import Context

function C5() {
    const { count } = useContext(UserContext); // Get count from context

    return (
        <div>
            <h1>Component C5: {count}</h1>
        </div>
    );
}

export default C5;
