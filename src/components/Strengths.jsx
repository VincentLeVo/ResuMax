import { Subheading } from '@/components/Text'
import { Card } from '@/components/Card'
export function Strengths({ strengths, className, ...props }) {
  return (
    /* Resume Strengths */
    <Card bleedContent title="Strengths" className={className} {...props}>
      <ul className="mt-3 divide-y divide-white/10">
        {strengths.map((strength, index) => {
          return (
            <li key={index} className="w-full p-4 even:bg-white/[2.5%] sm:px-6">
              <div className="flex items-center">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-700/80 text-zinc-500">
                  ✔
                </div>
                <div className="ml-4">
                  <p className="text-sm">{strength.title}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
