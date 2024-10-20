import { Subheading } from '@/components/Text'
import { getPercentageColor } from '@/utils/statusUtils'
import { Card } from '@/components/Card'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

export function ResumeBreakdown({ breakdowns, className, ...props }) {
  const colors = ['#d946ef', '#2563eb', '#22d3ee']

  const breakdownData = breakdowns.map((breakdown, index) => {
    return {
      name: breakdown.title,
      value: breakdown.percentage,
      fill: colors[index % colors.length],
    }
  })

  return (
    <Card title="Resume Breakdown" className={className} {...props}>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={11}
          data={breakdownData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={10} // Rounded bars
            max={100}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <ul className="mt-3">
        {breakdowns.map((breakdown, index) => (
          <li key={index} className="mt-2 flex justify-between">
            <div key={breakdown.title} className="flex items-center">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <div className="ml-2 text-sm font-medium text-gray-300">
                {breakdown.title}
              </div>
            </div>
            <div> {breakdown.percentage}%</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
