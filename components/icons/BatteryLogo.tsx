interface BatteryLogoProps {
  className?: string;
  variant?: 'gradient' | 'white' | 'dark';
}

export function BatteryLogo({ className = 'w-12 h-24', variant = 'gradient' }: BatteryLogoProps) {
  const gradientId = `batteryGrad-${Math.random().toString(36).substr(2, 9)}`;

  const getColors = () => {
    switch (variant) {
      case 'white':
        return { stroke: '#ffffff', fill: '#ffffff' };
      case 'dark':
        return { stroke: '#0f172a', fill: '#0f172a' };
      case 'gradient':
      default:
        return { stroke: `url(#${gradientId})`, fill: `url(#${gradientId})` };
    }
  };

  const colors = getColors();

  return (
    <svg
      viewBox="0 0 90 180"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Battery body */}
      <rect
        x="10"
        y="25"
        width="70"
        height="130"
        rx="10"
        stroke={colors.stroke}
        strokeWidth="5"
        fill="none"
      />

      {/* Terminal */}
      <rect
        x="30"
        y="15"
        width="30"
        height="10"
        rx="4"
        fill={colors.fill}
      />

      {/* Fill level */}
      <rect
        x="17"
        y="95"
        width="56"
        height="53"
        rx="5"
        fill={colors.fill}
        opacity="0.25"
      />

      {/* Energy wave */}
      <path
        d="M 25 60 Q 37 50 45 60 T 65 60"
        stroke={colors.stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
