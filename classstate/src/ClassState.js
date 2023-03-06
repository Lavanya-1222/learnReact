import React from 'react'
class Classstate extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
                   }
    apply() {
        this.setState({ data: this.state.data+1})
    }

    render() {
        return <><h1>{this.state.data}</h1>
        <button onClick={()=>this.apply()}>Click Me</button></>
       
    }
}
export default Classstate