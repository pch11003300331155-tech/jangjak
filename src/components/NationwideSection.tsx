"use client";

import { useEffect, useRef, useState } from "react";

// 캠핑장/글램핑장 (파란 점 — 소형)
const CAMPING_DOTS: [number, number][] = [
  [128,62],[140,57],[150,64],[124,72],[136,76],
  [154,70],[166,67],[120,86],[138,82],[156,78],
  [170,74],[114,96],[130,92],[146,88],[163,84],
  [176,80],[123,106],[140,102],[156,98],[170,94],
  [116,116],[133,112],[150,108],[166,104],[128,126],
  [146,121],[160,118],[108,110],[174,100],[120,133],
  [138,130],[156,126],[170,122],[106,126],[183,112],
  [198,50],[216,46],[236,50],[256,56],[270,66],
  [280,80],[274,96],[260,88],[244,80],[226,74],
  [210,70],[203,88],[220,90],[240,96],[260,106],
  [274,118],[260,114],[244,108],[226,102],[206,106],
  [96,148],[116,145],[136,142],[156,148],[176,144],
  [190,158],[176,170],[156,167],[136,164],[116,167],
  [96,172],[86,188],[106,185],[126,182],[146,178],
  [76,215],[96,212],[116,215],[136,218],[156,214],
  [176,218],[180,234],[160,237],[138,234],[116,231],
  [96,227],[76,231],[70,247],[90,250],[110,247],
  [196,178],[216,182],[236,178],[256,184],[270,197],
  [278,216],[264,231],[244,227],[220,224],[200,221],
  [240,247],[260,251],
  [96,338],[116,333],[136,338],
];

// 대형 캠핑용품점 (초록 핀)
const SUPPLY_PINS: [number, number][] = [
  [145, 140], // 캠핑고래 (경기)
  [163, 150], // 캠핑트렁크
  [125, 160], // 고릴라캠핑
  [195, 195], // 아웃도어247
  [148, 168], // 오캠몰
];

// 본점·직영점 (주황 대형 핀)
const MAIN_PINS = [
  { x: 138, y: 148, label: "화성본점" },
  { x: 158, y: 105, label: "남양주점" },
  { x: 242, y: 235, label: "경북경산점" },
];

function Pin({ x, y, color, size = 10 }: { x: number; y: number; color: string; size?: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + size * 0.85} rx={size * 0.35} ry={size * 0.18} fill="rgba(0,0,0,0.25)" />
      <path
        d={`M${x},${y - size}
           a${size * 0.6},${size * 0.6} 0 1,1 0.01,0
           Q${x + size * 0.55},${y - size * 0.1} ${x},${y + size * 0.75}
           Q${x - size * 0.55},${y - size * 0.1} ${x},${y - size} Z`}
        fill={color}
      />
      <circle cx={x} cy={y - size * 0.38} r={size * 0.28} fill="rgba(255,255,255,0.55)" />
    </g>
  );
}

export default function NationwideSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#151412" }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── 왼쪽: 지도 ── */}
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <svg
              viewBox="0 0 320 400"
              fill="none"
              className="w-full"
              style={{ maxHeight: 500 }}
              aria-label="전국 납품 위치 지도"
            >
              <defs>
                <filter id="ns-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <style>{`
                  @keyframes ns-ping { 0%{r:3;opacity:.6} 100%{r:8;opacity:0} }
                  .ns-ring { animation: ns-ping 2.6s ease-out infinite; }
                `}</style>
              </defs>

              {/* 본토 */}
              <path
                d="M88,12 C140,6 205,13 268,30 L282,74 L276,130 L268,168
                   L256,198 L240,224 L224,252 L202,262 L180,268
                   L156,265 L130,257 L104,246 L82,230 L66,208
                   L60,183 L58,156 L57,130 L60,106 L63,84 L71,62 L80,38 Z"
                fill="#1E1C1A"
                stroke="#3A3530"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* 제주 */}
              <ellipse cx="116" cy="338" rx="34" ry="13"
                fill="#1E1C1A" stroke="#3A3530" strokeWidth="1.5" />

              {/* 캠핑장 점 (파랑) */}
              {CAMPING_DOTS.map(([x, y], i) => {
                const delay = `${(i * 0.02) % 2}s`;
                const isPing = i % 8 === 0;
                return (
                  <g key={i}>
                    {isPing && (
                      <circle cx={x} cy={y} r={3} fill="#4A90D9" fillOpacity={0.5}
                        className="ns-ring" style={{ animationDelay: `${(i * 0.3) % 2.6}s` }} />
                    )}
                    <circle
                      cx={x} cy={y} r={2}
                      fill="#4A90D9"
                      filter="url(#ns-glow)"
                      style={{ transition: `opacity 0.4s ease ${delay}`, opacity: visible ? 0.85 : 0 }}
                    />
                  </g>
                );
              })}

              {/* 대형 캠핑용품점 (초록) */}
              {SUPPLY_PINS.map(([x, y], i) => (
                <g key={i} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.1}s` }}>
                  <Pin x={x} y={y} color="#3CB96A" size={9} />
                </g>
              ))}

              {/* 본점·직영점 (주황) */}
              {MAIN_PINS.map((p, i) => (
                <g key={i} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.5 + i * 0.12}s` }}>
                  <Pin x={p.x} y={p.y} color="#E8641A" size={13} />
                </g>
              ))}
            </svg>

            {/* 범례 */}
            <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">
              {[
                { color: "#E8641A", label: "본점·직영점" },
                { color: "#3CB96A", label: "대형 캠핑용품점" },
                { color: "#4A90D9", label: "캠핑장·글램핑장" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  <span className="text-white/50 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 오른쪽: 텍스트 ── */}
          <div className="w-full lg:w-[58%]">
            {/* No.1 배지 */}
            <div className="inline-flex items-center gap-1.5 border border-[#E8641A] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#E8641A] text-sm">★</span>
              <span className="text-[#E8641A] font-black text-sm tracking-widest">No.1</span>
              <span className="text-[#E8641A] text-sm">★</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              전국 어디서나,<br />
              대한민국 1등 장작혁명
            </h2>

            <p className="text-[#E8641A] font-bold text-base md:text-lg mb-10">
              전국 대형 캠핑용품점 및 120여 곳의 캠핑장 절찬 판매 중!
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* 본점·직영점 */}
              <div>
                <p className="text-[#E8641A] font-bold text-sm mb-3 italic">[본점 및 직영점]</p>
                <ul className="text-white/70 text-sm space-y-1.5">
                  <li>화성점 <span className="text-white/40">(1877-7449)</span></li>
                  <li>남양주점 <span className="text-white/40">(010-7165-7282)</span></li>
                  <li>경북경산점 <span className="text-white/40">(010-7165-7282)</span></li>
                </ul>

                <p className="text-[#E8641A] font-bold text-sm mt-6 mb-3 italic">[대형 캠핑용품점]</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>캠핑고래, 캠핑트렁크,</li>
                  <li>고릴라캠핑, 아웃도어 247,</li>
                  <li>오캠몰</li>
                </ul>
              </div>

              {/* 캠핑리스트 */}
              <div>
                <p className="text-[#E8641A] font-bold text-sm mb-3 italic">[캠핑리스트 전국 캠핑장 및 글램핑장]</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  김포범바위, 김포캠핑파크, 청라해변공원, 에제르파크, 화성휘게캠핑카, 글로우글램핑,
                  안성맞춤, 블랙트리, 더열린캠핑, 글램포엠벨루아캠핑, 파주캠핑, 강화카라반, 사강캠핑,
                  노르딕글램핑, 선셋스테이그릴, 더테라스527, 섬들아래, 양평글램핑카라반, 포근마루,
                  여주카라반, 월헌포레스트, 가멜캠핑, 화성리프레쉬, 보령캠프타임, 다온캠핑, jh웨스턴,
                  하루글램핑, 벨하우스, 달빛정원, 글래머스글램핑, 가든글램핑, 김포아라솔알프스글램핑,
                  히든백아드, 도프양캠핑, 별밤지기, 장흥해피니스, 검단산숲에정원, 리버하우스,
                  캠프네버랜드, 캠프향기, 더선셋캠핑장, 오션플레이스, 리틀톤파크, 숨쉬는고래글램핑,
                  파라독스글램핑, 비비아트글램핑, 이클립스글램핑, 매봉힐링캠프, 프린세스피크닉, 빌라몬테,
                  모래재캠핑장, 오산맑음터, 올라봄캠핑, 문라이트불멍카페, 가온글램핑팬션, 저스트글램핑,
                  캠프179, 물왕숲캠핑파크, 연몽캠핑장, 라온캠핑장, 레이크힐링캠프, 자장캠핑장,
                  왕모래캠핑장, 수기캠핑장, 어썸카라반, 그매그캠핑장, 캠프해놀, 강천스테이, 그랜드파파,
                  캠핑킹, 천안놀이터캠핑장, 비니비니글램핑, 김원장캠핑, 해마루오토캠핑 등 120여 곳
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
