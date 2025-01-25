import Mac from './Mac'
function Hp({data}){  
    console.log("Hp file data:"+data);  //just undestood
    function Increase(){
        data=data+1;
        console.log(data);
    }
    return(
        <>
        <h1>Welcome to Hp child tag of lenovo</h1>
        <b>Hp Function this is access the Lenovo function :- {data}</b>
        <button onClick={Increase}>Hp Increase</button>
        <Mac data1={data}/>
        </>
    )
}
export default Hp