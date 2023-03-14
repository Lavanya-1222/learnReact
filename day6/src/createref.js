import React,{createRef} from "react"


class UseRef extends React.Component{

    constructor()
    {
        super();
        this.inputred=createRef();
    }
    componentDidMount(){
        this.inputred.current.style.color='red'
    }
getval(){
    this.inputred.current.style.backgroundColor='black'
    console.log(this.inputred)
}
    
    render(){
        return<> <input type="text" ref={this.inputred}></input>
        <button onClick={()=>this.getval()}>CreateRef</button>
        </>
    }
}
export default UseRef