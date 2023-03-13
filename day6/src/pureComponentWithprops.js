import React from 'react'
class PureComponentWithpropsEx extends React.PureComponent{
// constructor(props){
//     super();
// }
    render(){
        console.log("render calling by examples of props")
        
return <h1>{this.props.name}</h1>
        
    }
}
export default PureComponentWithpropsEx