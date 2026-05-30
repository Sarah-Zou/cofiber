import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper-warm">
      <div className="mx-auto max-w-8xl px-6 py-32 lg:px-12 lg:py-48">
        <Reveal>
          <p className="label mb-10 text-orange-accent">Get in touch</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display-xl max-w-4xl text-ink">
            Working in <span className="font-bold text-orange-accent">DFOS</span>?
            <br />
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <a href="mailto:hello@co-fiber.com" className="btn-primary">
              hello@co-fiber.com
            </a>
            <div className="flex flex-col gap-2 sm:items-end">
              <span className="label">For advisors, investors, partners &amp; researchers</span>
              <span className="font-heading text-lg font-bold text-ink-muted">
                co-fiber.com
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
