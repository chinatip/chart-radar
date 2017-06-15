import React from 'react';
import * as Rechart from 'recharts';

export const RadarRechart = ({ data, options={} }) => {
  console.log('RadarReChart.data', data)
  return (
    <Rechart.RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <Rechart.PolarGrid />
      <Rechart.PolarAngleAxis dataKey="label" />
      <Rechart.Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {options.maxValue? <Rechart.PolarRadiusAxis angle={30} domain={[0, options.maxValue]} axisLine={false} tick={false}/>: null}
    </Rechart.RadarChart>
  )
}