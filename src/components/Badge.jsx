import { TouchTarget } from '@/components/Button'
import { Link } from '@/components/Link'
import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

const colors = {
  red: 'bg-red-500/15 text-red-400 group-data-[hover]:bg-red-500/20',
  orange:
    'bg-orange-500/10 text-orange-400 group-data-[hover]:bg-orange-500/20',
  amber: 'bg-amber-400/10 text-amber-400 group-data-[hover]:bg-amber-400/15',
  yellow:
    'bg-yellow-400/10 text-yellow-300 group-data-[hover]:bg-yellow-400/15',
  lime: 'bg-lime-400/10 text-lime-300 group-data-[hover]:bg-lime-400/15',
  green: 'bg-green-500/10 text-green-400 group-data-[hover]:bg-green-500/20',
  emerald:
    'bg-emerald-500/10 text-emerald-400 group-data-[hover]:bg-emerald-500/20',
  teal: 'bg-teal-500/10 text-teal-300 group-data-[hover]:bg-teal-500/20',
  cyan: 'bg-cyan-400/10 text-cyan-300 group-data-[hover]:bg-cyan-400/15',
  sky: 'bg-sky-500/10 text-sky-300 group-data-[hover]:bg-sky-500/20',
  blue: 'bg-blue-500/15 text-blue-300 group-data-[hover]:bg-blue-500/25',
  indigo:
    'bg-indigo-500/15 text-indigo-400 group-data-[hover]:bg-indigo-500/20',
  violet:
    'bg-violet-500/15 text-violet-400 group-data-[hover]:bg-violet-500/20',
  purple:
    'bg-purple-500/15 text-purple-400 group-data-[hover]:bg-purple-500/20',
  fuchsia:
    'bg-fuchsia-400/10 text-fuchsia-400 group-data-[hover]:bg-fuchsia-400/20',
  pink: 'bg-pink-400/10 text-pink-400 group-data-[hover]:bg-pink-400/20',
  rose: 'bg-rose-400/10 text-rose-400 group-data-[hover]:bg-rose-400/20',
  zinc: 'bg-white/5 text-zinc-400 group-data-[hover]:bg-white/10',
}

const sizes = {
  xs: 'px-1 py-0.5 text-xs/5',
  small: 'px-1.5 py-0.5 text-sm/5',
  medium: 'px-2 py-1 text-base',
  large: 'px-3 py-2 text-lg/5',
  xl: 'px-5 py-3 text-3xl/6',
}

export function Badge({ color = 'zinc', size = 'small', className, ...props }) {
  return (
    <span
      {...props}
      className={clsx(
        'inline-flex items-center gap-x-1.5 rounded-md font-medium forced-colors:outline',
        sizes[size],
        colors[color],
        className,
      )}
    />
  )
}

export const BadgeButton = forwardRef(function BadgeButton(
  { color = 'zinc', className, children, ...props },

  ref,
) {
  let classes = clsx(
    className,
    'group relative inline-flex rounded-md focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Headless.Button>
  )
})

export function getColourAndTextByScore(color) {}
