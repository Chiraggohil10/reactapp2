// import ExplainJsxFcall from "./ExplainJsxFcall"
import './style.css'
// import FetchDataFromClassComp from "./FetchDataFromClassComp";
// import Formating from "./Formating";
// import State from "./State";
// import Restaurant from "./UseState"
// import FormatingUsingJson from "./FormatingUsingJson";
import FetchDataFromuseEffect from './FetchDataFromuseEffect';
import CartProjectUsingusEffect from './CartProjectUsingusEffect';

function App() {
  return (
    <div>
       {/* <h1 className="heading">Explain JSX and Function Calling,Event Handlers</h1>
      <ExplainJsxFcall/> */}

      {/* <h1 className="heading">State Using Class Based Component</h1>
      <State/> */}

      {/* <h1 className="heading">Display Data using Function Component</h1>
      <Formating/> */}
      
      {/* <h1 className="heading" >Fetching Data from API using Class Component</h1>
      <FetchDataFromClassComp/>  */}

      {/* <h1 className="heading">useStateHook</h1>
      <Restaurant/>  */}
     
      {/* <h1 className="heading">Formating Using Json</h1>
      <FormatingUsingJson/>*/}

      {/* <h1 className="heading">Fetching Data From API using Function Component Using useEffect</h1>
      <FetchDataFromuseEffect/> */}

        <h1 className='heading'>CartProject Using useEffect</h1>
        <CartProjectUsingusEffect/>
    </div>
  );
}

export default App;
