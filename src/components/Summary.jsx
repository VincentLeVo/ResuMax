import { Badge } from '@/components/Badge'
import { Divider } from '@/components/Divider'
import { Subheading } from '@/components/Text'
import { Card } from '@/components/Card'
import clsx from 'clsx'

export function Summary({ matchScore, className, ...props }) {
  // Determine badge text and color based on matchScore
  const getBadgeDetails = (score) => {
    if (score > 75) {
      return { text: 'Optimized', color: 'green' }
    } else if (score >= 45 && score <= 74) {
      return { text: 'Can Be Improved', color: 'yellow' }
    } else {
      return { text: 'Needs Work', color: 'red' }
    }
  }

  const badgeDetails = getBadgeDetails(matchScore)
  const badgeColorClasses = {
    red: 'bg-red-500/10 text-red-400 border-red-500/10',
    green: 'bg-green-500/10 text-green-400 border-green-500/10',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/10',
  }
  return (
    <Card className={className} title="Summary" {...props}>
      <div className="flex flex-col items-center">
        <div className="mb-3 text-xl font-normal">Resume Match Score</div>
        <div
          className={clsx(
            `flex h-36 w-36 items-center justify-center rounded-full border-4 text-5xl font-bold`,
            badgeColorClasses[badgeDetails.color],
          )}
        >
          {matchScore}%
        </div>
        <div>
          <Badge size="xl" color={badgeDetails.color} className="mt-6">
            {badgeDetails.text}
          </Badge>
        </div>
      </div>
    </Card>
  )
}
