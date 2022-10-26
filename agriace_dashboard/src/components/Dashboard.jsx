import React from 'react'
import './Dashboard.css'
import Pic from './Logo.png'
import './Orders'
import {useNavigate} from "react-router-dom"
import Salesgraphs from './Salesgraphs'


    const Dashboard=()=>{
        const navigate=useNavigate
        return(
            <section>
                <div className='graphs'>
                <Salesgraphs/>
                </div>
                <div className='topnav'>
                <div className='header'>
                <p>Welcome to AgriAce</p>
                </div>
                <div className='searchbar'>
                    <input className='search' type='text' placeholder='Search'/>
                </div>

                </div>
                <div className='sidebar'>
                <div className='logo'>
                    <img src={Pic} alt="Logo.png" />
                </div>
                <div className='navbar'>
                  


        <ul>
        <li onClick={()=>navigate('/orders')}><br/>
                
                <a href='dashboard'><span class="item">Dashboard</span></a>
        
        </li><br/>
            <li onClick={()=>navigate('/orders')}><br/>
                
                        <a href='/orders'><span class="item">Orders</span></a>
                
                </li><br/>
                <li onClick={()=>navigate('/customers')}>
                    <a href="/customers">
                        <span class="item">Customers</span>
                    </a>
                </li><br/>
                <li>
                    <a href="/sales">
                        <span class="item">Sales</span>
                    </a>
                </li>
            </ul>
                    </div>
                    
            </div>
            

            
            </section>
        )
    }

    export default Dashboard;