"use client";

import { useEffect, useRef, useState } from "react";

// 전국 캠핑장·글램핑장 납품처 위치 (SVG 좌표 기준, viewBox 0 0 320 400)
const DOTS: [number, number][] = [
  // 서울·경기 (35)
  [128, 62], [140, 57], [150, 64], [124, 72], [136, 76],
  [154, 70], [166, 67], [120, 86], [138, 82], [156, 78],
  [170, 74], [114, 96], [130, 92], [146, 88], [163, 84],
  [176, 80], [123, 106], [140, 102], [156, 98], [170, 94],
  [116, 116], [133, 112], [150, 108], [166, 104], [128, 126],
  [146, 121], [160, 118], [108, 110], [174, 100], [120, 133],
  [138, 130], [156, 126], [170, 122], [106, 126], [183, 112],

  // 강원 (20)
  [198, 50], [216, 46], [236, 50], [256, 56], [270, 66],
  [280, 80], [274, 96], [260, 88], [244, 80], [226, 74],
  [210, 70], [203, 88], [220, 90], [240, 96], [260, 106],
  [274, 118], [260, 114], [244, 108], [226, 102], [206, 106],

  // 충청 (15)
  [96, 148], [116, 145], [136, 142], [156, 148], [176, 144],
  [190, 158], [176, 170], [156, 167], [136, 164], [116, 167],
  [96, 172], [86, 188], [106, 185], [126, 182], [146, 178],

  // 전라 (15)
  [76, 215], [96, 212], [116, 215], [136, 218], [156, 214],
  [176, 218], [180, 234], [160, 237], [138, 234], [116, 231],
  [96, 227], [76, 231], [70, 247], [90, 250], [110, 247],

  // 경상 (12)
  [196, 178], [216, 182], [236, 178], [256, 184], [270, 197],
  [278, 216], [264, 231], [244, 227], [220, 224], [200, 221],
  [240, 247], [260, 251],

  // 제주 (3)
  [96, 354], [116, 349], [136, 354],
];

export default function KoreaMap() {
  const [visible, setVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 400"
      fill="none"
      className="w-full"
      style={{ maxHeight: 520 }}
      aria-label="전국 납품 캠핑장 위치 지도"
    >
      <defs>
        <filter id="km-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="km-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4611B" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#D4611B" stopOpacity="0" />
        </radialGradient>
        <style>{`
          @keyframes km-ping {
            0%   { r: 3; opacity: .7; }
            100% { r: 9; opacity: 0; }
          }
          .km-ring { animation: km-ping 2.4s ease-out infinite; }
        `}</style>
      </defs>

      {/* 배경 그라데이션 */}
      <ellipse cx="160" cy="160" rx="150" ry="180" fill="url(#km-bg)" />

      {/* 한국 아웃라인 */}
      <path
        d="
          M 88,12
          C 140,6 205,13 268,30
          L 282,74
          L 276,130
          L 268,168
          L 256,198
          L 240,224
          L 224,252
          L 202,262
          L 180,268
          L 156,265
          L 130,257
          L 104,246
          L 82,230
          L 66,208
          L 60,183
          L 58,156
          L 57,130
          L 60,106
          L 63,84
          L 71,62
          L 80,38
          Z
        "
        fill="rgba(212,97,27,0.05)"
        stroke="rgba(212,97,27,0.22)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 제주도 */}
      <ellipse
        cx="116" cy="338" rx="34" ry="13"
        fill="rgba(212,97,27,0.05)"
        stroke="rgba(212,97,27,0.22)"
        strokeWidth="1.5"
      />

      {/* 캠핑장 위치 점 */}
      {DOTS.map(([x, y], i) => {
        const delay = `${(i * 0.018) % 2.4}s`;
        const pingDelay = `${(i * 0.23) % 2.4}s`;
        const ping = i % 6 === 0;
        return (
          <g key={i}>
            {ping && (
              <circle
                cx={x} cy={y} r={3}
                fill="#D4611B"
                fillOpacity={0.5}
                className="km-ring"
                style={{ animationDelay: pingDelay }}
              />
            )}
            <circle
              cx={x} cy={y} r={2.2}
              fill="#D4611B"
              filter="url(#km-glow)"
              style={{
                transition: `opacity 0.5s ease ${delay}`,
                opacity: visible ? 1 : 0,
              }}
            />
          </g>
        );
      })}

      {/* 카운트 레이블 */}
      {visible && (
        <g style={{ animation: "km-ping 0s" }}>
          <text
            x="160" y="305"
            textAnchor="middle"
            fill="#D4611B"
            fontSize="11"
            fontWeight="700"
            letterSpacing="2"
            style={{ opacity: 0.7, fontFamily: "sans-serif" }}
          >
            100+ LOCATIONS
          </text>
        </g>
      )}
    </svg>
  );
}
