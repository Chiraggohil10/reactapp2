
function Qsp() {
    let a=100;
    let str = "Good Evining"

    function Print() {
        console.log("I am a Event Handler With no Perameter");
    }

    function AddNumber(a,b) {
        let c=a+b;
        console.log(c);
    }
  return (
    <>
        <h1 style={{"color":"red","backgroundColor":"black"}}>This IS number : {a}</h1>
        <h2>Welcome TO react</h2>
        <h3>Jspiders</h3>
        <h2>{str}: Everyone</h2>
        <button onClick={Print}>Print</button>
        <button onClick={()=>{AddNumber(20,30)}}>Add</button>
   </>
  )
}

export default Qsp;
