import React from "react";
 class ComponentWillUnmount extends React.Component{
    constructor(){
        super();
        this.state={
set:0
       }
    }
    componentWillUnmount(){  

     console.log("component deleted");
    }
    onchange(){
        this.setState({set:1})
        
    }
    render(){
        return <><h1>{(this.set===0)?"present":""}</h1>
        <button onClick={()=>this.onchange()}>componentWill Unmount</button>
        </>
    }
    
    }
    export default ComponentWillUnmount