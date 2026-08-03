import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Tie-Down Roping Events & Formats - Jackpots, Averages & Producer Tools | TieDown.pro",
  description:
    "Tie-down roping formats explained: one-go, two-go average, go-round plus short round, progressive, age divisions, sidepots and series. Plus the producer console with a built-in six-second timer, calf draw, and offline scoring.",
  alternates: { canonical: "https://www.tiedown.pro/events" },
};

const formats = [
  { name: "One-go", structure: "Standard at rodeos" },
  { name: "Two-go average", structure: "Jackpots and larger rodeos" },
  { name: "Go-round plus short round", structure: "Finals format" },
  { name: "Progressive", structure: "Advance on a clean run" },
  { name: "Age divisions", structure: "Junior, youth, open, senior" },
  { name: "Sidepots", structure: "Novice, youth, incentive" },
  { name: "Series", structure: "Season points across a set of ropings" },
];

export default function EventsPage() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#12100e]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; TieDown.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-4xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Events &amp; Formats
          </h1>
          <p className="mt-3 text-muted">
            Every format is a class configuration, not a special case — and the
            settings that actually vary get shown to you before you enter.
          </p>

          <h2>Formats</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Format</th>
                  <th className="py-2 font-bold text-brand">Structure</th>
                </tr>
              </thead>
              <tbody className="text-[#e2d6c1]">
                {formats.map((f) => (
                  <tr key={f.name} className="border-b border-ink-border/50">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {f.name}
                    </td>
                    <td className="py-2">{f.structure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What you see before you enter</h2>
          <p>
            Two settings decide how your run gets judged and both differ between
            associations, so both are surfaced on the entry screen rather than
            assumed:
          </p>
          <ul>
            <li>
              <strong>Loop count</strong> — one at pro rodeos, frequently two at
              amateur, youth and jackpot ropings
            </li>
            <li>
              <strong>Jerk-down rule</strong> — enforced, fined, or not enforced,
              depending on the association
            </li>
          </ul>
          <p>
            Alongside those: the barrier penalty, the score line, the time
            limit, the age bracket, and any sidepots. See the{" "}
            <Link href="/rules">rules reference</Link> for what each one means.
          </p>

          <h2>Draws and calves</h2>
          <p>
            Draw position and calf number are pushed to your phone as soon as
            the draw is made. Calves carry a record — speed rating, stop flag,
            duck flag, kick rating, times used, and average time when drawn — so
            a draw sheet tells you something instead of just giving you a
            number.
          </p>
          <p>
            Producers can sort and pull a calf mid-roping with the reason
            logged, and junior classes track separately because they run lighter
            calves and a shorter score.
          </p>

          <h2>Results and payouts</h2>
          <p>
            Live results as times are entered, with go-round standings, the
            average, and the short round tracked separately. Payouts are
            calculated by place with ground money and the office charge handled.
          </p>

          <h2>For producers</h2>
          <p>
            The scoring screen has five inputs — time, barrier, catch, tie held,
            jerk down — and that is genuinely all of it. Tie-down has no
            time-adding penalties beyond the barrier, so the screen stays simple
            and fast. It works offline, because arena wifi does not exist.
          </p>
          <ul>
            <li>
              <strong>Six-second timer built in</strong>, with an audible cue so
              the judge is not counting in their head
            </li>
            <li>
              Jerk-down toggle with an association-dependent prompt, so a judge
              is never guessing which rule set applies
            </li>
            <li>Time limit countdown visible to the flagger</li>
            <li>Barrier configuration and score line locked for the go-round</li>
            <li>Calf draw with speed, kick, and duck flags</li>
            <li>
              Fine logging for dragging and rough handling, with amounts pulled
              from the association profile
            </li>
            <li>Payout by places with ground money and office charge</li>
            <li>Day sheet, draw order, and back numbers</li>
          </ul>

          <h2>Youth and school</h2>
          <p>
            NLBRA, NJHSRA, NHSRA and NIRA classes are supported with their own
            standings and qualification tracking. Coaches get a roster, entries,
            travel, and eligibility in one dashboard. The breakaway-to-tie-down
            progression is the standard pipeline, so ropers who do both see
            their records cross-linked.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              Producing ropings and want early access to the console?{" "}
              <Link href="/#waitlist">Join the waitlist</Link> and mention that
              you produce — producer accounts are being onboarded first.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
