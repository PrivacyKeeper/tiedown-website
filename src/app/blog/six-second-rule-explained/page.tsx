import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Six-Second Rule: When the Clock Actually Starts",
  description:
    "The six-second tie-hold does not start when you throw your hands up. It starts when the horse takes his first step forward after you remount, and runs until the judge approves the tie.",
  alternates: {
    canonical: "https://www.tiedown.pro/blog/six-second-rule-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        The Six-Second Rule: When the Clock Actually Starts
      </h1>

      <p>
        More tie-down runs end on the six-second rule than on anything else
        except a clean miss. And a surprising number of ropers are not precise
        about when those six seconds actually begin.
      </p>

      <h2>What the rule says</h2>

      <p>
        After you tie three legs and signal for time, you remount and the horse
        steps forward to slack the rope. The three legs must remain tied for{" "}
        <strong>six seconds</strong>, timed by the judge.
      </p>

      <p>The clock begins:</p>

      <p>
        <strong>
          When the rope horse takes his first step forward after the roper has
          remounted.
        </strong>
      </p>

      <p>
        It runs until the judge approves the tie. If the calf kicks free inside
        that window, it is a no time.
      </p>

      <h2>What it does not start on</h2>

      <p>
        It does not start when you throw your hands up. It does not start when
        your foot hits the stirrup. It does not start when the flag drops on
        your time.
      </p>

      <p>
        Your time is already taken by then — the six seconds are a separate,
        later window that decides whether that time counts at all. This is why
        a roper can post a great number and still walk out with nothing.
      </p>

      <h2>The rope must stay slack</h2>

      <p>
        Throughout those six seconds, the rope must remain slack until the judge
        approves. This is the part where the horse can quietly cost you a run.
        A horse that steps up gives you slack; a horse that pulls tightens the
        rope. Neither is what you want, and both are horse faults rather than
        roper faults — which is exactly why they are worth tracking separately.
      </p>

      <h2>Why this is the most practiceable rule in rodeo</h2>

      <p>
        Almost nothing else in rodeo can be rehearsed to the exact terms of the
        rulebook. This can. The cue is the horse&apos;s first step, the window
        is six seconds, and the outcome is binary.
      </p>

      <p>So practice it as written:</p>

      <ul>
        <li>Tie in the practice pen the way you tie at a roping</li>
        <li>
          Start a six-second countdown on the horse&apos;s first step, not on
          your hands
        </li>
        <li>Log whether it held</li>
        <li>Watch the percentage over a season</li>
      </ul>

      <p>
        That is a real training metric, and hardly anyone tracks it because
        counting to six in your head while catching your breath is not reliable.
        A timer with an audible countdown is — which is why one is built into
        the app, along with a tie-hold success rate log.
      </p>

      <h2>The tie itself</h2>

      <p>
        Worth restating alongside this, because the two go together: to qualify,
        there must be at least{" "}
        <strong>one wrap around all three legs and a half hitch</strong> — the
        hooey. A tie that is fast but light is a tie that comes loose in the
        window that matters.
      </p>

      <p>
        The fastest tie in the world is worth nothing at 5.8 seconds of hold.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
