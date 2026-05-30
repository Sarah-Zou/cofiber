import Reveal from "./Reveal";

const capabilities = [
  {
    index: "01",
    title: "Controlled fiber & data access",
    line: "Governed access to fiber and data streams for research, evaluation, and development.",
  },
  {
    index: "02",
    title: "Standardized data formats",
    line: "Common formats and interfaces that make heterogeneous sensing data interoperable.",
  },
  {
    index: "03",
    title: "Context-labeled datasets",
    line: "Reference datasets with contextual labeling for benchmarking and model development.",
  },
  {
    index: "04",
    title: "Partnership infrastructure",
    line: "A coordination and trust layer connecting operators, developers, and researchers.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-paper-warm">
      <div className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
        <Reveal>
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label mb-6 text-orange-accent">The Platform</p>
              <h2 className="display-lg max-w-xl text-ink">
                One infrastructure layer.
              </h2>
            </div>
            <p className="body max-w-xs md:text-right">
              The connective infrastructure the field is missing — built once, shared across many.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {capabilities.map((c, i) => (
            <Reveal key={c.index} delay={i * 80}>
              <div className="group grid grid-cols-12 items-baseline gap-4 border-b border-line py-10 transition-colors duration-500 hover:bg-paper md:py-12">
                <span className="label col-span-2 text-ink-muted transition-colors group-hover:text-orange-accent">
                  {c.index}
                </span>
                <h3 className="display-md col-span-10 text-ink md:col-span-5">
                  {c.title}
                </h3>
                <p className="body col-span-12 mt-2 md:col-span-5 md:mt-0">{c.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
