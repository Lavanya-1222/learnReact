import Child from "./Child";
import ParentPureComponent from "./ParentPureComponent";
import PureComponentEx from "./pureComponent";
import {useRef} from 'react'
import Child2 from "./SendDataFromChild";
import UseMemoEx from "./useMemo";
import UseRef from "./createref";
import UseRefEx from "./UseRef";
import Forwordref from "./ForwordRef";
import HOC from "./highordercomponent";
function  App(){

  let inputref=useRef()
    function parentalert(){
    alert("this is parent alert");
  }
  function parentalert2(name){
    alert(name)
  }

  function RefEx(){

  inputref.current.style.backgroundColor="red"
  }
  return <>
  <Child func={parentalert}/><hr/>
  <Child2 func={parentalert2}/><hr/>
  <PureComponentEx/><hr/>
  <ParentPureComponent/><hr/>
  <UseMemoEx/><hr/>
  <UseRef/><hr/>
  <UseRefEx/><hr/>
  <Forwordref ref={inputref}/>
 <button onClick={RefEx}>ForwordRef</button>
 <hr/>
 <HOC/>
  </>

}
export default App