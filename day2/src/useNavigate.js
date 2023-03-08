import { useNavigate } from "react-router-dom"

function NavigateEx(){
const navigate=useNavigate()

return <button onClick={()=>navigate('/about')}>go to about</button>

}
export default NavigateEx