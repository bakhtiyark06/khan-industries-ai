export function HeroVisual() {
  return (
    <div
      className="relative flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-0 hero-grid-bg" />
      <svg
        viewBox="0 0 200 200"
        className="relative h-48 w-48 md:h-64 md:w-64 motion-safe:animate-fade-in opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          rx="16"
          stroke="rgba(148, 163, 184, 0.3)"
          strokeWidth="1"
          fill="rgba(17, 24, 39, 0.6)"
        />
        <rect
          x="48"
          y="48"
          width="104"
          height="104"
          rx="12"
          stroke="rgba(201, 162, 39, 0.15)"
          strokeWidth="1"
        />
        <path
          d="M72 56 L72 144 M72 100 L120 56 M72 100 L120 144"
          stroke="rgba(248, 250, 252, 0.85)"
          strokeWidth="8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <line
          x1="40"
          y1="160"
          x2="160"
          y2="160"
          stroke="rgba(148, 163, 184, 0.12)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function CubeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="12"
        y="12"
        width="56"
        height="56"
        rx="10"
        stroke="rgba(148, 163, 184, 0.35)"
        strokeWidth="1"
        fill="rgba(17, 24, 39, 0.8)"
      />
      <path
        d="M28 22 L28 58 M28 40 L52 22 M28 40 L52 58"
        stroke="rgba(248, 250, 252, 0.7)"
        strokeWidth="4"
        strokeLinecap="square"
      />
    </svg>
  );
}
