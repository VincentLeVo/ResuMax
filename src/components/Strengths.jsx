import { Subheading } from '@/components/Text'

export function Strengths({ strengths, className, ...props }) {
  return (
    /* Resume Strengths */
    <div className={className} {...props}>
      <Subheading>Strengths</Subheading>
      <ul className="mt-3 divide-y divide-white/10">
        {strengths.map((strength, index) => {
          return (
            <li key={index} className="w-full py-3">
              <div className="flex items-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-500/10 text-zinc-500">
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
    </div>
  )
}
