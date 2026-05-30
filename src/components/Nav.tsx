import { useState, useEffect } from "react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Why Now", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onLight = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? "bg-paper/90 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 lg:px-12">
          {/* Wordmark — icon on the dark hero, full logo on paper */}
          <a href="#top" className="shrink-0 flex items-center" onClick={() => setOpen(false)}>
            <img
              src={onLight ? "/logo_full.png" : "/logo_icon.png"}
              alt="CoFiber"
              width={onLight ? 180 : 36}
              height={onLight ? 48 : 36}
              className={onLight ? "h-12 w-auto" : "h-9 w-auto"}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`label transition-colors duration-300 hover:text-orange-accent ${
                  scrolled ? "text-ink-muted" : "text-paper/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center gap-3"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`label ${onLight ? "text-ink-muted" : "text-paper/70"}`}>
              {open ? "Close" : "Menu"}
            </span>
            <span className="relative flex h-4 w-6 flex-col justify-center gap-[5px]">
              <span
                className={`h-px w-full transition-all duration-300 ease-editorial ${
                  onLight ? "bg-ink" : "bg-paper"
                } ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full transition-all duration-300 ease-editorial ${
                  onLight ? "bg-ink" : "bg-paper"
                } ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-all duration-500 ease-editorial md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-6">
          <p className="label mb-10">Navigation</p>
          <ul className="space-y-3">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5"
                  style={{
                    transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <span className="label text-orange-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-md text-ink transition-colors duration-300 group-hover:text-orange-accent">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16 hairline pt-8">
            <a href="mailto:hello@co-fiber.com" className="label text-ink hover:text-orange-accent">
              hello@co-fiber.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
