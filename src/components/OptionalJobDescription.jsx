import { Container } from '@/components/Container'
import { Textarea } from '@/components/Textarea'
import clsx from 'clsx'

export function OptionalJobDescription({
  className,
  jobDescription,
  setJobDescription,
}) {
  return (
    <Container>
      <div>
        <label
          htmlFor="comment"
          className={clsx(
            'block text-lg/6 font-medium leading-6 text-zinc-400',
            className,
          )}
        >
          Optional: Write in your Job Description.
        </label>
        <div className="mt-2">
          <Textarea
            id="jobDescription"
            name="jobDescription"
            rows={4}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
      </div>
    </Container>
  )
}
