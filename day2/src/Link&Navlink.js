import {Link,NavLink} from 'react-router-dom' 
// import './App.css'

function LinkNavlink (){
    return <><Link to='/about' >About</Link><NavLink to='/'  activeclassname="active">Home</NavLink>
    <Link to='/uselocation'   state={{example:"lava"}}>Uselocation</Link>
        </> 
}
export default LinkNavlink