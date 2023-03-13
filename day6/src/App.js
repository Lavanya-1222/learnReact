import Child from "./Child";
import PureComponentEx from "./pureComponent";
function App(){

  function parentalert(){
    alert("this is parent alert");
  }

  return <>
  <Child func={parentalert}/>
  <PureComponentEx/>

  </>
}
export default App