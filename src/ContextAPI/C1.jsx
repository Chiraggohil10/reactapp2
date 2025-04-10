import React from "react";
import C2 from "./C2";
import UserProvider from "./UserProvider"; // Import Provider
import CounterControls from "./CounterControls"; // Separate controls component

function C1() {
  return (
    <UserProvider>
      <CounterControls /> {/* Buttons added here */}
      <C2 />
    </UserProvider>
  );
}

export default C1;
