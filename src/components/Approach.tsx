import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-paper-deep">
      {/* Soft warm light source */}
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[120%] w-2/3 rounded-full bg-orange-accent/10 blur-[120px]" />

      {/* Faint flowing strands */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 300 C 360 180, 720 420, 1080 280 S 1440 200, 1440 300" stroke="#F0B07A" strokeWidth="1" />
        <path d="M0 340 C 360 220, 720 460, 1080 320 S 1440 240, 1440 340" stroke="#F0B07A" strokeWidth="1" />
        <path d="M0 260 C 360 140, 720 380, 1080 240 S 1440 160, 1440 260" stroke="#F0B07A" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
        <Reveal>
          <p className="label mb-8 text-orange-accent">Why Now</p>
          <h2 className="display-lg max-w-4xl text-paper">
            The technology is ready.{" "}
            <span className="font-bold text-paper/50">The infrastructure is not.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-paper/60">
            DFOS has matured across multiple sectors. Yet access to fiber,
            standardized data, and labeled references is still arranged
            case-by-case — slowing research and limiting what AI/ML can do.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-20 grid grid-cols-1 gap-px border-t border-paper/15 sm:grid-cols-3">
            {[
              { k: "Proven", v: "Sensing validated across sectors" },
              { k: "Fragmented", v: "Access arranged case-by-case" },
              { k: "Data-starved", v: "AI limited by scarce labeled data" },
            ].map((item) => (
              <div key={item.k} className="pt-8">
                <p className="label mb-3 text-orange-accent">{item.k}</p>
                <p className="font-heading text-xl font-light text-paper/90">{item.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
