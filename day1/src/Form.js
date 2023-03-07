import { useState } from 'react'

function Form() {
    const [formdata, setformdata] = useState({ name: "", choosecolor: "Select Option", checkbox: false })
    const [data, setData] = useState(null)

    function setdata(e) {
        if (e.target.name === "checkbox")
            setformdata({ ...formdata, [e.target.name]: e.target.checked })
        else
            setformdata({ ...formdata, [e.target.name]: e.target.value })

    }

    function onsubmithandler(e) {
        e.preventDefault();
        console.log(formdata);
        setData(<div style={{ display: 'inline' }}>
            <h2>{formdata.name}</h2>
            <h2>{formdata.choosecolor}</h2>
            <h2>{formdata.checkbox ? "true" : "false"}</h2>
        </div>)
    }
    function clearHandler() {
        setformdata({ name: "", choosecolor: "Select Option", checkbox: false })
        console.log(formdata);
    }
    return <><br /><br />
        <form onSubmit={onsubmithandler} style={{ float: "right" }}>
            <input type="text" name="name" onChange={setdata} value={formdata.name}></input>
            <br />
            <select onChange={setdata} name="choosecolor" value={formdata.choosecolor}>
                <option>Select Option</option>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </select>
            <br />
            <input type="checkbox" name="checkbox" onChange={setdata} checked={formdata.checkbox} ></input>Accept Terms And Conditions
            <br />
            <input type="submit"></input>
            <input type="button" value="clear" onClick={clearHandler}></input>
        </form>
        <span>{data}</span>

    </>
}

export default Form;