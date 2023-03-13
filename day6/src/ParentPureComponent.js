import React from 'react'
import PureComponentWithpropsEx from './pureComponentWithprops'
class ParentPureComponent extends React.Component{
    constructor(){
        super();
        this.state={
            name:0
        }
    }

        render(){
            return <><PureComponentWithpropsEx name={this.state.name}/>
            <button onClick={()=>this.setState({name:this.state.name+1})}>PureComponentWithpropsEx</button></>
        }
    }


export default ParentPureComponent