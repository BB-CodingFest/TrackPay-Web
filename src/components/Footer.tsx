export default function Footer() {
  return (
    <footer className="border-t border-brand/4 py-10">
      <div className="max-w-[1152px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-2.5 items-center">
          <img src="/icons/logo.svg" alt="TrackPay" className="size-9" />
          <span className="font-heading font-bold text-base">TrackPay</span>
        </div>
        <p className="font-mono text-xs text-white/30 text-center">
          Coding Fest 2026 · University of Sydney · Postgraduate Project
        </p>
        <p className="font-mono text-xs text-white/30">© 2025 TrackPay</p>
      </div>
    </footer>
  );
}
