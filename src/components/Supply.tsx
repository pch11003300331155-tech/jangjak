"use client";

import { FadeUp, FadeIn, CountUp, StaggerContainer, StaggerItem } from "./animations";

const PARTNERS = [
  "캠핑고래", "캠핑트렁크", "고릴라캠핑", "아웃도어247",
  "캠핑리스트", "김포반바", "글프엔캠핑", "청하해방촌",
  "에버브릭", "화성희재캠핑", "글론포마켓", "안성명",
  "블랙트리", "더댄캠핑", "글램포엠", "뷰루아",
  "사공글램핑", "노르디스크이그루", "터터라스527", "섬올마레",
  "양평글램핑카라반", "프군마루", "여주카라반", "일현포레스트",
  "가열명장", "상성리프레쉬", "캥앤트립", "다온캠핑",
  "하루글램핑", "발하우", "수담밭일랑", "글래머스카라",
  "가든글램핑", "암석글램핑", "하트에이든", "트로이캠핑",
  "별밤지기", "첨단산음애정원", "클러하우스", "캠프네버랜드",
];

export default function Supply() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#111008" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b pb-10" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <FadeUp>
            <div>
              <p
                className="font-bold tracking-[0.3em] text-xs uppercase mb-3"
                style={{ color: "#D4611B" }}
              >
                B2B SUPPLY PARTNER
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                전국 납품 파트너
              </h2>
            </div>
          </FadeUp>
          <FadeIn delay={0.2}>
            <div className="text-right">
              <p
                className="text-6xl md:text-8xl font-black leading-none"
                style={{ color: "#D4611B" }}
              >
                <CountUp to={100} /><span className="text-4xl md:text-5xl">+</span>
              </p>
              <p className="text-white/40 text-sm mt-1">캠핑장 · 글램핑장 납품</p>
            </div>
          </FadeIn>
        </div>

        {/* Partner grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" stagger={0.03}>
          {PARTNERS.map((name) => (
            <StaggerItem key={name}>
              <div
                className="px-4 py-3 rounded-lg text-sm font-medium text-center transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {name}
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div
              className="px-4 py-3 rounded-lg text-sm font-bold text-center"
              style={{
                backgroundColor: "rgba(212,97,27,0.15)",
                color: "#D4611B",
                border: "1px solid rgba(212,97,27,0.3)",
              }}
            >
              외 다수
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center text-white/30 text-sm mt-10">
            전국 캠핑장 및 글램핑장에 직접 납품하여 최상의 품질을 보장합니다
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
