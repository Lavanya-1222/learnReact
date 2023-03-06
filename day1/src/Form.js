 import {useState} from 'react'

 function Form(){
    const [formdata,setformdata]=useState({name:"",ChooseColor:"Select Option",checkbox:false})

    function setdata(e){
   if (e.target.name==="checkbox")
          setformdata({...formdata,[e.target.name]:e.target.checked})
          else
          setformdata({...formdata,[e.target.name]:e.target.value})
                                
    }

    function onsubmithandler(e){
        e.preventDefault();
          }
    function clearHandler(){
        setformdata({name:"",ChooseColor:"Select Option",checkbox:false})

    }
    return <><br/><br/>
    <form onSubmit={onsubmithandler}>
        <input type="text" name="name" onChange={setdata} value={formdata.name}></input>
        <br/>
        <select onChange={setdata} name="ChooseColor" value={formdata.ChooseColor}>
            <option>Select Option</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
        </select> 
        <br/> 
        <input type="checkbox" name="checkbox" onChange={setdata} checked={formdata.checkbox} ></input>Accept Terms And Conditions
        <br/>
        <input type="submit"></input>
        <input type="button" value="clear" onClick={clearHandler}></input>  
        </form>
        
    </>
 }

 export default Form;