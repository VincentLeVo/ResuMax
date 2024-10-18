import { Badge } from '@/components/Badge'
import { Divider } from '@/components/Divider'
import { Subheading } from '@/components/Text'

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

  return (
    <div className={className} {...props}>
      <Subheading>Summary</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        <div className="">
          <div className="text-md/6 mb-2 font-normal">Resume Status:</div>
          <Badge color={badgeDetails.color} size="large">
            {badgeDetails.text}
          </Badge>
        </div>
        <Divider />
        <div className="flex flex-col">
          <div className="text-md/6 mb-2 font-normal">Match Score:</div>
          {/* This is so Tailwind Processes the CSS */}
          <div className="hidden bg-green-500/10 bg-red-500/10 bg-yellow-500/10" />
          <div
            className={`h-24 w-24 rounded-full bg-${badgeDetails.color}-500/10 text-${badgeDetails.color}-400 flex items-center justify-center text-2xl font-bold`}
          >
            {matchScore}%
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute right-0 top-0">
              <span className="cursor-pointer text-gray-400">?</span>
              <div className="tooltip rounded bg-gray-200 p-2 text-sm text-gray-700">
                This score reflects the match between your resume and the
                uploaded job description.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
