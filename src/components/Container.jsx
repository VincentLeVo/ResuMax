import { clsx } from 'clsx'

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="lg:max-w-10xl mx-auto max-w-3xl">{children}</div>
    </div>
  )
}
