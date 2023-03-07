import { useState } from "react"


function Conditionalrendring(){
const [user,setUser]=useState(0);


return <>{(user===0)?<h1>No User</h1>:(user===1)?<h1>Welcome one</h1>:<h1>Welcome user {user} </h1>}
<button onClick={()=>setUser(user+1)}>Login</button></>
}
export default Conditionalrendring