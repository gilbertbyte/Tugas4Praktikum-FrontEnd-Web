import Link from "next/link";
import type { Mission } from "@/data/missions";

export default function MissionCard({ mission }: { mission: Mission }) {
  const bannerStyle = {
    background: `linear-gradient(135deg, hsl(${mission.hue} 70% 45%), hsl(${mission.hue + 60} 70% 22%))`,
  };

  return (
    <Link href={`/missions/${mission.slug}`} className="card mission-card">
      <div className="card-banner" style={bannerStyle}>
        <span className="category">{mission.category}</span>
        <span className={mission.status === "Live" ? "badge badge-live" : "badge badge-dev"}>
          {mission.status}
        </span>
      </div>
      <div className="card-body">
        <h3>{mission.title}</h3>
        <p className="muted">{mission.summary}</p>
        <span className="more">Read more &rarr;</span>
      </div>
    </Link>
  );
}
