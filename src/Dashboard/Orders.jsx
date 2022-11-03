import '../App.css'
import './Sidebar'
import React, { useEffect, useState } from 'react';
import axios from 'axios'


      function Orders() {
        const [, setIsLoading] = useState(false);
        const [, setError] = useState();
        const [users, setOrders] = useState([]);
        useEffect(()=>{
          getOrders()
          console.log('customers')
        },[]);
        const getOrders =() => {
          console.log('hhhhh')
            axios.get( "https://morning-meadow-48263.herokuapp.com/seeds/")
            .then(res=>{
              console.log(res.data)
              setOrders(res.data)
            })
        };
        return(   
        <section class="orders">
            <div class="orders-list">
              <table class="table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Cost</th>
                    <th>Quantity</th>
                    <th>Varietyr</th>
                    <th>Status</th>

                  </tr>

                </thead>
                {users.map(item => {
          return (
                <tbody>
                  <tr class = 'active'>
                    <td>{item.company}</td>
                    <td>{item.cost}</td>
                    <td>{item.quantity}</td>
                    <td>{item.seed_variety}</td>
                    <td><button>Pending</button></td>
                  </tr>
                 
            
                
                </tbody>
)
})}

              </table>
            </div>

          </section>
        
    ) 
}
 export default Orders;








