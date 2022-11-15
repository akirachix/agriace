// import '../App.css'

// // const Customers= () => { 
//   import React, { useEffect, useState } from 'react';
//   import axios from 'axios'
  
//   function Customers() {
//     const [, setIsLoading] = useState(false);
//     const [, setError] = useState();
//     const [users, setUsers] = useState([]);
//     useEffect(()=>{
//       getUsers()
//       console.log('customers')
//     },[]);
//     const getUsers =() => {
//       console.log('hhhhh')
//         axios.get("https://morning-meadow-48263.herokuapp.com/seed_companies/")
//         .then(res=>{
//           console.log(res.data)
//           setUsers(res.data)
//         })
//     };
//     return(  

//         <section class="orders">
//             <div class="orders-list">
//               <table class="table">
//                   <thead>
//                     <th>Companies</th>
//                     <th>Location</th>
//                     <th>Seed Variety</th>
//                     <th>Status</th>
//                   </thead>
              
//              {users.map(item => {
//           return (
//             <><tbody /><tr class='active'>
//               <td>{item.company_name}</td>
//               <td>{item.location}</td>
//               <td>{item.seed_variety}</td>
//               <td><button>Available</button></td>


//             </tr><tbody /></>
            
//           )
//         })}

          
//               </table>
//             </div>

//           </section>
        
//     ) 
// }
//  export default Customers;
import '../App.css'
import './Sidebar'
import React, { useEffect, useState } from 'react';
import axios from 'axios'


      function Customers() {
        const [, setIsLoading] = useState(false);
        const [, setError] = useState();
        const [users, setCustomers] = useState([]);
        useEffect(()=>{
          getCustomers()
          console.log('customers')
        },[]);
        const getCustomers=() => {
          console.log('hhhhh')
            axios.get( "https://morning-meadow-48263.herokuapp.com/seed_companies/")
            .then(res=>{
              console.log(res.data)
              setCustomers(res.data)
            })
        };
        return(   
        <section class="orders">
            <div class="orders-list">
              <table class="table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Location</th>
                    <th>variety</th>
                    <th>Status</th>

                  </tr>

                </thead>
                {users.map(item => {
          return (
                <tbody>
                  <tr class = 'active'>
                    <td>{item.company_name}</td>
                    <td>{item.location}</td>
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
 export default Customers;








