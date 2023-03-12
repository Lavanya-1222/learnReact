import React from "react";
 class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        this.state={
count:0
       }}
       componentDidUpdate(){
        console.log(`componentDidUpdate called ${this.state.count}`)
      
       }
       onchange(){
        this.setState({count:this.state.count+1})
       }
       render(){
        return <><h1> count {this.state.count}</h1>
        <button onClick={()=>this.onchange()}>ComponentDidUpdate</button>
        </>
       }
    }
 export default ComponentDidUpdate