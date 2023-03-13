function Child2(props){

let data="lavanya"

    return <>
            <button onClick={()=>props.func(data)}>SendDataFromChild</button>
    </>
}
export default Child2