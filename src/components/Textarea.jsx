import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

export const Textarea = forwardRef(function Textarea(
  { className, resizable = true, ...props },
  ref,
) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,
        // Basic layout
        'relative block w-full',
        'dark:before:hidden',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-300',
        'has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none',
      ])}
    >
      <Headless.Textarea
        ref={ref}
        {...props}
        className={clsx([
          // Basic layout
          'relative block h-full w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',
          'sm:text-sm/6text-white text-base/6 placeholder:text-zinc-500',
          'border border-white/10 data-[hover]:border-white/20',
          'bg-white/5',
          'focus:outline-none',
          'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hover]:dark:border-red-600',
          // Disabled state
          'disabled:border-white/15 disabled:bg-white/[2.5%] data-[hover]:disabled:border-white/15',
          // Resizable
          resizable ? 'resize-y' : 'resize-none',
        ])}
      />
    </span>
  )
})
