import ExplainJsxFcall from "./ExplainJsxFcall"
import './style.css'
import FetchDataFromClassComp from "./FetchDataFromClassComp";
import Formating from "./Formating";
import State from "./State";
import Restaurant from "./UseState"
import FormatingUsingJson from "./FormatingUsingJson";
import FetchDataFromuseEffect from './FetchDataFromuseEffect';
import CartProjectUsingusEffect from './CartProjectUsingusEffect';
import Conditional from './Conditional';
import Lenovo from './Props/Lenovo';
import Navbar from './Navbar/Navbar';
import Input from "./CustomInput/Input";
import Component1 from "./PropsDrilling/Component1";
import UseRef from "./UseRef";
import C1 from "./ContextAPI/C1";
import UseReducer from "./useReducer/UseReducer";

function App() {
  return (
    <div>
      <h1 className="heading">Sample Navbar</h1>
      <Navbar/>

       <h1 className="heading">Explain JSX and Function Calling,Event Handlers</h1>
      <ExplainJsxFcall/>

      <h1 className="heading">State Using Class Based Component</h1>
      <State/>

      <h1 className="heading">Display Data using Function Component</h1>
      <Formating/>
      
      {/* <h1 className="heading" >Fetching Data from API using Class Component</h1>
      <FetchDataFromClassComp/>  */}

      <h1 className="heading">useStateHook</h1>
      <Restaurant/> 
     
      <h1 className="heading">Formating Using Json</h1>
      <FormatingUsingJson/>

      {/* <h1 className="heading">Fetching Data From API using Function Component Using useEffect</h1>
      <FetchDataFromuseEffect/> */}

      {/* <h1 className='heading'>CartProject Using useEffect</h1>
      <CartProjectUsingusEffect/> */}

      <h1 className='heading'>When Click Button The Conditional Component Will Render</h1>
      <Conditional/>
      
      <h1 className='heading'>Props</h1>
      <Lenovo/>

      <h1 className='heading'>Custom Input</h1>
      <Input/>

      <h1 className='heading'>Props Drilling</h1>
      <Component1/>

      <h1 className='heading'>use Ref Hook</h1>
      <UseRef/>
        
      <h1 className='heading'>Context API</h1>
      <C1/>

      <h1 className='heading'>Use Reducer</h1>
      <UseReducer/>

    </div>
  );
}

export default App;
