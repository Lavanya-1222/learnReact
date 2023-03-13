import React,{useEffect,useState} from 'react'
function UseEffectAfterUpdate(){

const [name,setName]=useState("lava");

function onchnage(){
    setName("lavanya")
}
    useEffect(()=>console.log("useffect"))
    return <><h1>{name}</h1>
    <button onClick={()=>onchnage()}>change</button>
    </>
}
export default UseEffectAfterUpdate