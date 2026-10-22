type LogoProps = {
  size?: number;
  uid?: string;
};

export default function Logo({ size = 40, uid = "logo" }: LogoProps) {
  const ring = `${uid}-ring`;
  const pink = `${uid}-pink`;
  const violet = `${uid}-violet`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Orion Nebula logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A855F7" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
        <radialGradient id={pink}>
          <stop offset="0" stopColor="#F472B6" stopOpacity="0.75" />
          <stop offset="1" stopColor="#F472B6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={violet}>
          <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="#0B1030" />
      <circle cx="24" cy="38" r="20" fill={`url(#${pink})`} />
      <circle cx="40" cy="26" r="18" fill={`url(#${violet})`} />
      <circle cx="32" cy="32" r="29" fill="none" stroke={`url(#${ring})`} strokeWidth="3" />
      <g stroke="#E8ECFF" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.8">
        <polyline points="19,17 25,30 32,34 39,38 45,50" />
        <polyline points="45,20 39,38" />
        <polyline points="19,17 45,20" />
        <polyline points="25,30 20,48" />
      </g>
      <circle cx="19" cy="17" r="4" fill="#FBBF24" />
      <circle cx="45" cy="20" r="2.6" fill="#FFFFFF" />
      <circle cx="25" cy="30" r="2.4" fill="#FFFFFF" />
      <circle cx="32" cy="34" r="2.4" fill="#FFFFFF" />
      <circle cx="39" cy="38" r="2.4" fill="#FFFFFF" />
      <circle cx="20" cy="48" r="2.4" fill="#FFFFFF" />
      <circle cx="45" cy="50" r="3.6" fill="#67E8F9" />
    </svg>
  );
}
