import BootStrap from "./Bootstrap"

function MapComponent(){

    let name=["lavanya","viva","kira"]

    return <>
{name.map((data)=>
<BootStrap title={data}/>)}
    </>
}

export default MapComponent