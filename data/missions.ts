export type Mission = {
  slug: string;
  title: string;
  hue: number;
  category: string;
  year: number;
  status: "Live" | "In Development";
  lead: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const missions: Mission[] = [
  {
    slug: "nebula-runner",
    title: "Nebula Runner",
    hue: 260,
    category: "Mobile Game",
    year: 2026,
    status: "Live",
    lead: "joko-spion",
    summary: "An endless runner where you fly through glowing nebulas and collect stars.",
    description:
      "Nebula Runner is a fast and colorful mobile game. Players guide a small spaceship through a nebula, dodge asteroids and collect stars to unlock new ships. It is easy to learn, but hard to master.",
    highlights: ["Simple one-hand controls", "20+ unlockable ships", "Weekly leaderboard"],
    stack: ["Unity", "C#", "Firebase"],
  },
  {
    slug: "stardust-cafe",
    title: "Stardust Cafe",
    hue: 330,
    category: "PC Game",
    year: 2026,
    status: "In Development",
    lead: "gilbert-imanuel-susanto",
    summary: "A cozy simulation game where you run a small cafe on a space station.",
    description:
      "Stardust Cafe is our upcoming simulation game. Players build and decorate their own cafe, serve drinks to alien customers, earn coins and unlock new recipes. It is made for relaxed play sessions.",
    highlights: ["Cafe decoration system", "30+ drink recipes", "Original cozy soundtrack"],
    stack: ["Unity", "C#", "Aseprite"],
  },
  {
    slug: "comet-brand-kit",
    title: "Comet Brand Kit",
    hue: 30,
    category: "Design",
    year: 2025,
    status: "Live",
    lead: "cecep-kopling",
    summary: "A brand identity and UI design pack made for indie game studios.",
    description:
      "Comet Brand Kit helps small game studios look professional. It includes a logo, a color palette, social media templates and a menu UI pack, all made to be easy to customize.",
    highlights: ["Logo and color palette", "Social media templates", "Game menu UI pack"],
    stack: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    slug: "vega-launch",
    title: "Vega Launch",
    hue: 190,
    category: "Marketing",
    year: 2025,
    status: "Live",
    lead: "yanto-saklar",
    summary: "A launch campaign for an indie game, from trailer to community events.",
    description:
      "Vega Launch is a marketing strategy package for new games. We plan the release schedule, produce a trailer and social media content, and run community events so the game gets noticed from day one.",
    highlights: ["Release and content calendar", "Trailer and social media content", "Community events"],
    stack: ["Canva", "Premiere Pro", "Google Analytics"],
  },
];

export function getMissionBySlug(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}

export function getMissionsByLead(memberSlug: string) {
  return missions.filter((mission) => mission.lead === memberSlug);
}
