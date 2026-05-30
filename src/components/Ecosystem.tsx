import Reveal from "./Reveal";

const segments = [
  "DFOS technology companies",
  "Universities & research labs",
  "Pipeline & energy operators",
  "Rail & transit authorities",
  "Telecom & dark fiber operators",
  "Critical infrastructure & public safety",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
      <Reveal>
        <p className="label mb-6 text-orange-accent">The Ecosystem</p>
        <h2 className="display-lg max-w-2xl text-ink">
          Built to serve the whole field.
        </h2>
        <p className="lede mt-8 max-w-2xl">
          Stakeholders across research, industry, and infrastructure — each
          solving the same access and data problems alone today.
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <Reveal key={s} delay={(i % 3) * 80}>
            <div className="group flex items-center gap-5 border-t border-line py-10 transition-colors duration-500">
              <span className="label text-line transition-colors duration-500 group-hover:text-orange-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-xl font-light leading-snug text-ink">
                {s}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
