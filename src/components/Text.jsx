import clsx from 'clsx'

export function Heading({ className, level = 1, ...props }) {
  let Element = `h${level}`

  return (
    <Element
      {...props}
      className={clsx(
        className,
        'sm:text-xl/8text-white text-2xl/8 font-semibold text-white',
      )}
    />
  )
}

export function Subheading({ className, level = 2, ...props }) {
  let Element = `h${level}`

  return (
    <Element
      {...props}
      className={clsx(
        className,
        'text-lg/7 font-semibold uppercase tracking-wider text-zinc-400 sm:text-sm/6',
      )}
    />
  )
}
