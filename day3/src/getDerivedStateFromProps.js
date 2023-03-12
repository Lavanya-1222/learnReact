import React from 'react'

class GetDerivedStateFromProps extends React.Component{

    constructor(props){
        super();
        this.state={color:'red'}
       console.log("GetDerivedStateFromProps")
    }
    static getDerivedStateFromProps(props){
        return {color:props.facolor};
    }
    render(){
        return console.log(`render GetDerivedStateFromProps ${this.state.color}-------------------`)
    }
    
}
export default GetDerivedStateFromProps