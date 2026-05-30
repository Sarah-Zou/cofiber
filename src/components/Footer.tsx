export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-8xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center">
            <img src="/logo_full.png" alt="CoFiber" width={180} height={48} className="h-12 w-auto" />
          </a>
          <p className="body max-w-sm text-sm">
            The neutral access and data infrastructure layer for distributed
            fiber optic sensing.
          </p>
          <p className="label">
            © {new Date().getFullYear()} CoFiber
          </p>
        </div>
      </div>
    </footer>
  );
}
