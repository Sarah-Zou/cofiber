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
          Access for the next era of{" "}
          <span className="italic text-orange-soft">distributed sensing.</span>
        </h1>

        <div className="mt-12">
          <a href="#contact" className="btn-primary">
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
