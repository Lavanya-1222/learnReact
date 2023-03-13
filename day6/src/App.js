import Child from "./Child";
function App(){

  function parentalert(){
    alert("this is parent alert");
  }
  return <><Child func={parentalert}/></>
}
export default App