function MapComponent(){

   let num=["100","200","300"];

   let obj=[{sname:"lava",age:20},{sname:"lavanya",age:22}]

    return <>{num.map((p)=><h4>{p}</h4>)}
{obj.map((data)=><h2>name is "{data.sname}"" age is {data.age}</h2>)}
</>
}
export default MapComponent