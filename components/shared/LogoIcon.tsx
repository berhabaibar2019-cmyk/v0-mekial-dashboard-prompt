interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className = 'w-8 h-8' }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle Background */}
      <circle cx="16" cy="16" r="16" fill="currentColor" opacity="0.1" />

      {/* M Letter - Modern Geometric Style */}
      <g fill="currentColor">
        {/* Left vertical line */}
        <rect x="8" y="10" width="2.5" height="12" rx="1.25" />

        {/* Right vertical line */}
        <rect x="21.5" y="10" width="2.5" height="12" rx="1.25" />

        {/* Top peak - Triangle effect with two diagonal lines */}
        <path d="M 10.5 10 L 16 6 L 21.5 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Middle connection */}
        <rect x="15" y="15" width="2" height="7" rx="1" />
      </g>

      {/* Accent - Small circle bottom right */}
      <circle cx="25" cy="24" r="2.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
