import Explainjsx_fcall from "./Explainjsx_fcall"
import './Explainjsx_fcall.css'
import FetchDataFromClassComp from "./FetchDataFromClassComp";
import Formating from "./Formating";
import State from "./State";
function App() {
  return (
    <div>
      {/* <h1>Explain JSX and Function Calling,Event Handlers</h1>
      <Explainjsx_fcall/> */}

      <h1>State in React</h1>
      <State/>

      <h1>Fetching Data From API using Function Component</h1>
      <Formating/>

      <h1>Fetching Data from API using Class Component</h1>
      <FetchDataFromClassComp/>

      
    </div>
  );
}

export default App;
