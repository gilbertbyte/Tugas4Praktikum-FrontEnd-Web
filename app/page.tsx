import Button from "@/components/Button";
import Logo from "@/components/Logo";
import CallToAction from "@/components/CallToAction";
import MissionCard from "@/components/MissionCard";
import { missions } from "@/data/missions";
import { team } from "@/data/team";

const services = [
  { icon: "🎮", title: "Game & Software Development", text: "We build games, websites and apps, from the first prototype to release." },
  { icon: "🎨", title: "Design", text: "UI/UX, characters and game art that look good and are easy to use." },
  { icon: "📣", title: "Marketing Strategy", text: "Launch plans, social media and community building to reach the right audience." },
];

export default function HomePage() {
  const featured = missions.slice(0, 3);

  const stats = [
    { value: missions.length, label: "Missions" },
    { value: team.length, label: "Crew Members" },
    { value: "3", label: "Years in Orbit" },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-logo">
            <Logo size={130} uid="hero" />
          </div>
          <p className="badge-top">Game &amp; Digital Studio &middot; Jakarta</p>
          <h1>
            Welcome to <span className="gradient-text">Orion Nebula</span>
          </h1>
          <p className="hero-text">
            We are an IT company that builds games and digital products. From development and design to
            marketing strategy, we help your ideas grow into products that people love.
          </p>
          <div className="hero-actions">
            <Button href="/missions">Explore Missions</Button>
            <Button href="/team" variant="outline">
              Meet Our Team
            </Button>
          </div>

          <ul className="stats">
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-sub">We bring development, design and marketing together in one studio.</p>
          <div className="grid grid-3">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="muted">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Recent Missions</h2>
          <p className="section-sub">Some of the games and products we have worked on.</p>
          <div className="grid grid-3">
            {featured.map((mission) => (
              <MissionCard key={mission.slug} mission={mission} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Button href="/missions" variant="outline">
              View All Missions
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
