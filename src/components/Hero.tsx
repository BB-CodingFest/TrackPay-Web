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

      <div className="relative max-w-[1152px] mx-auto px-8 pt-28 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-3.5 py-1.5 rounded-full mb-6">
              <span className="size-2.5 rounded-full bg-brand" />
              <span className="font-semibold text-xs text-brand">
                Coding Fest 2026 — University of Sydney
              </span>
            </div>

            <h1 className="font-heading font-black text-5xl lg:text-7xl leading-[1.05] tracking-tight">
              Split smarter, <span className="text-brand">pay with ease.</span>
            </h1>

            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-md">
              Splitting bills shouldn&apos;t be complicated. Scan your receipt,
              assign items to each person, and settle up — all in one place.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-brand text-navy font-bold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                See How It Works
                <img src="/icons/arrow-right.svg" alt="" className="size-3.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white/5 transition-colors"
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
            <div className="relative w-[260px]">
              <div className="bg-navy-card border border-white/10 rounded-[40px] shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 pt-4 pb-2 relative">
                  <span className="font-mono text-xs text-white/50">9:41</span>
                  <div className="flex gap-1 items-start">
                    <span className="bg-white/40 h-1.5 w-3 rounded-sm" />
                    <span className="bg-white/40 size-1.5 rounded-full" />
                  </div>
                  <span className="absolute left-[89px] top-[15px] w-20 h-5 bg-black/60 rounded-full" />
                </div>

                <div className="flex flex-col px-4 pb-6 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-white/40">13 February 2026</p>
                      <p className="font-heading font-semibold text-sm">TrackPay</p>
                    </div>
                    <div className="bg-brand flex items-center justify-center rounded-full size-7">
                      <span className="font-bold text-navy text-[10px]">M</span>
                    </div>
                  </div>

                  <div className="bg-navy-card-alt rounded-2xl p-3 mt-3">
                    <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase">
                      Total Spending
                    </p>
                    <p className="font-heading font-bold text-2xl mt-0.5">$475.70</p>
                    <div className="flex gap-3 items-center mt-2">
                      <img src="/icons/pie-chart.svg" alt="" className="size-12" />
                      <div className="text-[8px] text-white/50 space-y-1">
                        <p className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-brand" />
                          Dining $221
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-orange" />
                          Shopping $98
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-slate" />
                          Transport $46
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy-card-alt rounded-2xl p-3 mt-3">
                    <p className="font-mono text-[9px] text-white/40 tracking-wider uppercase">
                      Review Receipt
                    </p>
                    <div className="text-[9px] mt-2 space-y-1.5">
                      <div className="flex justify-between text-white/70">
                        <span>Avocado Toast</span>
                        <span className="font-mono text-white">$18.00</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Latte ×2</span>
                        <span className="font-mono text-white">$11.00</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Caesar Salad</span>
                        <span className="font-mono text-white">$16.00</span>
                      </div>
                      <div className="flex justify-between text-white/70">
                        <span>Croissant</span>
                        <span className="font-mono text-white">$4.50</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-1.5 text-white/50">
                        <span>Total</span>
                        <span className="font-mono font-bold text-brand">$59.94</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-1 bg-brand text-navy font-bold text-[9px] rounded-[14px] w-full py-1.5 mt-2">
                      Continue to Split
                      <img src="/icons/arrow-small.svg" alt="" className="size-2" />
                    </button>
                  </div>

                  <button className="flex items-center justify-center gap-1.5 bg-brand text-navy font-bold text-[10px] rounded-2xl w-full py-2.5 mt-3">
                    <img src="/icons/scan-cta.svg" alt="" className="size-2.5" />
                    Scan Receipt
                  </button>
                </div>
              </div>
              <div className="absolute bg-brand blur-3xl opacity-20 rounded-full size-[292px] -left-4 -top-4 -z-10" />

              <div className="absolute bg-navy-card-alt border border-white/10 shadow-lg flex items-center gap-2 rounded-2xl px-3.5 py-2.5 -left-8 top-16 w-[146px]">
                <div className="bg-brand flex items-center justify-center rounded-full size-6 shrink-0">
                  <img src="/icons/check.svg" alt="" className="size-3" />
                </div>
                <div>
                  <p className="font-bold text-[10px]">Receipt scanned!</p>
                  <p className="text-[9px] text-white/40">4 items detected</p>
                </div>
              </div>

              <div className="absolute bg-navy-card-alt border border-white/10 shadow-lg flex items-center gap-2 rounded-2xl px-3.5 py-2.5 left-[123px] top-[352px] w-[161px]">
                <div className="flex">
                  <span className="flex items-center justify-center rounded-full size-5 bg-brand border border-navy text-[7px] font-bold text-navy -mr-1.5">
                    SK
                  </span>
                  <span className="flex items-center justify-center rounded-full size-5 bg-slate border border-navy text-[7px] font-bold text-navy -mr-1.5">
                    AC
                  </span>
                  <span className="flex items-center justify-center rounded-full size-5 bg-orange border border-navy text-[7px] font-bold text-navy">
                    JL
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[10px]">3 people added</p>
                  <p className="text-[9px] text-white/40">Split ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
