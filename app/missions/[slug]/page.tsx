import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { missions, getMissionBySlug } from "@/data/missions";
import { getMemberBySlug } from "@/data/team";

export function generateStaticParams() {
  return missions.map((mission) => ({ slug: mission.slug }));
}

export default async function MissionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mission = getMissionBySlug(slug);

  if (!mission) notFound();

  const lead = getMemberBySlug(mission.lead);

  const bannerStyle = {
    background: `linear-gradient(135deg, hsl(${mission.hue} 70% 30%), hsl(${mission.hue + 60} 65% 12%))`,
  };

  return (
    <>
      <div className="detail-banner" style={bannerStyle}>
        <div className="container">
          <Link href="/missions" className="back-link">
            &larr; All missions
          </Link>
          <div className="detail-meta">
            <span className="category">{mission.category}</span>
            <span className={mission.status === "Live" ? "badge badge-live" : "badge badge-dev"}>
              {mission.status}
            </span>
            <span className="muted">{mission.year}</span>
          </div>
          <h1 className="page-title">{mission.title}</h1>
          <p className="page-lead">{mission.summary}</p>
        </div>
      </div>

      <section className="section">
        <div className="container detail-layout">
          <div>
            <h2 className="detail-h2">About this mission</h2>
            <p className="muted">{mission.description}</p>

            <h2 className="detail-h2">Highlights</h2>
            <ul className="list">
              {mission.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }}>
              <Button href="/contact">Start a similar mission</Button>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card">
              <h3>Tools &amp; Tech</h3>
              <div className="tags">
                {mission.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {lead && (
              <Link href={`/team/${lead.slug}`} className="card">
                <h3>Mission Lead</h3>
                <strong>{lead.name}</strong>
                <p className="muted">{lead.role}</p>
              </Link>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
