import React,{useEffect,useState} from 'react'
function UseEffectOnCondition(){

const [name,setName]=useState("lava");
const [age,setAge]=useState(10);

    useEffect(()=>console.log("useffect on name "),[name])
    return <><h1>{name} {age}</h1>
    <button onClick={()=>{setName("lavanya")
    setAge(22)}}>UseEffectOnCondition</button>
    </>
}
export default UseEffectOnCondition