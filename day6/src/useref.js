import { useRef } from "react";

function UseRefEx(){

    const inputref=useRef();

    function onchange(){
       inputref.current.style.backgroundColor="red"
    }
    return <><input type="text" ref={inputref}></input><button onClick={onchange}>change</button></>
}
export default UseRefEx
