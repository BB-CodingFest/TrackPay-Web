const steps = [
  { number: "01", label: "Scan Receipt" },
  { number: "02", label: "Review Items" },
  { number: "03", label: "Assign Items" },
  { number: "04", label: "Share & Collect" },
  { number: "05", label: "Spending Dashboard" },
];

export default function InTheApp() {
  return (
    <section id="how-it-works" className="border-t border-brand/4 py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-[576px] mx-auto">
          <span className="inline-block bg-brand/8 border border-brand/20 font-mono text-xs text-brand px-3 py-1 rounded-lg">
            In the App
          </span>
          <h2 className="font-heading font-black text-4xl lg:text-5xl mt-4">
            Five steps to <span className="text-brand">zero confusion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col items-center rounded-2xl p-4 border ${
                i === 0
                  ? "bg-brand/12 border-brand/50"
                  : "bg-navy-card border-white/6"
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-full size-8 mb-2 font-heading font-black text-xs ${
                  i === 0 ? "bg-brand text-navy" : "bg-navy-card-alt text-slate"
                }`}
              >
                {step.number}
              </span>
              <p
                className={`font-heading font-bold text-xs text-center ${
                  i === 0 ? "text-brand" : "text-slate"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy-card border border-brand/6 rounded-3xl p-8 flex gap-6 mt-10">
          <div className="bg-brand/15 flex items-center justify-center rounded-2xl size-14 shrink-0">
            <img src="/icons/dashboard.svg" alt="" className="size-6.5" />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-xs text-brand">Step 01</span>
              <span className="h-px flex-1 bg-brand/4" />
            </div>
            <h3 className="font-heading font-black text-2xl mt-2">Scan Receipt</h3>
            <p className="text-base text-white/60 leading-relaxed mt-2">
              After login, press the button to scan or upload a receipt. The
              OCR engine instantly extracts every line item.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
