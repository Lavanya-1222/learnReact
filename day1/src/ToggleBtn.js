import {useState} from 'react'

function ToggleBtn(){
    const [toggle,setToggle]=useState(true);

    

return <>{toggle?<h1>Hello</h1>:null}
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>
</>
}
export default ToggleBtn
