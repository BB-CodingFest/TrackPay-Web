const features = [
  {
    icon: "/icons/feature-receipt.svg",
    tag: "Receipt Scanning",
    title: "Snap. Done.",
    body: "Our OCR engine reads your receipt in seconds — no manual entry, no typos. Just point, shoot, and let TrackPay do the heavy lifting.",
  },
  {
    icon: "/icons/feature-ai.svg",
    tag: "AI Categorization",
    title: "Smarter by default.",
    body: "Every purchase is automatically tagged by category. Dining, groceries, transport — TrackPay knows, so you don't have to sort anything.",
  },
  {
    icon: "/icons/feature-group.svg",
    tag: "Group Splitting",
    title: "Fair splits, zero drama.",
    body: 'Assign each item to the right person. No more "who had the salad?" — everything is transparent and itemized from the start.',
  },
  {
    icon: "/icons/feature-payment.svg",
    tag: "Payment Tracking",
    title: "Know who owes what.",
    body: "Share a link and let your group settle up directly. Track payment status in real time until everyone's square.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-brand/4 py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-[672px] mx-auto">
          <span className="inline-block bg-orange/8 border border-orange/25 font-mono text-xs text-orange px-3 py-1 rounded-lg">
            Core Features
          </span>
          <h2 className="font-heading font-black text-4xl lg:text-5xl mt-4">
            Everything you need, <span className="text-orange">nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-navy-card border border-brand/6 rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="bg-brand/12 flex items-center justify-center rounded-2xl size-11">
                  <img src={feature.icon} alt="" className="size-5" />
                </div>
                <span className="bg-brand/6 border border-brand/20 font-mono text-[10px] text-brand px-2.5 py-1 rounded-full">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-heading font-black text-xl mt-5">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mt-2">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
