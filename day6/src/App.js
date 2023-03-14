import Child from "./Child";
import ParentPureComponent from "./ParentPureComponent";
import PureComponentEx from "./pureComponent";

import Child2 from "./SendDataFromChild";
import UseMemoEx from "./useMemo";
import UseRef from "./createref";
import UseRefEx from "./UseRef";
function  App(){

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
  <ParentPureComponent/><hr/>
  <UseMemoEx/><hr/>
  <UseRef/><hr/>
  <UseRefEx/>
 
  </>

}
export default App