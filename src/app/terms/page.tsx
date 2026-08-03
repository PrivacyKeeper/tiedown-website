import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | TieDown.pro",
  description: "The terms governing use of the TieDown.pro app and website.",
  alternates: { canonical: "https://www.tiedown.pro/terms" },
};

const sections = [
  {
    h: "1. Acceptance of Terms",
    p: "By creating an account or using TieDown.pro, you agree to these Terms of Service. If you do not agree, do not use the service. TieDown.pro is operated by Apps 1, LLC.",
  },
  {
    h: "2. Eligibility and Accounts Held by Minors",
    p: "You must be at least 13 years old to create an account. Users under 18 require guardian consent, and guardian controls apply to messaging, media sharing, and location visibility. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.",
  },
  {
    h: "3. Run Analysis Is Informational",
    p: "Segment timings, horse contribution figures, jerk-down risk scores, and every other metric produced by our run analysis are estimates derived from video and sensor data. They are coaching aids. They are not official timings, they do not bind any judge, flagger, or association, and they must never be presented as an official record of a run. Where our analysis and an official time disagree, the official time governs.",
  },
  {
    h: "4. Horse Ratings Are User Opinion",
    p: "Horse ratings, rating history, and horse contribution reports reflect the opinions and data of the users who submitted them. We do not verify, endorse, or warrant any rating, and a rating history is not a representation about a horse's soundness, suitability, or value. Anyone buying or leasing a horse is responsible for their own due diligence, including veterinary examination.",
  },
  {
    h: "5. Practice Data Is Not Official",
    p: "Times, catches, and other run data you record yourself are practice data. They are hand-timed, they are not verified by any judge, timer, or sanctioning body, and they are never treated as official results. Official results, standings, and payouts originate from event producers and sanctioning bodies. Nothing in the app constitutes an official record of competition unless it is provided by the producer of that event.",
  },
  {
    h: "6. Rules Information Is a Reference, Not Authority",
    p: "The rules content in the app and on this website is a plain-language reference compiled from published association rulebooks and amendments. Tie-down rules differ between sanctioning bodies — the loop count and the jerk-down rule in particular — and our reference labels those differences rather than asserting a single answer. It is not a rulebook and it is not legal or competitive advice. Where our reference and an association's current rulebook disagree, the rulebook governs. Ground rules for a specific roping override association rules for that roping.",
  },
  {
    h: "7. Events, Entries, and Payments",
    p: "Event listings, entry fees, added money, office charges, class configurations, ground rules, and sanctioning status are supplied by event producers. We are not the producer of events listed in the app and we are not responsible for the conduct, cancellation, scoring, or payout of any event. Entry fees paid through the app are collected on behalf of the producer, subject to that producer's own entry, draw-out, and refund terms.",
  },
  {
    h: "8. Mount Money and Horse Lending",
    p: "Mount money records, lease terms, and horse-lending logs are a record-keeping convenience. They are not contracts, we are not a party to them, and we do not collect, hold, or enforce payment between users. Any dispute over what was owed for a mount or a lease is between the people involved.",
  },
  {
    h: "9. Marketplace",
    p: "Marketplace listings are created by users. We do not own, inspect, verify, or warrant any horse, animal, item, or service listed, and accumulated rating history on a listed horse is user opinion rather than a warranty. Transactions are between buyer and seller. You are responsible for your own due diligence, including veterinary examination, soundness, health documentation, and transport arrangements. Report suspicious listings using the in-app reporting tools.",
  },
  {
    h: "10. Subscriptions and Billing",
    p: "Premium features are offered on monthly and annual subscriptions. Subscriptions renew automatically until cancelled. You may cancel at any time through your app store account or in the app; cancellation takes effect at the end of the current billing period. Pricing may change with notice.",
  },
  {
    h: "11. Assumption of Risk",
    p: "Rodeo, roping, and horsemanship are inherently dangerous activities. Nothing in this app reduces that risk. Training content, drills, and AI-generated coaching output are informational only and are not a substitute for qualified instruction, veterinary advice, or your own judgment. You participate in equine activities entirely at your own risk.",
  },
  {
    h: "12. Animal Welfare",
    p: "You agree to comply with the humane treatment rules of any association or roping you participate in, including neck rope, dragging, and jerk-down provisions. Content depicting abuse or mistreatment of animals is prohibited and will be removed, and may result in account termination and referral to the relevant sanctioning body. Our jerk-down risk flagging is a coaching and welfare aid, not a compliance guarantee, and does not substitute for a judge's call or your own responsibility toward the animal.",
  },
  {
    h: "13. User Content and Conduct",
    p: "You retain ownership of content you post and grant us a license to host, display, and distribute it within the service. You agree not to post content that is unlawful, harassing, abusive, or that violates another person's privacy — and specifically not to use the service to contact minors outside of an established, guardian-visible school, barn, or mentor relationship. We may remove content and suspend or terminate accounts that violate these terms.",
  },
  {
    h: "14. Service Availability",
    p: "We provide the service on an as-is and as-available basis. We do not warrant uninterrupted or error-free operation, and we may modify, suspend, or discontinue features at any time.",
  },
  {
    h: "15. Limitation of Liability",
    p: "To the maximum extent permitted by law, Apps 1, LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost winnings, lost entry fees, or lost opportunities arising from your use of the service.",
  },
  {
    h: "16. Changes to These Terms",
    p: "We may update these terms as the product develops. Material changes will be communicated in the app and by email. Continued use after a change constitutes acceptance.",
  },
  {
    h: "17. Contact",
    p: "Questions about these terms can be sent to support@tiedown.pro.",
  },
];

export default function Terms() {
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
          <h1 className="mb-2 text-4xl font-bold text-cream">
            Terms of Service
          </h1>
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
