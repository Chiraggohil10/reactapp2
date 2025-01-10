import React from 'react'
function Explainjsx_fcall() {
    let a=100;
    let str = "Good Evining"

    function Print() {
        alert("I am a Event Handler With no Perameter");
    }

    function AddNumber(a,b) {
        let c=a+b;
        alert(c);
    }

    const element = React.createElement('h6', {className:'greeting'}, 'Hello World');
  return (
    <>
        <h1 style={{"color":"red","backgroundColor":"black"}}>This IS number : {a}</h1>
        <h2>Welcome TO react</h2>
        <h3>Jspiders</h3>
        <h2>{str}: Everyone</h2>
        {element}
        <button onClick={Print}>Print</button>
        <button onClick={()=>{AddNumber(20,30)}}>Add</button>
   </>
  )
}

export default Explainjsx_fcall;
