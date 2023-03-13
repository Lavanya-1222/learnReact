
function MapNested() {

    let obj = [{
        sname: "lava", age: 20, addr: [{ city: "solapur" },
        { city: "pune" }]
    },
    { sname: "lavanya", age: 22, addr: [{ city: "mumbai" }, { city: "dehli" }] }]

    return <>{obj.map((data) => <h1>{data.sname} {data.age}
        {data.addr.map((x) => <h1>{x.city}</h1>)}
    </h1>)
    }</>


}
export default MapNested