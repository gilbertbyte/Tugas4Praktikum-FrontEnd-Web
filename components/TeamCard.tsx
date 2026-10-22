import Link from "next/link";
import { getInitials, type TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  const avatarStyle = {
    background: `linear-gradient(135deg, hsl(${member.hue} 80% 60%), hsl(${member.hue + 60} 75% 40%))`,
  };

  return (
    <Link href={`/team/${member.slug}`} className="card team-card">
      <div className="avatar" style={avatarStyle}>
        {getInitials(member.name)}
      </div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <div className="tags center-tags">
        {member.skills.slice(0, 2).map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </Link>
  );
}
