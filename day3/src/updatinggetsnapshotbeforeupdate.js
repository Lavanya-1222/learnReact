import React from "react";

class GetSnapshotBeforeUpdate extends React.Component{

    constructor()
    {
        super();
        this.state={
            name:"lava"
        }
    }
    getSnapshotBeforeUpdate(preState){
       console.log(`before update ${preState.name}`);
    }
    onchange(){
        this.setState({name:"lavanya"})
    }
    componentDidUpdate(){
        console.log(`after update ${this.state.name}`)
    }
    render(){
        return <><h1>{this.state.name}</h1>
        <button onClick={()=>this.onchange()}>change</button></>
    }
}
export default GetSnapshotBeforeUpdate