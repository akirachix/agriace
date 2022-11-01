import '../App.css'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
// Sample chart data
const pdata = [
    {
        day: 'Monday',
        Ksh: 11,
        Amount: 120
    },
    {
        day: 'Tuesday',
        Ksh: 15,
        Amount: 12
    },
    {
        day: 'Wednesday',
        Ksh: 5,
        Amount: 10
    },
    {
        name: 'Thursday',
        Amount: 10,
        Ksh: 5
    },
    {
        day: 'Friday',
        Ksh: 9,
        Amount: 4
    },
    {
        day: 'Sunday',
        Ksh: 10,
        Amount: 8
    },
];


const Board= () => { 
    return(  
        <div id='chat'>  
<div className='cards'>
        <div class="card1">
            <h4>Todays Sales</h4>
            <p>90000</p>
            <div class="per">
            </div>
        
        </div>
        
        <div class="card2">
            <h4>Total Payments</h4>
            <p>10000</p>
            <div class="per">
            </div>
        
        </div>
        
        
        <div class="card3">
            <h4>Total Users</h4>
            <p>70000</p>
            <div class="per">
            </div>
        
        </div>
        
        <div class="card4">
            <h4>Orders</h4>
            <p>700</p>
            <div class="per">
            </div>
        
        </div>
        </div>
        <br></br>
        <br></br>

        <h1 className="text-heading">
                Sales
            </h1>
            <div className='charts'>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="day" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="Ksh"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="Amount"
                        stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
        
      
        
   
    </div>







      
    ) 
}
 export default Board;