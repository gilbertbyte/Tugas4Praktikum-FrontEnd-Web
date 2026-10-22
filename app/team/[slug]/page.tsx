import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import MissionCard from "@/components/MissionCard";
import { team, getMemberBySlug, getInitials } from "@/data/team";
import { getMissionsByLead } from "@/data/missions";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) notFound();

  const missions = getMissionsByLead(member.slug);

  const avatarStyle = {
    background: `linear-gradient(135deg, hsl(${member.hue} 80% 60%), hsl(${member.hue + 60} 75% 40%))`,
  };

  return (
    <div className="container section">
      <Link href="/team" className="back-link">
        &larr; Back to team
      </Link>

      <div className="profile card">
        <div className="avatar avatar-lg" style={avatarStyle}>
          {getInitials(member.name)}
        </div>
        <div>
          <h1 className="page-title">{member.name}</h1>
          <p className="role">{member.role}</p>
          <p className="muted">{member.bio}</p>

          <div className="tags" style={{ margin: "16px 0 24px" }}>
            {member.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>

          <Button href="/contact">Work with {member.name.split(" ")[0]}</Button>
        </div>
      </div>

      {missions.length > 0 && (
        <>
          <h2 className="section-title left">Missions Led</h2>
          <div className="grid grid-2">
            {missions.map((mission) => (
              <MissionCard key={mission.slug} mission={mission} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
