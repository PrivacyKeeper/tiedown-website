import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much of Your Run Is the Horse?",
  description:
    "The horse does roughly half the work in tie-down roping and nobody can tell you which half. Stop, rate, working the rope, and the two faults that quietly cost you tenths every run.",
  alternates: {
    canonical:
      "https://www.tiedown.pro/blog/how-much-of-your-run-is-the-horse",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        How Much of Your Run Is the Horse?
      </h1>

      <p>
        Everyone in tie-down agrees the horse does about half the work. It is
        why a finished calf horse is a six-figure animal and why people will
        drive nine hours to look at one.
      </p>

      <p>
        Ask which half, though, and nobody can tell you. It is the most
        expensive unmeasured thing in rodeo.
      </p>

      <h2>What the horse is actually doing</h2>

      <h3>Scoring</h3>
      <p>
        Standing quietly in the box and leaving when you ask. A horse that is
        nervous in the box makes you ride him instead of watching the calf, and
        it costs you at the barrier before the run even starts.
      </p>

      <h3>Rate</h3>
      <p>
        How he reads the calf and puts you in position. Good rate is why one
        roper throws in rhythm and another is reaching.
      </p>

      <h3>The stop</h3>
      <p>
        The single most valuable thing a calf horse does. A hard, square stop
        puts you on the ground already moving down the rope. A soft or drifting
        stop costs you tenths on the dismount — and on video it will look like
        you got off badly.
      </p>

      <h3>Working the rope</h3>
      <p>
        This is the one people undervalue. While you are flanking and tying, the
        horse should hold the rope tight and keep the calf where you need it,
        without pulling and without giving. That is a trained skill and it is
        the difference between a tie that goes smoothly and a wreck.
      </p>

      <h2>The two faults</h2>

      <p>Two horse behaviours quietly ruin runs, and both have names:</p>

      <ul>
        <li>
          <strong>Pulls the rope</strong> — too much tension, dragging the calf
          toward the horse, and the source of a lot of dragging fines
        </li>
        <li>
          <strong>Steps up</strong> — moves forward and gives you slack, which
          is worse than it sounds because slack during the six-second window is
          how a tie comes undone
        </li>
      </ul>

      <p>
        Both are horse faults. Both show up as your no time. Neither is visible
        in a results sheet.
      </p>

      <h2>Attributing the run</h2>

      <p>
        Once a run is split into segments, some of them belong mostly to the
        horse and some mostly to you:
      </p>

      <ul>
        <li>
          <strong>Mostly horse</strong> — box start, approach, stop frame, rope
          tension through the tie
        </li>
        <li>
          <strong>Mostly you</strong> — swing and delivery, flank technique,
          wraps and hooey
        </li>
        <li>
          <strong>Shared</strong> — the dismount, which is your athleticism
          landing on his stop
        </li>
      </ul>

      <p>
        Track that across a season and you get an actual number for what the
        horse contributes. Which matters for two very different reasons.
      </p>

      <h2>Why it matters for training</h2>

      <p>
        If your times got worse this spring, it is worth knowing whether{" "}
        <em>you</em> got worse or the horse did. Horses lose their stop. They
        get sore, they get strong, they start anticipating. A contribution trend
        that drops while your own segments hold steady is a signal to get the
        vet out, not to go rope more.
      </p>

      <h2>Why it matters for selling</h2>

      <p>
        Calf horses trade at prices where a real resume changes the
        transaction. Right now a seller says &ldquo;he&apos;s honest, he stops
        good, he works a rope.&rdquo; Everybody says that.
      </p>

      <p>
        A horse with a documented rating history from{" "}
        <strong>multiple riders</strong>, arena-by-arena performance, and a
        measured contribution across a season is a different conversation
        entirely. That is the strongest argument a seller has ever had, and it
        is why the horse resume export is one of the things people will pay for.
      </p>

      <h2>Mount money, while we are here</h2>

      <p>
        Borrowing horses is standard practice in this event and it is tracked by
        memory and arguments. Logging who rode whose horse, at what event, and
        what was owed is a small feature that gets used constantly — and it is
        in the app for exactly that reason.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
