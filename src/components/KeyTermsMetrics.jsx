import { Badge } from '@/components/Badge'
import { KeyTerm } from '@/components/KeyTerm'
import { Subheading } from '@/components/Text'
import { getPercentageColor } from '@/utils/statusUtils'

export function KeyTermsMetrics({ keywordMetrics, className, ...props }) {
  return (
    <div className={className} {...props}>
      <Subheading>Keyword Match</Subheading>
      <div className="mt-4 rounded-lg p-2">
        <table className="w-full min-w-full table-auto whitespace-nowrap text-left text-sm/6 text-white">
          <thead className="text-zinc-400">
            <tr className="text-left">
              <th className="border-b border-b-zinc-950/10 px-3 pb-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10">
                Keyword
              </th>
              <th className="border-b border-b-zinc-950/10 px-3 pb-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10">
                Match %
              </th>
              <th className="border-b border-b-zinc-950/10 px-3 pb-4 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10">
                Suggestions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {keywordMetrics.map((keywordMetric, index) => {
              const badgeColor = getPercentageColor(keywordMetric.matchPercent)
              return (
                <tr key={index}>
                  <td className="whitespace-nowrap px-3 py-4 text-base font-bold text-white">
                    <KeyTerm>{keywordMetric.keyword}</KeyTerm>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <Badge color={badgeColor}>
                      {keywordMetric.matchPercent}%
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    {keywordMetric.suggestion}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
