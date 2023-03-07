import ToggleBtn from "./ToggleBtn";
import './App.css'
import Form from "./Form";
import Conditionalrendring from "./Conditionalrendering";
import Formvalidation from "./Formvalidation";
import Passfunctionvieprops from "./Passfunctionvieprops";
function App() {
  function getdata(){
    return alert("function is called vie props")
  }
  return <>
      <ToggleBtn/>
      <hr/>
      <Form/>
      <hr/>
      <Conditionalrendring />
      <hr/>
      <Formvalidation/>
      <hr/>
      <Passfunctionvieprops data={getdata}/>
      </>
}

export default App;
