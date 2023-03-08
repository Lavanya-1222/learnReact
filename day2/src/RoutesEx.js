import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './User.js'
import Filter from './setsearchparam.js'
import NavigateEx from './useNavigate.js'
function RoutesEx(){

  return   <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>hello</h1>}/>
            <Route path='/about' element={<h1>About</h1>}/>
            <Route path='/user/:name' element={<User/>}/>
            <Route path='/filter' element={<Filter/>}/>
            <Route path='/navigate' element={<NavigateEx/>}/>
        </Routes>
    </BrowserRouter>
}
export default RoutesEx