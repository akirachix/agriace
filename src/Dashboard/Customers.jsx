import '../App.css'

// const Customers= () => { 
  import React, { useEffect, useState } from 'react';
  import axios from 'axios'
  
  function Customers() {
    const [, setIsLoading] = useState(false);
    const [, setError] = useState();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      getUsers()
      console.log('customers')
    },[]);
    const getUsers =() => {
      console.log('hhhhh')
        axios.get("https://morning-meadow-48263.herokuapp.com/seed_companies/")
        .then(res=>{
          console.log(res.data)
          setUsers(res.data)
        })
    };
    return(  

        <section class="orders">
            <div class="orders-list">
              <table class="table">
                <thead class = 'active'>
                  <tr>
                    <th>Companies</th>
                    <th>Location</th>
                    <th>Seed Variety</th>
                    <th>Status</th>
                  </tr>
              
                </thead >
                {users.map(item => {
          return (
            <tr class ='active'>
              <td>{item.company_name}</td>
              <td>{item.location}</td>
              <td>{item.seed_variety}</td>  
              <td><button>Available</button></td>
  
             
            </tr>
            
            
          )
        })}

          
              </table>
            </div>
          </section>
        
    ) 
}
 export default Customers;








