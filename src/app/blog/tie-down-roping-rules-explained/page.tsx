import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tie-Down Roping Rules Explained: Catch, Throw, Tie",
  description:
    "Catch as catch can, throwing the calf by hand, one wrap and a hooey, and the two rules that genuinely change depending on where you are roping — the loop count and the jerk-down rule.",
  alternates: {
    canonical:
      "https://www.tiedown.pro/blog/tie-down-roping-rules-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Tie-Down Roping Rules Explained: Catch, Throw, Tie
      </h1>

      <p>
        Tie-down has fewer rules than team roping and almost no penalty table —
        but the rules it does have are absolute. Here is the whole run, in
        order, plus the two things that change depending on where you rope.
      </p>

      <h2>The catch is the easy part</h2>

      <p>
        <strong>Catch as catch can.</strong> Unlike team roping and breakaway,
        any catch is legal in tie-down as long as the rope holds the calf until
        you get a hand on it. There is no bell collar requirement, no legal
        catch table, no half head, no illegal catch to argue about.
      </p>

      <p>
        That is genuinely unusual in roping, and it is worth appreciating —
        every other roping event spends half its rulebook on what counts as a
        catch. Here, if it holds, it counts.
      </p>

      <h2>Throwing by hand</h2>

      <p>
        After the catch you dismount, go down the rope, and{" "}
        <strong>catch and throw the calf by hand</strong>. Two clarifications
        that come up constantly:
      </p>

      <ul>
        <li>
          If the calf is <strong>already down</strong> when you reach it, you
          must let it up onto its feet and then throw it by hand
        </li>
        <li>
          If <strong>your hand is on the calf</strong> when it falls, that
          counts as thrown by hand
        </li>
      </ul>

      <p>
        The first one costs runs. A calf that goes down on the end of the rope
        looks like a gift and is actually a delay — you have to stand it back up.
      </p>

      <h2>The tie</h2>

      <p>
        Cross and tie any three feet with the piggin&apos; string. To qualify
        there must be at least <strong>one wrap around all three legs plus a
        half hitch</strong> — the hooey. Anything less is an illegal tie and a
        no time.
      </p>

      <p>
        Then signal for time, remount, and let the horse step forward to slack
        the rope. What happens next is the{" "}
        <Link href="/blog/six-second-rule-explained">six-second rule</Link>, and
        it deserves its own read.
      </p>

      <h2>The barrier — and the surprising thing about penalties</h2>

      <p>
        Breaking the barrier adds <strong>10 seconds</strong>. The score line is
        set by management according to arena conditions and calf speed.
      </p>

      <p>
        Here is what surprises people coming from other events: apart from the
        barrier, tie-down has essentially{" "}
        <strong>no time-adding penalties</strong>. There is no five-second this
        or ten-second that. Everything else is binary — you qualified or you did
        not.
      </p>

      <p>
        Which means all the interesting information about your run is inside the
        run, not in a penalty column. That is the argument for measuring
        segments.
      </p>

      <h2>The two rules that change</h2>

      <h3>Loop count</h3>

      <p>
        Professional rodeo is typically <strong>one loop</strong>. Amateur,
        youth and jackpot ropings frequently allow <strong>two</strong>, with a
        second rope carried or the first rope recoiled.
      </p>

      <p>
        A dropped rope that has to be recoiled counts as a thrown rope. Never
        carry an assumption from the last roping you entered — it is a class
        setting and you should be told before you pay.
      </p>

      <h3>The jerk-down rule</h3>

      <p>
        This is the most variable rule in the event.{" "}
        <Link href="/blog/jerk-down-rule-explained">
          It gets its own post
        </Link>
        , but in short: under PRCA rules a calf jerked off all four feet whose
        back or head touches the ground before the roper reaches it means a
        flag-out and a no time, with fines also possible. Amateur associations
        vary — some enforce it as written, some fine without flagging, some do
        not enforce it.
      </p>

      <h2>Dragging and welfare</h2>

      <ul>
        <li>
          A neck rope is required on the horse, adjusted so the horse does not
          drag the calf
        </li>
        <li>Unintentional dragging carries a fine</li>
        <li>
          Intentional dragging carries a larger fine and possible
          disqualification from the go-round
        </li>
        <li>
          Excessive prod use and rough handling fall under the general humane
          treatment rules
        </li>
      </ul>

      <h2>Time limit</h2>

      <p>
        Typically <strong>30 seconds</strong>, configurable by association and
        class. A whistle ends the run with no time.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
