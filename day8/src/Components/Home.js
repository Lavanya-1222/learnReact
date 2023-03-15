// import {require} from 'browserify'
import {Button} from 'react-bootstrap'
import './Home.css'
function Home(){


    return <>
     <div class="add-to-cart-image">
             <img src={require("../Images/add-to-cart.jpg")}></img>
             </div>
             <h1>Home</h1>
    <div className="cart-image">
             <img src={require("../Images/Phone1.jpg")}></img>
             </div>
             <div className="cart-text mt-2">
             <h5>Samsung F23</h5>
             <h5>Price: 10000</h5>
             </div>
             <div className="cart-btn mt-4 ">
             <Button variant="danger" >Add to cart</Button>
             </div>
             </>
}
export default Home