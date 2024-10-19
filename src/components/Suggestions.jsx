'use client' // This page is also client-side because we need to read query params

import { Badge } from '@/components/Badge'
import { Subheading } from '@/components/Text'
import { PencilIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Card } from '@/components/Card'
export function Suggestions({ suggestions, className, ...props }) {
  const priorityStyles = {
    High: 'red',
    Medium: 'orange',
    Low: 'zinc',
  }

  const iconMapping = {
    Add: PlusIcon,
    Delete: XMarkIcon,
    Edit: PencilIcon,
  }

  return (
    <Card title="Personalized Suggestions" className={className}>
      <div>
        <ul className="flex flex-col divide-y divide-white/10">
          {suggestions.map((suggestion, index) => {
            const Icon = iconMapping[suggestion.type] // Dynamically selecting the icon
            return (
              <li key={index} className="w-full py-5">
                <div className="flex content-center">
                  <Icon className="mr-4 h-6 w-6 self-baseline text-gray-400" />
                  <div>
                    <p className="text-base font-semibold">
                      {suggestion.title}
                    </p>
                    <Badge
                      className="mt-1"
                      color={priorityStyles[suggestion.priority]}
                    >
                      {suggestion.priority} Priority
                    </Badge>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Card>
  )
}
