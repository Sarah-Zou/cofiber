import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <p className="label text-orange-accent">About</p>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="display-md max-w-3xl text-ink">
              Building the shared access layer the field is missing.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede mt-10 max-w-2xl">
              CoFiber is an early-stage platform concept built on a clear working
              thesis: distributed fiber optic sensing will scale faster on shared
              access and data infrastructure than on isolated, repeated effort. We
              are validating that thesis with the research and infrastructure
              communities and helping define the standards the field needs.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
