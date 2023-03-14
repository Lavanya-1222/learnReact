import { forwardRef } from "react"

function Forwordref(props,refe){

    return <><input type="text" ref={refe}></input></>

}
export default forwardRef(Forwordref)