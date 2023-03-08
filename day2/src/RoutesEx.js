import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './User.js'
function RoutesEx(){

  return   <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>hello</h1>}/>
            <Route path='/about' element={<h1>About</h1>}/>
            <Route path='/user/:name' element={<User/>}/>
        </Routes>
    </BrowserRouter>
}
export default RoutesEx