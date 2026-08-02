"use client";

import { useState } from "react";
import { Camera, Scan, Users, Share2, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Scan Receipt",
    desc: "After login, press the button to scan or upload a receipt. The OCR engine instantly extracts every line item.",
  },
  {
    num: "02",
    icon: Scan,
    title: "Review Items",
    desc: "The itemized receipt is displayed for review. Users can edit item names, prices, or quantities before proceeding.",
  },
  {
    num: "03",
    icon: Users,
    title: "Assign Items",
    desc: "After confirming the receipt, a group is created and participants can assign items to themselves.",
  },
  {
    num: "04",
    icon: Share2,
    title: "Share & Collect",
    desc: "A shareable link is sent to all participants so they can access the bill and the owner's bank details to complete payment.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Spending Dashboard",
    desc: "Beyond splitting bills, it also tracks your personal spending so you always know where your money went.",
  },
];

export default function InTheApp() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

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
          {steps.map((s, i) => (
            <button
              key={s.num}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`flex flex-col items-center rounded-2xl p-4 border transition-colors cursor-pointer ${
                i === active
                  ? "bg-brand/12 border-brand/50"
                  : "bg-navy-card border-white/6 hover:border-white/20"
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-full size-8 mb-2 font-heading font-black text-xs ${
                  i === active ? "bg-brand text-navy" : "bg-navy-card-alt text-slate"
                }`}
              >
                {s.num}
              </span>
              <p
                className={`font-heading font-bold text-xs text-center ${
                  i === active ? "text-brand" : "text-slate"
                }`}
              >
                {s.title}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-navy-card border border-brand/6 rounded-3xl p-8 flex gap-6 mt-10">
          <div className="bg-brand/15 flex items-center justify-center rounded-2xl size-14 shrink-0">
            <Icon className="size-6.5 text-brand" />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-xs text-brand">Step {step.num}</span>
              <span className="h-px flex-1 bg-brand/4" />
            </div>
            <h3 className="font-heading font-black text-2xl mt-2">{step.title}</h3>
            <p className="text-base text-white/60 leading-relaxed mt-2">{step.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
