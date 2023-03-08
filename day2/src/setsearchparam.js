import { useSearchParams } from "react-router-dom"

function Filter(){
const [searchparam,setsearchparam]=useSearchParams();
const age=searchparam.get('age')
const name=searchparam.get('name')
    return <><h1>{age} {name}</h1>
    <h1>filter</h1>
    <button onClick={()=>setsearchparam({age:40,name:"lava"})}>change</button>
    </>
}
export default Filter