import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

// import '.Salesgraphs.css'
  
// Sample chart data
const pdata = [
    {
        day: 'Mon',
        sales: 1,
        // fees: 120
    },
    {
        day: 'Tue',
        sales: 200,
        // fees: 12
    },
    {
        day: 'Wed',
        sales: 5,
        // fees: 10
    },
    {
        day: 'Thur',
        sales: 10,
        // fees: 5
    },
    {
        day: 'Fri',
        sales: 9,
        // fees: 4
    },
    {
        day: 'Sat',
        sales: 10,
        // fees: 8
    },
    {
        day: 'Sun',
        sales: 10,
        // fees: 8
    },
];
  
function Salesgraphs() {
    return (
        <>
            <h1 className="text-heading">
                Line Chart Using Rechart
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="day" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="sales"
                        stroke="black" activeDot={{ r: 8 }} />
                    {/* <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} /> */}
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
  
export default Salesgraphs;