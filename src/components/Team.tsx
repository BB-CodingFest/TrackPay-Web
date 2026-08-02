const members = [
  { initials: "YL", name: "Yen-Wei Liu", color: "bg-brand" },
  { initials: "XC", name: "Xin-Yu Chang", color: "bg-orange" },
  { initials: "MK", name: "Minjoo Kim", color: "bg-brand" },
];

export default function Team() {
  return (
    <section id="team" className="border-t border-brand/4 py-28">
      <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block bg-orange/8 border border-orange/25 font-mono text-xs text-orange px-3 py-1 rounded-lg">
            The Team
          </span>
          <h2 className="font-heading font-black text-4xl lg:text-5xl mt-4">
            Built by people who <span className="text-orange">hate doing the maths.</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed mt-6">
            TrackPay was built at{" "}
            <span className="font-bold text-white">Coding Fest 2026</span> by
            a postgraduate team from the University of Sydney — four
            engineers tired of awkward post-dinner calculations.
          </p>
          <div className="bg-navy-card border border-brand/4 rounded-2xl flex items-center gap-3 px-4 py-3 mt-6">
            <img src="/icons/team-cap.svg" alt="" className="size-4.5" />
            <div>
              <p className="font-bold text-xs">Project Level: Postgraduate</p>
              <p className="font-mono text-[11px] text-white/40">
                University of Sydney · Coding Fest 2026
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`bg-navy-card border border-brand/6 rounded-2xl flex flex-col items-center gap-3 p-5 ${
                i === 2 ? "col-start-1" : ""
              }`}
            >
              <div
                className={`${member.color} flex items-center justify-center rounded-2xl size-12`}
              >
                <span className="font-heading font-black text-sm text-navy">
                  {member.initials}
                </span>
              </div>
              <p className="font-heading font-bold text-sm text-center">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
