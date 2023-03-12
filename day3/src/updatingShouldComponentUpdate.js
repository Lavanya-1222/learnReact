import React from "react";
 class ShouldComponentUpdate extends React.Component{


    constructor(){
        super();
        this.state={
count:0
       }}
       shouldComponentUpdate(){
        console.log(this.state.count)
        return false;
       }
       onchange(){
        this.setState({count:this.state.count+1})
       }
       render(){
        return <><h1> count {this.state.count}</h1>
        <button onClick={()=>this.onchange()}>change</button>
        </>
       }
    }
 export default ShouldComponentUpdate