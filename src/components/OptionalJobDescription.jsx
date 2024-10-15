import { Textarea } from "@/components/Textarea";
import { Container } from "@/components/Container";

export function OptionalJobDescription({ jobDescription, setJobDescription }) {
  return (
    <Container>
      <div>
        <label
          htmlFor="comment"
          className="block text-xs/6 font-medium leading-6 text-zinc-400"
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
  );
}
