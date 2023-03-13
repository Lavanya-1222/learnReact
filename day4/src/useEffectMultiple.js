import React,{useEffect} from 'react'
function UseEffectMultiple(){


    useEffect(()=>console.log("useffect"))
    useEffect(()=>console.log("useffect second"))
    return <><h1>UseEffectMultiple</h1></>
}
export default UseEffectMultiple