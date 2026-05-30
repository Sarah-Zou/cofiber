export default function FiberLight({ className = "" }: { className?: string }) {
  const strands = [
    "M -40 520 C 180 360, 120 200, 300 40",
    "M 30 540 C 240 380, 220 180, 360 -20",
    "M 110 555 C 300 400, 320 200, 430 0",
    "M 200 560 C 360 420, 420 220, 520 30",
    "M 300 560 C 430 430, 520 250, 600 70",
    "M 400 555 C 500 440, 600 280, 660 120",
    "M 500 545 C 560 450, 650 320, 700 180",
  ];

  return (
    <div className={`fiber-light relative h-full w-full overflow-hidden bg-[#110E0B] ${className}`}>
      {/* Warm ambient glow */}
      <div className="absolute -bottom-1/4 left-1/2 h-[85%] w-[85%] -translate-x-1/2 rounded-full bg-orange-accent/28 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[50%] w-[50%] rounded-full bg-orange-deep/35 blur-[80px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 700 560"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strandGrad" x1="0" y1="1" x2="0.4" y2="0">
            <stop offset="0%" stopColor="#BF4B1A" stopOpacity="0" />
            <stop offset="25%" stopColor="#D9712F" stopOpacity="1" />
            <stop offset="60%" stopColor="#F5C090" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF0E0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="strandGradFaint" x1="0" y1="1" x2="0.4" y2="0">
            <stop offset="0%" stopColor="#BF4B1A" stopOpacity="0" />
            <stop offset="30%" stopColor="#C96030" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F0B07A" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE4C0" stopOpacity="1" />
            <stop offset="60%" stopColor="#C94F00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#BF4B1A" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Photon halo — soft wide glow around each traveling pulse */}
          <filter id="photon" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Strands — restrained, structural */}
        <g filter="url(#soft)">
          {strands.map((d, i) => (
            <path
              key={`bg-${i}`}
              d={d}
              stroke="url(#strandGradFaint)"
              strokeWidth={i % 2 === 0 ? 1.1 : 0.6}
              strokeLinecap="round"
              style={{
                opacity: 0.45,
                animation: `shimmer ${5 + i}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </g>
        <g>
          {strands.map((d, i) => (
            <path
              key={`fg-${i}`}
              d={d}
              stroke="url(#strandGrad)"
              strokeWidth={i % 3 === 0 ? 1.4 : 0.85}
              strokeLinecap="round"
              style={{
                opacity: 0.55,
                animation: `shimmer ${6 + i}s ease-in-out ${i * 0.55 + 0.3}s infinite`,
              }}
            />
          ))}
        </g>

        {/* Core glow at convergence point */}
        <circle cx="340" cy="545" r="130" fill="url(#coreGlow)" />
        <circle cx="340" cy="545" r="3.5" fill="#FFFAF0" opacity="0.9" />

        {/* Traveling photon pulses — halo + sharp core */}
        {strands.map((d, i) => {
          const dur = `${5.5 + i * 1.2}s`;
          const delay = `${i * 0.9}s`;
          return (
            <g key={`photon-${i}`}>
              {/* Soft outer halo */}
              <circle r="5" fill="#F5A060" filter="url(#photon)" opacity="0">
                <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={d} />
                <animate attributeName="opacity" values="0;0.7;0" dur={dur} begin={delay} repeatCount="indefinite" />
              </circle>
              {/* Bright crisp core */}
              <circle r="1.8" fill="#FFF5EC" opacity="0">
                <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={d} />
                <animate attributeName="opacity" values="0;1;0" dur={dur} begin={delay} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#110E0B]/50 via-transparent to-[#110E0B]/20" />
    </div>
  );
}
