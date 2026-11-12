import Reveal from "./Reveal";

export default function TechnologyPreview() {
  return (
    <section aria-labelledby="technology-title" className="bg-paper-deep text-paper">
      <div className="mx-auto max-w-8xl px-6 py-24 lg:px-12 lg:py-32">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="label mb-6 text-orange-soft">Explore the technology</p>
              <h2 id="technology-title" className="display-lg max-w-xl">
                One fiber.<br />Many applications.
              </h2>
            </div>
            <div className="max-w-lg lg:justify-self-end">
              <p className="text-lg font-light leading-relaxed text-paper/70">
                Follow a signal from the fiber to the people who use it.
                Explore how sensing works, what shared infrastructure changes,
                and what a FiberVM tenant sees.
              </p>
              <a
                href="/how-it-works/"
                className="mt-7 inline-flex items-center gap-4 border-b border-orange-soft/60 pb-3 text-sm text-orange-soft transition-colors hover:border-paper hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
              >
                Explore the interactive story <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <a
            href="/how-it-works/"
            className="group relative block overflow-hidden border border-paper/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-soft"
            aria-label="Open the interactive fiber sensing story"
          >
            <img
              src="/how-it-works/preview.svg"
              alt="An illustrated fiber route connects transport, utilities, and a data center to one shared sensing platform."
              width={1440}
              height={640}
              loading="lazy"
              decoding="async"
              className="min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none"
            />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-3 bg-paper px-5 py-3 text-sm text-ink sm:bottom-8 sm:left-8">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><path d="M1 1 11 7 1 13Z" /></svg>
              Enter the interactive story
            </span>
          </a>
          <div className="mt-5 flex flex-wrap justify-between gap-3">
            <span className="label text-paper/55">FiberVM · CoFiber’s sensing infrastructure platform</span>
            <span className="text-xs text-paper/55">Illustrative experience · synthetic data</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
