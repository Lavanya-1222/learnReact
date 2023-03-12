import React from "react";

class GetSnapshotBeforeUpdate extends React.Component{

    constructor()
    {
        super();
        this.state={
            n:"lava"
        }
    }
     getSnapshotBeforeUpdate(prevProps,prevState){
       console.log(`before update ${prevState.n}`);
     
    }
    onchange(){
        this.setState({n:"lavanya"})
    }
    componentDidUpdate(prevState,snapshot){
        console.log(`after update ${this.state.n}`)
    }
    render(){
        return <><h1>{this.state.n}</h1>
        <button onClick={()=>this.onchange()}>change</button></>
    }
}
export default GetSnapshotBeforeUpdate