import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About",
};

const timeline = [
  { year: "2023", title: "Game jam", text: "Four friends meet at a game jam and decide to start their own studio." },
  { year: "2024", title: "First release", text: "We launch our first mobile game." },
  { year: "2025", title: "New services", text: "We add design and marketing services and open a small studio in Jakarta." },
  { year: "2026", title: "Bigger projects", text: "We start our biggest games yet and grow our player community." },
];

const values = [
  { title: "Play First", text: "Games should be fun, so we test early and often with real players." },
  { title: "Quality Matters", text: "We work fast, but never at the cost of quality." },
  { title: "Grow Together", text: "Our clients, community and team grow as one." },
];

const stats = [
  { value: "4", label: "Missions" },
  { value: "4", label: "Crew Members" },
  { value: "3", label: "Years in Orbit" },
  { value: "100%", label: "Coffee Powered" },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 className="page-title">
            We build games and products that people <span className="gradient-text">enjoy</span>.
          </h1>
          <p className="page-lead">
            Orion Nebula is an IT company based in Jakarta. We develop games and software, design them to look
            great, and plan the marketing so they reach the right audience. The name comes from a glowing cloud
            in the constellation Orion where new stars are born, and we see every project the same way: an idea
            that grows into something bright.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <ul className="timeline">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-3">
            {values.map((value, index) => (
              <div key={value.title} className="card">
                <span className="number">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p className="muted">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
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

      <CallToAction title="Want to join our crew?" text="We love meeting curious people and bold ideas." />
    </>
  );
}
