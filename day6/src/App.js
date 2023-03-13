import Child from "./Child";
import ParentPureComponent from "./ParentPureComponent";
import PureComponentEx from "./pureComponent";

import Child2 from "./SendDataFromChild";
function  App(){
// const [name,setname]=useState(0)
    function parentalert(){
    alert("this is parent alert");
  }
  function parentalert2(name){
    alert(name)
  }

  return <>
  <Child func={parentalert}/><hr/>
  <Child2 func={parentalert2}/><hr/>
  <PureComponentEx/><hr/>
  <ParentPureComponent/>
 
  </>

}
export default App