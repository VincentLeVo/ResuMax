import { clsx } from 'clsx'
import { Subheading } from '@/components/Heading'

export function Card({ title = '', className, children }) {
  return (
    <div
      className={clsx(
        'divide-y divide-slate-200/10 overflow-hidden rounded-lg bg-slate-900 shadow',
        className,
      )}
    >
      {title && (
        <div className="px-4 py-5 sm:px-6">
          <Subheading>{title}</Subheading>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}
