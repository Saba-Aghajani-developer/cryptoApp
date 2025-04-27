import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartComponent({dataType , convertDtat}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
        width={400}
        height={400}
        data={convertDtat}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}>
        <YAxis dataKey={dataType} domain={['auto', 'auto']} />
        <Line type="monotone" dataKey={dataType} stroke="#3874ff" strokeWidth='2px' />
        <CartesianGrid stroke='#404042' />
        <Legend />
        <Tooltip/>
    </LineChart>
</ResponsiveContainer>
  )
}

export default ChartComponent