import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {data} = props
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="vaccineDate"
        tick={{
          stroke: 'gray',
          strokeWidth: 1,
        }}
      />
      <YAxis
        tickFormatter={dataFormatter}
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
      <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
    </BarChart>
  )
}

export default VaccinationCoverage
