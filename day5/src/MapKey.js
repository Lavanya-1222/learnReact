function Mapkey(){
    
    let a=["lava","vava","liva"];
    
    return <>{a.map((data,i)=><h1 key={i}>{data}</h1>)}</>
    }
    
    export default Mapkey