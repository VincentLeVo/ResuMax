// components/LoadingSpinner.jsx
import clsx from 'clsx'
import { PulseLoader } from 'react-spinners'

export function LoadingSpinner({ className }) {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <PulseLoader color="#ffffff" margin={15} size={20} />
    </div>
  )
}
