import Layout from "../Layout"
import '../App.css'
import { useNavigate } from "react-router-dom"
import  image from './Image/logo.png'
import { AiFillBank } from "react-icons/ai";
import { AiFillSchedule, AiFillSketchCircle ,AiFillRest} from "react-icons/ai";

const Sidebar = () => {
    const navigate= useNavigate()
  return (
       
       <div className="navbar">
                 <AiFillBank id="icon1"/>
     <img src={image} alt="logo.png" id="logo"></img> 
    <ul>
    <a onClick={()=>navigate('/board')}><br/>
            <a><span class="item" id="first">Dashboard</span></a>
    </a>
        <a onClick={()=>navigate('/orders')}><br/>
                    <a><span class="item"  id="second">Orders</span></a>
                            { <AiFillSchedule id="icon2"/> }

            </a><br/>
            <a onClick={()=>navigate('/customers')}>
           < AiFillSketchCircle id="icon3"/>
                    <span class="item" id="third">Seeds</span>
            </a><br/>
            <a onClick={()=>navigate('/Sales')}>
            < AiFillRest id="icon4"/>
                    <span class="item" id="fourth">Sales</span>
             </a><br/>
        </ul>
        </div>
  )
}
export default Sidebar;