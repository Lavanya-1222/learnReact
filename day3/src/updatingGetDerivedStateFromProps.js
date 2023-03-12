import React from 'react'

class UpdateingGetDerivedStateFromProps extends React.Component{

    constructor(props){
        super();
        this.state={color:'red'}
   
    }
    static getDerivedStateFromProps(props){
        return {color:props.facolor};
    }
    onchange(){
        this.setState({color:"Blue"})
    }

    render(){
        return <><h1>render UpdateingGetDerivedStateFromProps {this.state.color}</h1>
        <button onClick={()=>this.onchange()}> UpdateingGetDerivedStateFromProps</button>
        </>
    }
    
}
export default UpdateingGetDerivedStateFromProps