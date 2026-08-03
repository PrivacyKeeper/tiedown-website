export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TieDown.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for tie-down roping. A social platform for the whole calf roping community, plus per-segment run breakdown, horse contribution analysis, a six-second hold trainer, entries, draws, calf history, and a marketplace. Built for amateur, jackpot and youth ropers.",
    url: "https://www.tiedown.pro",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "TieDown.pro",
      url: "https://www.tiedown.pro",
      email: "support@tiedown.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TieDown.pro",
    url: "https://www.tiedown.pro",
    description:
      "The complete tie-down roping platform. Community, segments, horses, calves, events, entries, results, and rules in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.tiedown.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // The rules reference is the page most likely to earn a featured snippet.
  // Where a rule varies between the pro and amateur associations, the answer
  // says so rather than asserting one value.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the six-second rule in tie-down roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After the roper ties three legs and signals for time, they remount and the horse steps forward to slack the rope. The three legs must remain tied for six seconds, timed by the judge, beginning when the rope horse takes his first step forward after the roper has remounted and running until the judge approves the tie. The rope must stay slack throughout. If the calf kicks free within those six seconds it is a no time.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as a legal tie in tie-down roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The roper must cross and tie any three legs with the piggin' string. To qualify there must be at least one wrap around all three legs plus a half hitch, known as the hooey. Anything less is an illegal tie and a no time.",
        },
      },
      {
        "@type": "Question",
        name: "Is any catch legal in tie-down roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tie-down roping is catch as catch can — unlike team roping and breakaway, any catch is legal as long as the rope holds the calf until the roper gets a hand on it. The roper must then dismount, go down the rope, and throw the calf by hand. If the calf is already down when the roper reaches it, the calf must be let up onto its feet and then thrown by hand.",
        },
      },
      {
        "@type": "Question",
        name: "What is the barrier penalty in tie-down roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breaking the barrier carries a 10-second penalty added to the raw time. The score line length is set by show management according to arena conditions and calf speed. Apart from the barrier, tie-down roping has essentially no time-adding penalties — every other infraction is a no time.",
        },
      },
      {
        "@type": "Question",
        name: "What is the jerk-down rule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The jerk-down rule addresses a calf being jerked over backward by the rope. Under PRCA rules a calf jerked off all four feet whose back or head touches the ground before the roper reaches it results in the roper being flagged out with a no time; fines may also apply. Amateur associations vary in whether they enforce it, and how. It is one of the most variable rules in the event, so always check the ground rules of the roping you are entering.",
        },
      },
      {
        "@type": "Question",
        name: "How many loops do you get in tie-down roping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the association. Professional rodeo is typically one loop. Amateur, youth and jackpot ropings frequently allow two loops, with a second rope carried or the first rope recoiled. A dropped rope that has to be recoiled counts as a thrown rope for loop-count purposes.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
