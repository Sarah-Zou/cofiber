import Reveal from "./Reveal";

const pillars = [
  { k: "Trust", v: "Earned with fiber and infrastructure operators over time." },
  { k: "Coordination", v: "Aligning many stakeholders around shared infrastructure." },
  { k: "Standardization", v: "Formats and references the field will actually adopt." },
];

export default function WhyHard() {
  return (
    <section id="why-hard" className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
      <Reveal>
        <p className="label mb-6 text-orange-accent">Why it&apos;s hard</p>
        <h2 className="display-lg max-w-3xl text-ink">
          Infrastructure that can&apos;t be rushed.
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <p className="lede mt-8 max-w-2xl">
          An access and data layer for DFOS can&apos;t be assembled from software
          alone. It takes trust with operators, coordination across stakeholders,
          domain-specific data, and standards the field will adopt — built
          deliberately.
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-px border-t border-line sm:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={i * 80}>
            <div className="pt-8">
              <p className="label mb-3 text-orange-accent">{p.k}</p>
              <p className="font-heading text-xl font-light leading-snug text-ink">{p.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
