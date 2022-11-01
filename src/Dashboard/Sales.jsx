import '../App.css';
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

function Sales() {
	return (
		<>
			<h1 className="text-heading">
				Sales
			</h1>
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
		</>
	);
}

export default Sales;
