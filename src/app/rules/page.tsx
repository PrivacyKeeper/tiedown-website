import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Tie-Down Roping Rules Explained - Six-Second Rule, Legal Tie & Barrier | TieDown.pro",
  description:
    "A complete plain-language tie-down roping rules reference: catch as catch can, throwing by hand, what makes a legal tie, the six-second rule and when the clock starts, the barrier penalty, loop counts by association, and the jerk-down rule. Current as of August 2026.",
  alternates: { canonical: "https://www.tiedown.pro/rules" },
};

/**
 * Most tie-down rules are consistent across associations, but two are not —
 * loop count and the jerk-down rule — and those are exactly the two that
 * catch amateur ropers out. Anything that varies carries an association tag
 * rather than being asserted as universal.
 */
function Assoc({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

export default function RulesPage() {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#12100e]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; TieDown.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Tie-Down Roping Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to the rules that decide runs. Current as
            of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#e2d6c1]">
              <strong className="text-brand">Read this first.</strong> Most
              tie-down rules are the same wherever you rope. Two are not —{" "}
              <strong className="text-brand">the loop count</strong> and{" "}
              <strong className="text-brand">the jerk-down rule</strong> — and
              those are exactly the two that catch people out when they move
              between a jackpot and a rodeo. Both are tagged below.
            </p>
            <p className="mt-3 text-sm text-[#e2d6c1]">
              Ground rules for the specific roping you enter override
              association rules for that roping. Junior and youth classes
              frequently run a shorter score and lighter calves, and those are
              class settings, not exceptions.
            </p>
          </div>

          <h2>The run</h2>
          <p>
            <strong>Catch as catch can.</strong> Unlike team roping and
            breakaway, any catch is legal in tie-down as long as the rope holds
            the calf until the roper gets a hand on it. There is no bell collar
            requirement and no illegal-catch table.
          </p>
          <p>Then, in order:</p>
          <ol>
            <li>
              The roper dismounts, goes down the rope, and catches and throws
              the calf <strong>by hand</strong>
            </li>
            <li>
              If the calf is down when the roper reaches it, the calf must be
              let up onto its feet and then thrown by hand
            </li>
            <li>
              If the roper&apos;s hand is on the calf when the calf falls, the
              calf is considered thrown by hand
            </li>
            <li>
              The roper crosses and ties any three feet with the piggin&apos;
              string
            </li>
            <li>
              The roper signals for time, remounts, and the horse steps forward
              to slack the rope
            </li>
          </ol>

          <h3>What makes a legal tie</h3>
          <p>
            To qualify there must be at least{" "}
            <strong>one wrap around all three legs and a half hitch</strong> —
            the hooey. Anything less is an illegal tie and a no time.
          </p>

          <h2>The six-second rule</h2>
          <p>
            This is the rule that ends more runs than any other, and it is worth
            being precise about when the clock starts.
          </p>
          <p>
            The three legs must remain tied for <strong>six seconds</strong>,
            timed by the judge, beginning{" "}
            <strong>
              when the rope horse takes his first step forward after the roper
              has remounted
            </strong>{" "}
            — not when the roper throws his hands up — and running until the
            judge approves the tie.
          </p>
          <p>
            The rope must remain slack throughout. If the calf kicks free within
            those six seconds, it is a no time.
          </p>
          <p>
            Because the clock is the judge&apos;s and the cue is the horse&apos;s
            first step, this is one of the few things in rodeo you can practice
            exactly: a timer with an audible six-second countdown started on a
            tap, and a log of how often your ties actually hold. That tool is in
            the app.
          </p>

          <h2>The barrier</h2>
          <p>
            An automatic barrier is used, and breaking it carries a{" "}
            <strong>10-second penalty</strong> added to the raw time. The score
            line length is set by show management according to arena conditions
            and calf speed. Barrier malfunctions are handled per the association
            rulebook, with the flagman option.
          </p>
          <p>
            Worth noticing: apart from the barrier, tie-down roping has
            essentially <strong>no time-adding penalties</strong>. Everything
            else is binary — you either qualified or you did not. That makes the
            scoring simple and puts all the interesting information in the
            segments of the run rather than in a penalty table.
          </p>

          <h2>Loops</h2>
          <ul>
            <li>
              <strong>One loop</strong> <Assoc>Pro rodeo</Assoc>
            </li>
            <li>
              <strong>Two loops</strong> <Assoc>Amateur</Assoc>{" "}
              <Assoc>Youth</Assoc> <Assoc>Jackpot</Assoc> — frequently allowed,
              with a second rope carried or the first rope recoiled
            </li>
          </ul>
          <p>
            A dropped rope that has to be recoiled counts as a thrown rope for
            loop-count purposes. Miss with everything you are allowed and it is
            a no time.
          </p>
          <p>
            Never assume the loop count carried over from the last roping you
            entered — it is a class setting and it should be shown to you before
            you pay.
          </p>

          <h2>Time limit</h2>
          <p>
            Typically <strong>30 seconds</strong> in most associations, and
            configurable per class. Some associations run a shorter limit. A
            whistle ends the run with no time.
          </p>

          <h2>The jerk-down rule</h2>
          <p>
            This is the most variable rule in the event, and it exists for
            animal welfare reasons.
          </p>
          <p>
            <Assoc>PRCA</Assoc> If the calf is jerked off all four feet and its
            back or head touches the ground before the roper reaches it, the
            roper is flagged out and receives a no time. Fines may also apply
            for bringing a calf over backward.
          </p>
          <p>
            <Assoc>Amateur</Assoc> Enforcement varies considerably. Some
            associations enforce it as written, some apply a fine without a
            flag-out, and some do not enforce it at all. It is increasingly
            adopted across amateur associations, so check the ground rules
            rather than assuming.
          </p>
          <p>
            Because this varies so much, it is stored per association in our
            rule profiles rather than as a single value — and the run analysis
            flags runs that came close regardless of whether the association
            called it, because that is useful coaching and useful welfare at the
            same time.
          </p>

          <h2>Dragging and humane treatment</h2>
          <ul>
            <li>
              A neck rope is required on the horse, and the contestant must
              adjust it so the horse does not drag the calf
            </li>
            <li>
              <strong>Unintentional dragging</strong> carries a fine
            </li>
            <li>
              <strong>Intentional dragging</strong> carries a larger fine and
              possible disqualification from the go-round
            </li>
            <li>
              Excessive prod use and rough handling are penalized under the
              general humane treatment rules that apply across all events
            </li>
          </ul>

          <h2>The calves</h2>
          <p>
            Calves must be healthy and uniform, with horns no longer than two
            inches. Weight ranges are set by the association and the class —
            junior and youth classes run lighter calves and a shorter score, and
            both are expressed as class rules rather than treated as exceptions.
          </p>

          <h2>What this means for your run</h2>
          <p>
            Because there are no time-adding penalties beyond the barrier, every
            tenth you are losing is inside the run itself: the catch, the
            dismount, going down the rope, the flank, and the tie. Those are the
            five places to look, and four of them are trainable in a practice
            pen.
          </p>
          <p>
            That is why <Link href="/">TieDown.pro</Link> breaks every run into
            segments rather than reporting a single time.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong> PRCA
              values are from the 2026 PRCA Rule Book. Amateur, youth and
              jackpot variations are as documented in the TieDown.pro build map,
              rules-verified 24 July 2026. Rodeo rules change annually and
              mid-season. This page is a reference, not a rulebook — the
              association&apos;s current published rulebook and the ground rules
              of the specific roping always govern.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
