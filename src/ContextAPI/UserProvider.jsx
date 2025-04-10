import React, { useState } from "react";
import UserContext from "./UserContext"; // Import Context

const UserProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    function Incr() {
        setCount((prev) => prev + 1);
    }
    function Decr() {
        setCount((prev) => prev - 1);
    }

    return (
        <UserContext.Provider value={{ count, Incr, Decr }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
