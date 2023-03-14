import {useState} from 'react'

function Prestate(){

const [data,setData]=useState(0);

function onChange(){
    setData((pre)=>{
        console.log(pre);
return data+1})
    }

return <><h1>{data}</h1>
<button onClick={onChange}>click</button></>
}
export default Prestate