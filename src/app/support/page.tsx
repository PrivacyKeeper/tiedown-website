import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | TieDown.pro",
  description:
    "Get help with TieDown.pro — account questions, entries and draws, run analysis and horse ratings, safety reports, producer access, and data requests.",
  alternates: { canonical: "https://www.tiedown.pro/support" },
};

const topics = [
  {
    h: "Account and billing",
    p: "Subscription changes, cancellations, and receipts. Purchases made through the App Store or Google Play must be refunded through those stores.",
    email: "support@tiedown.pro",
    subject: "Account%20and%20billing",
  },
  {
    h: "Entries, draws, and results",
    p: "Entry problems are usually fastest to solve with the event producer, since they control the class, the draw, the steers, and the payout. We can help you reach them.",
    email: "support@tiedown.pro",
    subject: "Entry%20or%20results%20question",
  },
  {
    h: "Run analysis and segments",
    p: "If a segment breakdown looks wrong — a catch frame in the wrong place, a tie time that does not match the video — send us the run. Analysis is derived from video and it is not perfect; we would rather correct it than have you train against a bad number. Analysis is never an official time and does not change a posted result.",
    email: "support@tiedown.pro",
    subject: "Run%20analysis%20question",
  },
  {
    h: "Horse ratings",
    p: "Ratings are attributable — the horse's owner can see who left one. If a rating on your horse is inaccurate or left in bad faith, report it and we will review. If you want a rating you left removed, you can withdraw it yourself.",
    email: "support@tiedown.pro",
    subject: "Horse%20rating%20report",
  },
  {
    h: "Mount money records",
    p: "Mount records are a shared log, not a contract, and we do not hold or transfer money between users. If a record is wrong, either party can flag it. We cannot arbitrate what was owed.",
    email: "support@tiedown.pro",
    subject: "Mount%20money%20question",
  },
  {
    h: "Safety, harassment, or unwanted contact",
    p: "Report it in the app for the fastest response — reports there reach our moderation team directly with the relevant context attached. You can also email us, and if a minor is involved, say so in the subject line so it is prioritized.",
    email: "support@tiedown.pro",
    subject: "Safety%20report",
  },
  {
    h: "Producer access",
    p: "Running a jackpot, series, or rodeo and want the producer console — division builder, draw pot management, steer sorting, scoring screen, and payouts.",
    email: "support@tiedown.pro",
    subject: "Producer%20early%20access",
  },
  {
    h: "Guardian requests",
    p: "Guardians can adjust a minor's visibility, messaging, media sharing, and location settings, and can export or delete the account's data. Adults cannot message a minor outside a linked school, barn, or mentor relationship.",
    email: "support@tiedown.pro",
    subject: "Guardian%20request",
  },
  {
    h: "Data export or account deletion",
    p: "You can export your data or delete your account in the app. If you would rather we handle it, email us from the address on the account.",
    email: "support@tiedown.pro",
    subject: "Data%20request",
  },
  {
    h: "Rules corrections",
    p: "If something in our rules reference is out of date or wrong, tell us. Include the association and the amendment date if you have it — we version rules by date, and the jerk-down rule and loop count genuinely differ between bodies, so corrections are welcome.",
    email: "support@tiedown.pro",
    subject: "Rules%20correction",
  },
];

export default function Support() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#12100e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TieDown.pro" className="h-12 w-auto" />
            <span className="hidden text-base font-bold tracking-wide text-brand sm:block">
              TIEDOWN<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-semibold tracking-wider text-muted uppercase">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-cream">
          Support
        </h1>
        <p className="mt-4 text-lg text-muted">
          Email us at{" "}
          <a
            href="mailto:support@tiedown.pro"
            className="text-brand hover:underline"
          >
            support@tiedown.pro
          </a>{" "}
          and we will get back to you. Pick the closest topic below so it
          reaches the right person faster.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((t) => (
            <div
              key={t.h}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h2 className="text-lg font-semibold text-brand">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#e2d6c1]">
                {t.p}
              </p>
              <a
                href={`mailto:${t.email}?subject=${t.subject}`}
                className="mt-3 inline-block text-sm font-semibold text-brand-2 hover:underline"
              >
                Email about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
