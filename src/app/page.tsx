"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's §11 route tree.
 *
 * Ordering: this is an everything-app for the tie-down community, so the
 * social platform leads. The segment breakdown is second because the map
 * identifies it as "the core differentiator" — a roper does not want to know
 * they were 8.4, they want to know they were 2.3 to the catch, 1.1 off the
 * horse, 3.2 in the tie, and that the horse gave up two tenths on the stop.
 *
 * Audience is amateur, jackpot and youth ropers, not PRCA professionals.
 */
const features = [
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Whole Calf Roping World, In One Feed",
    detail: [
      "A real feed — post photos and video of your runs, not just times",
      "Stories that disappear in 24 hours",
      "Like, comment, bookmark, repost, and share anywhere",
      "Follow the ropers you look up to and build your own following",
      "Group chats for your barn, your practice pen, or your travel crew",
      "Direct messaging with read receipts",
      "Find ropers near you or heading to the same jackpot",
      "Regional and arena-based groups — your local roping scene, organized",
      "Celebrate first catches, first ties, first checks, and first buckles",
      "Badges for milestones, streaks, and consistency",
      "Block, report, and mute on every account from day one",
    ],
  },
  {
    id: "segments",
    icon: "⏱️",
    title: "Segment Breakdown",
    desc: "You Weren't Just 8.4. Here's Where It Went.",
    detail: [
      "Every run split into its parts, not reduced to one number",
      "Time to catch — barrier break, box start, swing count, delivery",
      "Dismount efficiency: catch to feet on the ground, where tenths vanish",
      "Down the rope — a function of the horse holding the rope tight",
      "Flank technique and time from flank to flat",
      "Tie time isolated: string on, wraps, hooey, hands up",
      "Remount and the moment the horse steps forward",
      "Compare any run against your own best, segment by segment",
      "Season trends on every segment, so you train the slow one",
    ],
  },
  {
    id: "horse",
    icon: "🐴",
    title: "Your Horse's Share",
    desc: "Half The Run Belongs To The Horse",
    detail: [
      "Horse contribution report: how much of your time is the horse's work",
      "Stop quality, rate quality, and score out of the box rated separately",
      "Works the rope — does he hold it tight while you tie",
      "Pulls the rope or steps up and gives slack, both flagged as faults",
      "Box manners: quiet, nervous, or refuses",
      "Arena-specific stats, because ground and score length genuinely change a horse",
      "Rating history from multiple riders, not just the owner",
      "Suited-to tagging: jackpot, youth, beginner, or open",
      "Auto-generated horse resume with pedigree, earnings, video, and health",
      "Mount money tracking — who rode whose horse, where, and what was owed",
    ],
  },
  {
    id: "practice",
    icon: "🎯",
    title: "Practice Pen",
    desc: "Including The Six-Second Timer You Actually Need",
    detail: [
      "Six-second hold timer with an audible countdown that mimics the judge",
      "Tie-hold success rate logged over time",
      "Dummy tying drills timed for speed, with wraps and hooey form",
      "Log a practice run in seconds, one-handed, from the pen",
      "Hand-timed practice stays completely separate from official results",
      "Piggin' string tracking — brand, material, length, wrap preference, runs",
      "Ground work, box work, and scoring drills",
      "Progress measured against your own baseline, not a professional's",
      "Attach video to any practice run",
    ],
  },
  {
    id: "competition",
    icon: "🏆",
    title: "Competition & Events",
    desc: "Every Jackpot Within Driving Distance",
    detail: [
      "Browse and enter by association, age division, date, and distance",
      "One-go, two-go average, go-round plus short round, and progressive",
      "Junior, youth, open, and senior age divisions",
      "Novice, youth, and incentive sidepots",
      "Season points across a series of ropings",
      "Draw position and calf number pushed to your phone",
      "Live results as times are entered",
      "Payouts by place with ground money",
      "Loop count and jerk-down rule shown before you enter, never assumed",
    ],
  },
  {
    id: "calves",
    icon: "🐂",
    title: "Calf History",
    desc: "Know What You Drew Before You Nod",
    detail: [
      "Calf records with speed rating, stop flag, duck flag, and kick rating",
      "Average time when drawn, across the season",
      "Weight, breed, and times used",
      "Producers can sort and pull mid-roping with the reason logged",
      "Draw sheet that means something instead of just a number",
      "Junior classes tracked separately — lighter calves and a shorter score",
    ],
  },
  {
    id: "rules",
    icon: "📖",
    title: "Rules & Officiating",
    desc: "Know The Call Before It Gets Made",
    detail: [
      "The six-second rule explained properly, including when the clock starts",
      "What makes a legal tie: one wrap around three legs plus the hooey",
      "Catch as catch can, and what still has to happen by hand",
      "Barrier penalty and score line",
      "Jerk-down rule by association — one of the most variable rules in rodeo",
      "Loop counts by association: one at pro rodeos, often two at jackpots",
      "Dragging fines and humane treatment rules",
      "Rules versioned by date — a 2026 run is scored under 2026 rules",
      "Producer ground-rule overrides stated up front, before you pay",
    ],
  },
  {
    id: "welfare",
    icon: "❤️",
    title: "Animal Welfare",
    desc: "On The Right Side Of This, Deliberately",
    detail: [
      "Jerk-down risk flagged from calf trajectory and your slack management",
      "Runs that came close surfaced for review — coaching and welfare together",
      "Neck rope and dragging rules explained plainly",
      "Humane handling education built into the drill library",
      "Calf condition and rest tracking for producers",
      "Fine logging for dragging and rough handling, per the association profile",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Calf horses, prospects, youth-safe horses, practice horses, and leases",
      "Calf ropes by lay and length, practice ropes, kids ropes, by brand",
      "Piggin' strings by length, material, and brand",
      "Calf roping saddles, breast collars, bits, reins, tie-downs, neck ropes",
      "Skid boots, splint boots, bell boots, gloves, rope bags and cans",
      "Trailers, rigs, and living quarters",
      "Roping calves, chute-broke sets, and practice calf leases",
      "Dummies, sleds, chutes, timers, barriers, return alleys, arena drags",
      "Lessons, clinics, training, hauling, farrier, vet, and chiropractic",
      "A horse listed with rating history from multiple riders sells for more",
    ],
  },
  {
    id: "travel",
    icon: "🚗",
    title: "Travel & Safety",
    desc: "Travel Safe, Arrive Ready",
    detail: [
      "Route planner built around where you are actually hauling",
      "Arena finder along your route, with reviews from other ropers",
      "Real-time weather and severe weather alerts",
      "Emergency alert system with one-tap contacts",
      "Hauler directory with reviews, and transport you can book",
      "Coggins and health certificate expiry warnings before you leave",
      "Event biosecurity status surfaced at entry time",
      "Gas, feed, and rest stop finder",
    ],
  },
  {
    id: "training",
    icon: "🤖",
    title: "AI Run Analysis",
    desc: "Coaching For People Who Cannot Afford A Coach (Premium)",
    detail: [
      "Film a run on your phone and get it broken down — no special equipment",
      "Tie speed with wraps and hooey timing isolated, the most trainable segment",
      "Dismount efficiency — where ropers lose two or three tenths unknowingly",
      "Horse contribution report with stop frame and rope tension through the tie",
      "Barrier margin trend across a whole season",
      "Jerk-down risk scoring on every run",
      "Side-by-side against your own reference run",
      "Drill library keyed to whichever segment is costing you most",
      "Book lessons and clinics in the app",
    ],
  },
  {
    id: "health",
    icon: "🩺",
    title: "Equine Health & Care",
    desc: "Complete Health Management (Premium)",
    detail: [
      "Health dashboard at a glance",
      "Vet records and full visit history",
      "Vaccination schedules with reminders",
      "Coggins, health certificates, brand inspection, and import permits",
      "Expiry alerts before they cost you an entry at the gate",
      "Medication schedules with alerts",
      "Nutrition logs and feeding plans",
      "Farrier visit tracking and care templates",
    ],
  },
  {
    id: "youth",
    icon: "🎓",
    title: "Youth, School & College",
    desc: "Dummy Roping To The CNFR",
    detail: [
      "NLBRA, NJHSRA and NHSRA standings and qualification tracking",
      "NIRA men's tie-down across all eleven regions",
      "Junior divisions with shorter scores and lighter calves as class rules",
      "The breakaway-to-tie-down progression, cross-linked for ropers who do both",
      "Coach dashboards with roster, entries, travel, and eligibility",
      "School event calendars and region standings",
      "Scholarship board with deadlines and requirements",
      "Recruiting profile, coaches-only by default for minors",
      "Progression pathway: dummy roping, first catch, first tie under target, first check",
    ],
  },
  {
    id: "producers",
    icon: "💼",
    title: "Producers",
    desc: "Five Inputs, Offline First (Premium)",
    detail: [
      "Scoring screen: time, barrier, catch, tie held, jerk down — that is all of it",
      "Six-second timer built in, with an audible cue for the judge",
      "Jerk-down toggle with an association-dependent prompt",
      "Time limit countdown visible to the flagger",
      "Barrier configuration and score line locked for the go-round",
      "Calf draw with speed, kick, and duck flags",
      "Fine logging for dragging and rough handling, amounts from the association profile",
      "Payout by places with ground money and office charge",
      "Day sheet, draw order, and back numbers",
    ],
  },
];

const segments = [
  { label: "Barrier", note: "margin in ms" },
  { label: "Catch", note: "swing to loop on" },
  { label: "Dismount", note: "catch to ground" },
  { label: "Down the rope", note: "horse holding" },
  { label: "Flank", note: "to flat" },
  { label: "Tie", note: "wraps + hooey" },
  { label: "Remount", note: "to horse step" },
  { label: "Six seconds", note: "judge approves" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Roper profile and community feed",
      "Event discovery and entries",
      "Run log and practice log",
      "Six-second hold timer",
      "Horse profiles and ratings",
      "Calf history",
      "Marketplace access",
      "Rules reference",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "AI segment breakdown on every run",
      "Horse contribution analysis",
      "Jerk-down risk scoring",
      "Video breakdown and side-by-side comparison",
      "Horse resume export",
      "Equine health dashboard and vet records",
      "Priority support",
    ],
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    best: true,
    perks: [
      "Everything in Premium",
      "Save $10 versus monthly",
      "Early access to new features",
      "Exclusive community badge",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot. Hidden from real visitors, so anything here came from a bot.
  const [company, setCompany] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error ?? "");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      // Prefer the server's reason when it gave one: "that address has a typo"
      // and "the mail service is down" need very different things from the
      // visitor, and the generic line tells them neither.
      setErrorMessage(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#12100e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TieDown.pro" className="h-14 w-auto" />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              TIEDOWN<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="TieDown.pro"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          TieDown<span className="text-brand-2">.pro</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;Four skills. One run. No margin.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Tie-down is the most horse-dependent event in rodeo and the most
          technically compound — score the barrier, catch, get down the rope,
          flank and tie, chained together with nowhere to hide.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          And when it&apos;s over, all anyone tells you is the time. You
          don&apos;t want to know you were 8.4. You want to know you were 2.3 to
          the catch, 1.1 off the horse, 3.2 in the tie — and that your horse
          gave up two tenths on the stop.{" "}
          <span className="text-cream">
            This is the app that tells you, and everything else too.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#12100e] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* The run, in segments */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <p className="mb-4 text-center text-sm font-bold tracking-wider text-brand uppercase">
          One run, eight measurements
        </p>
        <div className="segment-strip">
          {segments.map((s) => (
            <div key={s.label} className="segment-cell">
              <p className="text-xs font-bold tracking-wide text-brand-2 uppercase">
                {s.label}
              </p>
              <p className="mt-1 text-[11px] leading-tight text-muted">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Jackpot Ropers", note: "Weekends and series" },
            { label: "Youth & School", note: "Junior through college" },
            { label: "Families", note: "Parents, guardians, fans" },
            { label: "Producers", note: "Jackpots to rodeos" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Fourteen feature groups — the social side, the competing side, and
          everything in between. Built for weekend ropers, not just the ones on
          TV. Tap any card for the full list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#e2d6c1]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#12100e] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Tie-Down Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "A time is not feedback",
              d: "Four skills chained together and one number at the end of it. Splitting the run into segments is the difference between knowing you were slow and knowing what to go practice on Tuesday.",
            },
            {
              t: "The horse does half the work",
              d: "A good calf horse is a six-figure animal, and nobody can tell you what share of the run he actually gave you. We attribute segment time to the horse versus the roper across a whole season.",
            },
            {
              t: "Built for the jackpot, not the NFR",
              d: "Most of us rope weekend jackpots, youth classes, and high school rodeos. Loop counts, calf weights, score lengths and the jerk-down rule all differ there — so none of them are hardcoded.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  Best Value
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#e2d6c1]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when TieDown.pro launches.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#12100e] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            {errorMessage || "Something went wrong. Try again."}
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
