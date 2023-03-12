import React from 'react'

class ComponentDidMount extends React.Component{

    constructor(){
        super();
        console.log("construtor ComponentDidMount");
    }
    componentDidMount(){
        console.log("componentDidMount call---------------");
    }
    render(){
        return console.log("render call ComponentDidMount")
    }
}
export default ComponentDidMount