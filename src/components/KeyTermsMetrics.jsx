import { Badge } from '@/components/Badge'
import { KeyTerm } from '@/components/KeyTerm'
import { Subheading } from '@/components/Text'
import { getPercentageColor } from '@/utils/statusUtils'
import { Card } from '@/components/Card'
import clsx from 'clsx'
export function KeyTermsMetrics({
  keywordMetrics,
  className,
  children,
  ...props
}) {
  return (
    <Card
      bleedContent
      title="Keyword Metrics"
      className={clsx(
        'divide-y divide-zinc-500/20 overflow-hidden rounded-2xl border border-zinc-200/10 bg-zinc-900 shadow',
        className,
      )}
      {...props}
    >
      <div>
        <table className="mt-4 w-full min-w-full table-auto whitespace-nowrap text-left text-sm/6 text-white">
          <thead className="text-zinc-400">
            <tr className="text-left text-base">
              <th className="border-b border-b-zinc-950/10 p-4 font-medium sm:px-6 dark:border-b-white/10">
                Keyword
              </th>
              <th className="border-b border-b-zinc-950/10 p-4 font-medium sm:px-6 dark:border-b-white/10">
                Match %
              </th>
              <th className="border-b border-b-zinc-950/10 p-4 font-medium sm:px-6 dark:border-b-white/10">
                Suggestions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {keywordMetrics.map((keywordMetric, index) => {
              const badgeColor = getPercentageColor(keywordMetric.matchPercent)
              return (
                <tr className="even:bg-white/[2.5%]" key={index}>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-bold text-white sm:px-6">
                    <KeyTerm>{keywordMetric.keyword}</KeyTerm>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 sm:px-6">
                    <Badge color={badgeColor}>
                      {keywordMetric.matchPercent}%
                    </Badge>
                  </td>
                  <td className="whitespace-normal px-3 py-3 text-xs sm:px-6">
                    {keywordMetric.suggestion}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
