import {Button} from 'react-bootstrap'
import { useState } from 'react'
import './App.css'
function App(){
const [entred,setEntred]=useState("")
const [result,setResult]=useState("")

function entreddata(data){
  if(data=="="){
let evalre;
    setEntred((prev)=>prev)
    try{
      evalre=eval(entred);
      setResult(evalre)
    }
    catch(e){
      console.log(e)
      setResult("Syntax Error :(")
    }

   
  // console.log(eval("1.2+1.2"))

}

else{
  setEntred((prev)=>prev+data)
}
}


function clear(){
  setEntred((prev)=>prev.substring(0,prev.length-1))
  console.log(entred.substring(0,entred.length-1))
} 

  return <div className="container-cal">
         <div className="inout" >
      <div className="input-div">{entred}
    </div>
    <div className="output-div">{result}
    </div>
    </div>
<div className="btns">
<Button className="btn btn1" onClick={()=>entreddata(".")}>.</Button>
<Button className="btn btn2" onClick={()=>{setEntred("");setResult("");}}>clear</Button>
<Button className="btn btn3" onClick={()=>clear()}><i className="fa-solid fa-delete-left"></i></Button>
<Button className="btn btn4" onClick={()=>entreddata("1")}>1</Button>
<Button className="btn btn5" onClick={()=>entreddata("2")}>2</Button>
<Button className="btn btn6" onClick={()=>entreddata("3")}>3</Button>
<Button className="btn btn7" onClick={()=>entreddata("+")}>+</Button>
<Button className="btn btn8" onClick={()=>entreddata("4")}>4</Button>
<Button className="btn btn9" onClick={()=>entreddata("5")}>5</Button>
<Button className="btn btn10" onClick={()=>entreddata("6")}>6</Button>
<Button className="btn btn11" onClick={()=>entreddata("-")}>-</Button>
<Button className="btn btn12" onClick={()=>entreddata("7")}>7</Button>
<Button className="btn btn13" onClick={()=>entreddata("8")}>8</Button>
<Button className="btn btn14" onClick={()=>entreddata("9")}>9</Button>
<Button className="btn btn15" onClick={()=>entreddata("*")}>x</Button>
<Button className="btn btn16" onClick={()=>entreddata("0")}>0</Button>
<Button className="btn btn17" onClick={()=>entreddata("/")}>/</Button>
<Button className="btn btn18" onClick={()=>entreddata("=")}>=</Button>
</div>
    </div>
  

}

export default App