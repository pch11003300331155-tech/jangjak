const BRANCHES = [
  {
    tag: "본사",
    name: "장작혁명 본사",
    address: "경기도 화성시 장안면 금의리 54-13",
    phone: "1877-7449",
  },
  {
    tag: "남양주",
    name: "장작혁명 남양주점",
    address: "경기 남양주시 화도읍 차산리 344-1",
    phone: "010-7165-7282",
  },
  {
    tag: "경북",
    name: "장작혁명 경북경산점",
    address: "경북 경산시 압량읍 압독1로 15-10",
    phone: "010-7165-7282",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-24 px-6" style={{ backgroundColor: "#0C0B0A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-bold tracking-[0.3em] text-xs uppercase mb-3"
            style={{ color: "#D4611B" }}
          >
            LOCATIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            전국 가맹점 안내
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {BRANCHES.map((b) => (
            <div
              key={b.name}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
            >
              <span
                className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-6"
                style={
                  b.tag === "본사"
                    ? { backgroundColor: "#D4611B", color: "#fff" }
                    : { backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }
                }
              >
                {b.tag}
              </span>
              <h3 className="text-white font-black text-xl mb-5">{b.name}</h3>

              <div className="flex gap-3 mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="#D4611B" />
                  <circle cx="8" cy="6" r="1.5" fill="#0C0B0A" />
                </svg>
                <p className="text-white/60 text-sm leading-relaxed">{b.address}</p>
              </div>

              <div className="flex gap-3 items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M14.5 11.5v2a1 1 0 01-1 1A11.5 11.5 0 012 3a1 1 0 011-1h2a1 1 0 011 .8l.5 2a1 1 0 01-.3 1L5 7a9 9 0 004 4l1.2-1.2a1 1 0 011-.3l2 .5a1 1 0 01.8 1z" stroke="#D4611B" strokeWidth="1.2" fill="none" />
                </svg>
                <a
                  href={`tel:${b.phone.replace(/-/g, "")}`}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                >
                  {b.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
