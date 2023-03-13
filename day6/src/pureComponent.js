import React from 'react'


class PureComponentEx extends React.PureComponent{

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log("render calling")
        return <><h1>{this.state.count}</h1>
  <button onClick={()=>this.setState({count:1})}>PureComponentEx</button>
        </>
    }
}

export default PureComponentEx