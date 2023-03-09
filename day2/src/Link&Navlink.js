import {Link,NavLink} from 'react-router-dom' 
// import './App.css'

function LinkNavlink (){
    return <><Link to='/about' >About</Link><NavLink to='/'  activeclassname="active">Home</NavLink>
    <NavLink to='/uselocationex'   state={{example:"lava"}}>Home</NavLink>
        </> 
}
export default LinkNavlink