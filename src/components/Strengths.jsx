import { Subheading } from '@/components/Text'
import { Card } from '@/components/Card'
export function Strengths({ strengths, className, ...props }) {
  return (
    /* Resume Strengths */
    <Card title="Strengths" className={className} {...props}>
      <ul className="mt-3 divide-y divide-white/10">
        {strengths.map((strength, index) => {
          return (
            <li key={index} className="w-full py-3">
              <div className="flex items-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-700/80 text-zinc-500">
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
