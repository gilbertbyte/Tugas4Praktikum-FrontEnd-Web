export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  hue: number;
  bio: string;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    slug: "gilbert-imanuel-susanto",
    name: "Gilbert Imanuel Susanto",
    role: "Founder & Game Director",
    hue: 260,
    bio: "Gilbert started Orion Nebula with one goal: to build games and digital products that people enjoy. He leads the direction of every project and keeps the whole team focused.",
    skills: ["Game Design", "Project Management", "Leadership"],
  },
  {
    slug: "joko-spion",
    name: "Joko Spion",
    role: "Lead Developer",
    hue: 190,
    bio: "Joko writes the code behind our games and apps. He likes clean code, smooth gameplay and fixing bugs before anyone notices them.",
    skills: ["Unity", "C#", "Next.js"],
  },
  {
    slug: "cecep-kopling",
    name: "Cecep Kopling",
    role: "UI/UX Designer & Game Artist",
    hue: 330,
    bio: "Cecep designs how our games and apps look and feel. He draws characters, builds menus and cares about the small details that make a product friendly.",
    skills: ["UI/UX Design", "Game Art", "Figma"],
  },
  {
    slug: "yanto-saklar",
    name: "Yanto Saklar",
    role: "Marketing Strategist",
    hue: 150,
    bio: "Yanto plans how our products reach their audience. He handles social media, launch campaigns and community events.",
    skills: ["Marketing Strategy", "Social Media", "Community"],
  },
];

export function getMemberBySlug(slug: string) {
  return team.find((member) => member.slug === slug);
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
}
