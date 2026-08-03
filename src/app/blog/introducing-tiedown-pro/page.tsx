import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing TieDown.Pro",
  description:
    "Four skills chained together with no margin, and at the end all anyone tells you is one number. Here is the app that tells you where the time actually went — and everything else the calf roping community needs.",
  alternates: {
    canonical: "https://www.tiedown.pro/blog/introducing-tiedown-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Introducing TieDown.Pro
      </h1>

      <p>
        Tie-down roping is the most technically compound event in rodeo. A run
        is four separate skills chained together with no margin: score the
        barrier, catch, dismount and get down the rope, flank and tie. Miss any
        one of them and the other three did not matter.
      </p>

      <p>
        And at the end of it, all anyone tells you is a number. You were 9.1.
        Good luck figuring out why.
      </p>

      <h2>You do not want to know you were 9.1</h2>

      <p>
        You want to know you were 2.3 to the catch, 1.1 getting off the horse,
        3.2 in the tie — and that your horse gave up two tenths on the stop.
      </p>

      <p>
        That is the whole idea behind this app. Every run gets split into its
        segments and stored: barrier margin, box start, catch, slack pulled,
        dismount, down the rope, flank, string on, tie complete, remount, horse
        step, judge approval. Then you can look at a season and see which
        segment is actually costing you, instead of guessing.
      </p>

      <p>
        Ropers already do this by hand, scrubbing video frame by frame. Nobody
        publishes it. Automating it is the single strongest thing we can build.
      </p>

      <h2>The horse does half the work</h2>

      <p>
        A good calf horse is a six-figure animal, and everybody knows the horse
        matters more here than in any other event. But ask anyone what
        percentage of their run belongs to the horse and you get a shrug.
      </p>

      <p>
        We attribute segment time to the horse versus the roper — the stop, the
        rate, whether he holds the rope tight through the tie, whether he steps
        up and gives you slack. Across a season that is a real number, and it is
        the strongest argument a seller has ever had for what a horse is worth.
      </p>

      <h2>It is also everything else</h2>

      <p>
        Segments are the differentiator, but this is the app for the whole
        tie-down community, not a analytics tool with a login. The feed, the
        groups, the DMs, the people. Every jackpot within driving distance.
        Calf history so a draw sheet means something. A marketplace for horses,
        ropes, piggin&apos; strings and tack. Coaches, youth classes, and the
        progression from dummy roping to a first check.
      </p>

      <p>
        If you tie down, you should not need another app. That is the bar.
      </p>

      <h2>Built for the jackpot, not the NFR</h2>

      <p>
        Most of us are roping weekend jackpots, junior rodeos, and high school
        and college. The rules there are genuinely different — two loops instead
        of one, lighter calves, shorter scores, and a jerk-down rule that some
        associations enforce and others do not.
      </p>

      <p>
        So none of it is hardcoded. Rules are versioned configuration bound to a
        dated rule set, and the settings that vary get shown to you{" "}
        <em>before</em> you enter. You can read the full reference on our{" "}
        <Link href="/rules">rules page</Link>.
      </p>

      <h2>And one small thing that will get used constantly</h2>

      <p>
        A six-second hold timer. Audible countdown, started on a tap, mimicking
        the judge — plus a log of how often your ties actually hold. It is cheap
        to build and it is the kind of thing you will use in the practice pen
        every single week.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
