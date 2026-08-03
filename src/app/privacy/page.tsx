import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TieDown.pro",
  description:
    "How TieDown.pro collects, uses, and protects your data — including our additional protections for users under 18 and how run analysis and horse rating data are handled.",
  alternates: { canonical: "https://www.tiedown.pro/privacy" },
};

const sections = [
  {
    h: "1. Information We Collect",
    p: "We collect information you provide directly, including name, email, profile information, and payment details when you subscribe to premium features. We also collect competition and practice data such as run times, per-segment timings, barrier margins, tie-hold results, event entries, horse records and ratings, calf records, piggin' string records, location data (GPS), and app interactions.",
  },
  {
    h: "2. How We Use Your Information",
    p: "We use your information to provide and improve our services, produce run analysis and horse contribution reports, process entries and transactions, send notifications about draws, results, and events, personalize your experience, and provide location-based features such as weather, arena finding, and nearby roping discovery. We never sell your personal data to third parties.",
  },
  {
    h: "3. Horse Ratings and Mount Records",
    p: "Horse ratings are attributable — a rating you leave on someone's horse is visible to that horse's owner along with your identity, because a rating history is only worth anything if you can see who gave it. Accumulated rating history travels with the horse, including into a marketplace listing. Mount money records log who rode whose horse, at which event, and what was owed; both parties to a mount record can see it.",
  },
  {
    h: "4. Users Under 18",
    p: "Tie-down roping has a large youth population through junior rodeo, high school and college, and we apply additional protections by default. Profiles for users under 18 default to followers-only visibility. Location precision for minors is never shown below city level. Adults cannot direct message a minor outside of an established school, barn, or mentor relationship, and those relationships carry guardian visibility. Photo and video sharing for minors is controlled by a guardian setting on the account. A minor's recruiting profile does not become public automatically upon turning 18 — that requires an explicit action by the account holder.",
  },
  {
    h: "5. Segment and Run Analysis Data",
    p: "Per-segment timings derived from your runs are stored against your account and are private to you by default. You choose whether to share an analyzed run, and whether to include the horse contribution portion — a report that attributes time to a horse is commercially meaningful if that horse is for sale, so sharing it is always your decision.",
  },
  {
    h: "6. Location Data",
    p: "We collect GPS location data to provide weather information, severe weather alerts, arena and roping discovery, route planning, and hauling features. You can disable location services at any time through your device settings, though some features will be limited. For accounts belonging to minors, location is never displayed to other users below city level regardless of device settings.",
  },
  {
    h: "7. Practice Data vs. Official Results",
    p: "Runs you record yourself are stored as practice data and are clearly labeled as hand-timed. Practice data is never merged into official results, standings, or public leaderboards. Official results originate from event producers and sanctioning bodies.",
  },
  {
    h: "8. Photos, Video, and Run Analysis",
    p: "Video you upload for run analysis is stored securely and processed to produce coaching metrics such as barrier margin, catch and dismount frames, flank technique, tie timing, and jerk-down risk. You control whether analyzed runs are shared. For accounts belonging to minors, guardian controls apply to all media sharing.",
  },
  {
    h: "9. Data Storage and Security",
    p: "Your data is stored securely using industry-standard encryption. We use Supabase for database management and authentication, and Stripe for payment processing, both of which maintain strict security standards.",
  },
  {
    h: "10. Your Rights",
    p: "You have the right to access, correct, or delete your personal data at any time. You can export your data or request account deletion in the app, or by contacting support@tiedown.pro. Guardians may exercise these rights on behalf of a minor.",
  },
  {
    h: "11. Third-Party Services",
    p: "We integrate with third-party services including payment processors (Stripe), mapping and places services (Google Maps), weather APIs, push notification providers, analytics providers, and cloud storage. These services have their own privacy policies governing their use of your data.",
  },
  {
    h: "12. Blocking, Reporting, and Moderation",
    p: "Block, report, and mute are available on every account from launch and apply to messages, posts, and horse ratings alike. Report categories include harassment and unwanted contact specifically. Reports are reviewed by our moderation team, and reported content may be retained for the duration of an investigation and any subsequent enforcement.",
  },
  {
    h: "13. Changes to This Policy",
    p: "We may update this policy as the product develops. Material changes will be communicated in the app and by email to the address on your account.",
  },
  {
    h: "14. Contact",
    p: "Questions about this policy or your data can be sent to support@tiedown.pro.",
  },
];

export default function Privacy() {
  return (
    <div className="arena-page arena-bg-2">
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="arena-panel p-8 md:p-10">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-cream">Privacy Policy</h1>
          <p className="mb-10 text-sm text-muted">Last updated: August 2026</p>

          <div className="space-y-8 text-[#e2d6c1]">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 text-xl font-bold text-brand">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
