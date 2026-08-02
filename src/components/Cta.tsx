export default function Cta() {
  return (
    <section className="border-t border-brand/4 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="relative bg-brand rounded-3xl overflow-hidden px-8 py-14 text-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgb(0, 0, 0) 0.38%, rgba(0, 0, 0, 0) 0.38%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 0%)",
            }}
          />
          <div className="relative">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-navy">
              No more &quot;I&apos;ll Venmo you later.&quot;
            </h2>
            <p className="text-lg text-navy/70 max-w-lg mx-auto mt-4">
              Scan the receipt. Split it fair. Get paid. It really is that simple.
            </p>
            <a
              href="https://app.trackpay.org"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-sm px-7 py-3.5 rounded-full mt-6 hover:opacity-90 transition-opacity"
            >
              Try TrackPay
              <img src="/icons/cta-arrow.svg" alt="" className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
