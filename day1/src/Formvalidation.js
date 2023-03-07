import { useState } from "react";


function Formvalidation(){
    const [password,setpassword]=useState("")
function setdata(e){
   setpassword(e.target.value.length);
   
}
    return (<><input type="password" onChange={setdata}></input>
    {password<3?<p>Invalid password</p>:""}
{/* <button onClick={clickHandler}>Login</button> */}
</>)
   }
export default Formvalidation