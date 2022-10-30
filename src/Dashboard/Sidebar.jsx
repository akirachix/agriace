import Layout from "../Layout"
import '../App.css'
import { useNavigate } from "react-router-dom"
import  image from './Image/logo.png'
const Sidebar = () => {
    const navigate= useNavigate()
  return (
        <div className="navbar">
     <img src={image} alt="logo.png" id="logo"></img> 
    <ul>
    <a onClick={()=>navigate('/board')}><br/>
            <a><span class="item" id="first">Dashboard</span></a>
    </a>
        <a onClick={()=>navigate('/orders')}><br/>
                    <a><span class="item"  id="second">Orders</span></a>
            </a><br/>
            <a onClick={()=>navigate('/customers')}>
                    <span class="item" id="third">Customers</span>
            </a><br/>
            <a onClick={()=>navigate('/Sales')}>
                    <span class="item" id="fourth">Sales</span>
             </a><br/>
        </ul>
        </div>
  )
}
export default Sidebar;