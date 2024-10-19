import { clsx } from 'clsx'
import { Subheading } from '@/components/Text'

export function Card({
  title = '',
  bleedContent = false,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(
        'divide-y divide-slate-500/20 overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-900 shadow',
        className,
      )}
      {...props}
    >
      {title && (
        <div className="px-4 py-3 sm:px-6">
          <Subheading>{title}</Subheading>
        </div>
      )}
      <div className={!bleedContent && 'px-4 py-5 sm:p-6'}>{children}</div>
    </div>
  )
}
