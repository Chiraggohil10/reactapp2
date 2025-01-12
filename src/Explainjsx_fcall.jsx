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

    const element = React.createElement('h6', {className:'greeting'}, 'Hello World');   // This is how we can create element using React.createElement
  return ( 
    <>
        <h1 style={{"color":"red","backgroundColor":"black"}}>This IS number : {a}</h1> {/*This is how we can use inline css in JSX*/}
        <h2>Welcome TO react</h2>
        <h3>Jspiders</h3>
        <h2>{str}: Everyone</h2>
        {element}                                                   {/*This is how we can use element in JSX */}
        <button onClick={Print}>Print</button>                      {/*This is how we can call a function on button click*/}
        <button onClick={()=>{AddNumber(20,30)}}>Add</button>       {/*This is how we can call a function with perameter on button click*/}
   </>
  )
}

export default Explainjsx_fcall;
