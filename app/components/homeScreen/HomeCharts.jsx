import React from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'Recharts';



export default class HomeCharts extends React.Component {


  render() {
    const data = [
        {name: 'L', value: 19},
        {name: 'M', value: 18},
        {name: 'M', value: 16},
        {name: 'J', value: 17},
        {name: 'V', value: 20},
        {name: 'S', value: 21},
        {name: 'D', value: 20},
  ];

    return (
      <div className= {"containerStyle " + this.props.className} >
      <ResponsiveContainer>
      <AreaChart width={300} height={100} data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3 "/>
        <Tooltip/>
        <Area type='monotone' dataKey='value' stroke='#1898C4' fill='#4BCBF7' />
      </AreaChart>
      </ResponsiveContainer>



      </div>
    )
  }
}
