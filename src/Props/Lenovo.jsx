import Hp from './Hp'
function Lenovo(){
    let Num=100;
    console.log("Lenovo file data: "+Num);
    
    return(
        <>
        <h1>Welcome to Lenovo Parent Tag :-</h1>
        <b>this is a parent tag Lenovo:- {Num}</b>
        <Hp data={Num}/>
        </>
    )
}
export default Lenovo

// defination: props means declare parameter inside a function and assign the value of parent function 
// parent file access only child file
// but child file cant access the parent file 
// systax to call : <hp variblename={assign a varible name}