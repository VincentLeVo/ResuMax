'use client' // This page is also client-side because we need to read query params

import { Badge } from '@/components/Badge'
import { Subheading } from '@/components/Text'
import {
  PencilSquareIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
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
    Edit: PencilSquareIcon,
  }

  return (
    <Card title="Personalized Suggestions" className={className}>
      <div>
        <ul className="flex flex-col gap-2 divide-y divide-white/10 sm:gap-5">
          {suggestions.map((suggestion, index) => {
            const Icon = iconMapping[suggestion.type] // Dynamically selecting the icon
            return (
              <li
                key={index}
                className="w-full rounded-lg border border-zinc-200/10 bg-zinc-700/20 px-4 py-3 shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-base font-medium">{suggestion.title}</p>
                    {suggestion.description && (
                      <p className="mt-2 max-w-sm text-xs text-zinc-400">
                        {suggestion.description}
                      </p>
                    )}
                    <Badge
                      className="mt-3 sm:mt-6"
                      color={priorityStyles[suggestion.priority]}
                      size="xs"
                    >
                      {suggestion.priority} Priority
                    </Badge>
                  </div>
                  <Icon className="ml-8 h-8 w-8 shrink-0 self-baseline rounded-full border border-white/10 bg-zinc-700/80 p-[0.35rem] text-zinc-400" />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Card>
  )
}
