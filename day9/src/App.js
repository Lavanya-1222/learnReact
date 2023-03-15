import { Button } from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import { incrementAction ,decrementAction} from "./action";
import reducerfun from "./reducer";
// import { reducerfun } from "./reducer"
function App(){

    const dispatch=useDispatch();
const mystate=useSelector((state)=>state.reducerfun)
    return <>
    <Button onClick={()=>dispatch(incrementAction())}>+</Button>
<span>{mystate}</span>
    <Button onClick={()=>dispatch(decrementAction())}>-</Button>
    </>
}

export default  App