import React,{useEffect,useState} from 'react'
function UseEffectOnCondition(props){

const [name,setName]=useState("lava");
const [age,setAge]=useState(10);
const[address,setAddress]=useState("")
    useEffect(()=>console.log("useffect on name state "),[name])
    useEffect(()=>console.log("useffect on props "),[address])


    return <><h1>{name} {age} {props.data}</h1>
    <button onClick={()=>{setName("lavanya")
    setAge(22)}}>change name and age</button>
    <button onClick={()=>setAddress(props.data)}>change address</button>
    </>
}
export default UseEffectOnCondition