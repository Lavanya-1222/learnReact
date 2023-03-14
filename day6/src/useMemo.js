import { useState,useMemo } from "react"

function UseMemoEx(){

    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    let rendering =useMemo(function (){
        console.log("rending is calling")
    },[count])
    return <><h1>count:{count}  count1:{count1}</h1>
    <h1>{rendering}</h1>
    <button onClick={()=>setCount(count+1)}>count </button>
    <button onClick={()=>setCount1(count1+1)}>count 1</button>

    </>
}
export default UseMemoEx