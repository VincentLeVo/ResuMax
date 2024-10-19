import { Subheading } from '@/components/Text'
import { getPercentageColor } from '@/utils/statusUtils'

export function ResumeBreakdown({ breakdowns, className, ...props }) {
  return (
    <div className={className} {...props}>
      <Subheading>Resume Breakdown</Subheading>
      <dl className="bg-red-400grid mt-3 grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-lg shadow">
        {breakdowns.map((breakdown, index) => {
          const color = getPercentageColor(breakdown.percentage)
          return (
            <div key={index} className="py-6">
              <dt className="text-md mb-2 font-semibold text-white">
                {breakdown.title}: {breakdown.percentage}%
              </dt>
              <dd className="w-full bg-white/10">
                <div
                  className={`bg-${color}-400 h-2 rounded-full`}
                  style={{ width: `${breakdown.percentage}%` }}
                ></div>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
