import { useEffect, useState } from 'react'
function Fetch() {
    const [data1, setData] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => {
            setData(data)
            console.log(data)
        }
        )
    }, [])
    return <>{data1.map((x) => <h1>{x.name}</h1>)}</>
}
export default Fetch