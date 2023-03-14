function HOC(){
return <><HOCgreen cmp={<Heading/>}/>
<HOCgold cmp={<Heading/>}/></>
}
function Heading(){
    return <>Lavanya</>
}
function HOCgreen(props){
    return <><h1 style={{backgroundColor:'green'}}>{props.cmp}</h1></>
}
function HOCgold(props){
    return <><h1 style={{backgroundColor:'gold'}}>{props.cmp}</h1></>
}
export default HOC