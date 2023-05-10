import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="18-44" fill="#5a8dee" />
        <Cell name="45-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#2cc6c6" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="middle"
        align="center"
        wrapperStyle={{
          top: 280,
        }}
      />
    </PieChart>
  )
}

export default VaccinationByAge
