const tags = [
  { icon: "/icons/tag-receipt.svg", label: "Receipt Scanning" },
  { icon: "/icons/tag-ai.svg", label: "AI Categorization" },
  { icon: "/icons/tag-group.svg", label: "Group Splitting" },
  { icon: "/icons/tag-payment.svg", label: "Payment Tracking" },
];

const highlights = [
  {
    icon: "/icons/card-scan.svg",
    title: "Scan",
    body: "Reads your receipt with OCR after paying.",
  },
  {
    icon: "/icons/card-organize.svg",
    title: "Organize",
    body: "Auto-matches items to each person.",
  },
  {
    icon: "/icons/card-splitpay.svg",
    title: "Split & Pay",
    body: "Each person sees what they owe. Share the link and done.",
  },
];

export default function Overview() {
  return (
    <section className="border-t border-brand/4 py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-brand/8 border border-brand/20 font-mono text-xs text-brand px-3 py-1 rounded-lg">
            Overview
          </span>
          <h2 className="font-heading font-black text-4xl lg:text-5xl mt-4">
            So, What&apos;s <span className="text-brand">TrackPay?</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed mt-6">
            Splitting bills shouldn&apos;t be complicated. Scan your receipt,
            assign items to each person, and settle up — all in one place.
          </p>
          <p className="text-base text-white/60 leading-relaxed mt-4">
            TrackPay keeps an itemized record of every purchase, so you always
            know where your money went. Your spending is organized
            automatically by category, with no manual input needed.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 bg-brand/8 border border-brand/20 font-semibold text-xs text-brand px-3 py-1.5 rounded-full"
              >
                <img src={tag.icon} alt="" className="size-2.75" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-navy-card border border-brand/7 rounded-2xl p-5 flex gap-4"
            >
              <div className="bg-brand/15 flex items-center justify-center rounded-[14px] size-10 shrink-0">
                <img src={item.icon} alt="" className="size-4.5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-white/50 mt-1">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
