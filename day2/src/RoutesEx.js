import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './User.js'
import Filter from './setsearchparam.js'
import NavigateEx from './useNavigate.js'
import Contact from './Contact.js'
import Address from './Address.js'
import Company from './Company.js'
import UselocationEx from './useLocation.js'
import LinkNavlink from './Link&Navlink.js'
function RoutesEx() {

    return <><BrowserRouter>
        <LinkNavlink />
        <Routes>
            <Route path='/' element={<h1>hello</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/contact/' element={<Contact />}>
                <Route path='address' element={<Address />}/>
                <Route path='company' element={<Company />} />
                </Route>
            
            <Route path='/user/:name' element={<User />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/navigate' element={<NavigateEx />} />
            <Route path='/uselocation' element={<UselocationEx />} />

        </Routes>
    </BrowserRouter>
    </>
}
export default RoutesEx