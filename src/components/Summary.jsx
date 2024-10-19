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
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/10',
    lime: 'bg-lime-500/10 text-lime-400 border-lime-500/10',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/10',
  }
  const cardColorClasses = {
    red: 'bg-red-700/10 border-red-500/10',
    green: 'bg-green-700/10  border-green-500/10',
    orange: 'bg-orange-700/10  border-orange-500/10',
    lime: 'bg-lime-700/10  border-lime-500/10',
    yellow: 'bg-yellow-700/10  border-yellow-500/10',
  }

  return (
    <Card
      className={clsx(cardColorClasses[badgeDetails.color], className)}
      title="Summary"
      {...props}
    >
      <div className="flex flex-col items-center">
        <div className="mb-3 text-center text-lg text-gray-200">
          Resume Status
        </div>
        <div
          className={clsx(
            `flex h-36 w-36 items-center justify-center rounded-full border-4 text-5xl font-semibold`,
            badgeColorClasses[badgeDetails.color],
          )}
        >
          {matchScore}%
        </div>

        <div>
          <Badge
            size="xl"
            color={badgeDetails.color}
            className="mt-10 text-center text-xl font-semibold text-white xl:text-3xl"
          >
            {badgeDetails.text}
          </Badge>
          <div className="mt-3 text-center text-sm text-gray-400">
            Resume Status
          </div>
        </div>
      </div>
    </Card>
  )
}
