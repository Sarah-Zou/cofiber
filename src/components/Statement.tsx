import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
      <Reveal>
        <p className="label mb-12">What we are</p>
      </Reveal>

      <Reveal delay={80}>
        <p className="display-lg max-w-5xl text-ink">
          CoFiber is not a sensing vendor. We are the{" "}
          <span className="italic text-orange-accent">neutral access and data layer</span>{" "}
          that lets the DFOS field build, test, and validate — without competing
          with the companies we serve.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-20 grid grid-cols-1 gap-px border-t border-line sm:grid-cols-3">
          {[
            { k: "Access", v: "Controlled fiber & data streams" },
            { k: "Standards", v: "Common, interoperable formats" },
            { k: "Context", v: "Labeled reference datasets" },
          ].map((item) => (
            <div key={item.k} className="pt-8">
              <p className="label mb-3 text-orange-accent">{item.k}</p>
              <p className="font-serif text-xl font-light text-ink">{item.v}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
