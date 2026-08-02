export default function Navigation() {
  return (
    <header className="bg-navy/85 border-b border-brand/7 w-full">
      <div className="flex h-16 items-center justify-between max-w-[1152px] px-8 mx-auto">
        <div className="flex gap-2.5 items-center">
          <img src="/icons/logo.svg" alt="TrackPay" className="size-9" />
          <span className="font-heading font-bold text-xl">TrackPay</span>
        </div>
        <nav className="flex gap-8 items-center">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#team" className="text-sm text-white/60 hover:text-white transition-colors">
            Team
          </a>
        </nav>
        <a
          href="#get-started"
          className="bg-brand text-navy font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
