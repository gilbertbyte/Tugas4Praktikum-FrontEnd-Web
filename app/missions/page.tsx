import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import MissionCard from "@/components/MissionCard";
import { missions } from "@/data/missions";

export const metadata: Metadata = {
  title: "Missions",
};

export default function MissionsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h1 className="page-title">Missions</h1>
          <p className="page-lead">
            Games, designs and campaigns we have worked on. Click one to read more.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            {missions.map((mission) => (
              <MissionCard key={mission.slug} mission={mission} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Have a mission in mind?" text="Tell us where you want to go and we will plot the route." />
    </>
  );
}
