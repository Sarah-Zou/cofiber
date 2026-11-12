import FiberLight from "./FiberLight";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <FiberLight />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-paper-deep/20 via-paper-deep/45 to-paper-deep/70" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="display-xl text-paper max-w-4xl">
          Access for the next era of DFOS
        </h1>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <a href="/how-it-works/" className="btn-primary">
            See how it works
            <Arrow />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-b border-paper/40 py-3 text-sm text-paper transition-colors hover:border-orange-soft hover:text-orange-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          >
            Request early access
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
