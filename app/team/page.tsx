import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">The Crew</span>
          <h1 className="page-title">Meet Our Team</h1>
          <p className="page-lead">The people behind Orion Nebula. Click a profile to see more.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-4">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Want to join the crew?" text="We are always happy to meet curious people who love building things." />
    </>
  );
}
