export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-4"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(62, 184, 133) 0.14%, rgba(0, 0, 0, 0) 0.14%), linear-gradient(90deg, rgb(62, 184, 133) 0%, rgba(0, 0, 0, 0) 0%)",
        }}
      />
      <div className="absolute bg-brand blur-3xl opacity-10 rounded-full size-96 left-[286px] top-20" />
      <div className="absolute bg-orange blur-3xl opacity-8 rounded-full size-72 left-[569px] top-40" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-3.5 py-1.5 rounded-full mb-6">
              <span className="size-2.5 rounded-full bg-brand" />
              <span className="font-semibold text-xs text-brand">
                Coding Fest 2026 — University of Sydney
              </span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
              Split smarter, <span className="text-brand">pay with ease.</span>
            </h1>

            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-md">
              Splitting bills shouldn&apos;t be complicated. Scan your receipt,
              assign items to each person, and settle up — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                See How It Works
                <img src="/icons/arrow-right.svg" alt="" className="size-3.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors"
              >
                Explore Features
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              <div>
                <p className="font-heading font-black text-lg">OCR</p>
                <p className="text-xs text-white/40">Powered scanning</p>
              </div>
              <div>
                <p className="font-heading font-black text-lg">5-step</p>
                <p className="text-xs text-white/40">Simple flow</p>
              </div>
              <div>
                <p className="font-heading font-black text-lg">Auto</p>
                <p className="text-xs text-white/40">Categorization</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute bg-brand blur-3xl opacity-20 rounded-full size-72 -z-10" />
            <img
              src="/icons/hero-banner.svg"
              alt="TrackPay dashboard with total spending and recent expenses"
              className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
