import atlasHero from "@/assets/work-atlas-airbnb.jpg.asset.json";
import atlasJourney from "@/assets/work-atlas.jpg";

export interface CaseStudySection {
  id: string;
  navLabel: string;
  kicker: string;
  headline: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  status: string;
  year: string;
  title: string;
  headline: string;
  heroImage: string;
  role: string;
  timeline: string;
  team: string;
  skills: string;
  sections: CaseStudySection[];
}

export const atlasCaseStudy: CaseStudy = {
  slug: "atlas",
  client: "AIRBNB",
  status: "SHIPPED",
  year: "2026",
  title: "Atlas",
  headline: "Roadmapping for teams that ship weekly",
  heroImage: atlasHero.url,
  role: "Product Manager",
  timeline: "6 months",
  team: "2 designers, 5 engineers",
  skills: "Strategy · Research · Roadmapping",
  sections: [
    {
      id: "overview",
      navLabel: "Overview",
      kicker: "OVERVIEW",
      headline: "Planning was the bottleneck, not building.",
      body: [
        "Teams at Airbnb ship on a weekly cadence, but their roadmaps lived in stale spreadsheets and slide decks that were outdated the moment they were shared. Product managers spent more time reconciling plans than making them.",
        "Atlas set out to make the roadmap a living artifact — one that updates as work ships, and that anyone in the company can trust as the source of truth.",
      ],
    },
    {
      id: "problem",
      navLabel: "Problem",
      kicker: "PROBLEM",
      headline: "Three planning tools, zero shared truth.",
      body: [
        "Interviews with 14 PMs and engineering leads surfaced the same pattern: priorities were negotiated in meetings, recorded in docs, tracked in tickets, and reported in slides. Each artifact drifted from the others within days.",
        "The cost showed up as duplicated work, misaligned launches, and leadership reviews spent arguing about whose numbers were right instead of what to do next.",
      ],
    },
    {
      id: "research",
      navLabel: "Research",
      kicker: "RESEARCH",
      headline: "We shadowed planning rituals for a full quarter.",
      body: [
        "We sat in on sprint planning, quarterly business reviews, and launch readouts across four teams, mapping every moment a plan was created, changed, or communicated.",
        "The key insight: plans changed far more often than they were re-communicated. The winning intervention was not better planning — it was making change propagation effortless.",
      ],
    },
    {
      id: "solution",
      navLabel: "Solution",
      kicker: "SOLUTION",
      headline: "A roadmap that updates itself as work ships.",
      body: [
        "Atlas connects directly to the tools teams already use. When a ticket moves, a launch date shifts, or a scope changes, the roadmap reflects it immediately — no manual syncing, no stale decks.",
        "Views are layered by altitude: engineers see the next two weeks, leads see the quarter, leadership sees the year. Everyone reads the same underlying truth, rendered at the fidelity they need.",
      ],
    },
    {
      id: "outcome",
      navLabel: "Outcome",
      kicker: "OUTCOME",
      headline: "Planning meetings got 40% shorter.",
      body: [
        "Within two quarters of rollout, weekly planning meetings across pilot teams dropped from 50 to 30 minutes, and roadmap-related Slack questions fell by more than half.",
        "Leadership reviews shifted from status recitation to actual decision-making — the outcome we had hoped for, measured in calendars rather than surveys.",
      ],
    },
    {
      id: "reflection",
      navLabel: "Reflection",
      kicker: "REFLECTION",
      headline: "Adoption is a product problem, not a rollout plan.",
      body: [
        "Our first launch assumed teams would migrate their plans into Atlas. They didn't — until Atlas could read the tools they already used. The lesson: meet workflows where they are, and earn the right to change them later.",
        "If I did it again, I would ship the read-only integrations first and the editing experience second. Trust the data, then invite the change.",
      ],
    },
  ],
};

export const atlasSectionImages: Record<string, string | undefined> = {
  research: atlasJourney,
};
