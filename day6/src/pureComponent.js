import React from 'react'


class PureComponentEx extends React.PureComponent{

    constructor(props){
        super();
        this.state={
            count:"lava"
        }
    }
    render(){
        console.log("render calling")
        return <><h1>{this.props.data}</h1>
  <button onClick={()=>this.setState({count:"lavanya"})}>change</button>
        </>
    }
}

export default PureComponentEx