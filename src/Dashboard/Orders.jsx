import '../App.css'

const Orders= () => { 
    return(  

        <section class="orders">
            <div class="orders-list">
              <table class="table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Order ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Syngenta</td>
                    <td>0789003456</td>
                    <td>123OD</td>
                    <td><button>Pending</button></td>
                  </tr>
                  <tr class="active">
                    <td>ADC Molo</td>
                    <td>0789003400</td>
                    <td>123PL</td>
                    <td><button>Approved</button></td>
                  </tr>
                  <tr>
                    <td>Fresh Crop</td>
                    <td>0789007756</td>
                    <td>T123ED</td>
                    <td><button>Pending</button></td>
                  </tr>
                  <tr>
                    <td>Kisima</td>
                    <td>0719000456</td>
                    <td>D123ED</td>
                    <td><button>Pending</button></td>
                  </tr>
                  <tr>
                    <td>Syngenta</td>
                    <td>0789003456</td>
                    <td>123OD</td>
                    <td><button>Pending</button></td>
                  </tr>
                  <tr class="active">
                    <td>ADC Molo</td>
                    <td>0789003400</td>
                    <td>123PL</td>
                    <td><button>Approved</button></td>
                  </tr>
                  <tr>
                    <td>Fresh Crop</td>
                    <td>0789007756</td>
                    <td>T123ED</td>
                    <td><button>Pending</button></td>
                  </tr>
                  <tr>
                    <td>Kisima</td>
                    <td>0719000456</td>
                    <td>D123ED</td>
                    <td><button>Pending</button></td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </section>
        
    ) 
}
 export default Orders;








