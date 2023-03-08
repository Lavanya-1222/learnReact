import { useParams } from "react-router-dom";
function User(){
    const param=useParams();
    const{name}=param;
    return <h1>User {name}</h1>

}
export default User