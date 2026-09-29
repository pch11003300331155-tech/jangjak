"use client";

import Image from "next/image";
import { FadeUp, SlideIn } from "./animations";

const SMARTSTORE_URL = "https://smartstore.naver.com/jangjackrevo";

export default function Products() {
  return (
    <section id="products" className="py-24 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-3" style={{ color: "#D4611B" }}>
              PRODUCT LINE
            </p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1108" }}>
              2가지 프리미엄 장작
            </h2>
            <p className="mt-4 text-base" style={{ color: "rgba(26,17,8,0.45)" }}>
              용도와 취향에 맞게 선택하세요
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ── 기존 장작 ── */}
          <SlideIn from="left">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/camp-fire.png"
                  alt="장작혁명 프리미엄 캠핑장작"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {["5kg", "10kg"].map((size) => (
                    <span key={size} className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#D4611B" }}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#D4611B" }}>스테디셀러</p>
                <h3 className="text-2xl font-black mb-3" style={{ color: "#1A1108" }}>
                  프리미엄 캠핑장작
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(26,17,8,0.5)", whiteSpace: "pre-line" }}>
                  {"쪼갠 장작으로 빠른 착화와 강한 화력.\n캠핑 불멍부터 화목난로까지\n전천후로 활약하는 베스트셀러 장작입니다."}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {["빠른 착화 — 종이 한 장으로 점화 가능", "강한 화력 — 균일한 연소로 오래 지속", "캠핑 불멍 + 화목난로 양용"].map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm" style={{ color: "#1A1108" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                        <path d="M3 8l3.5 3.5L13 5" stroke="#D4611B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={SMARTSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-bold py-4 rounded-xl text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#1A1108" }}
                >
                  네이버 스마트스토어 구매하기
                </a>
              </div>
            </div>
          </SlideIn>

          {/* ── 통나무 장작 (신제품) ── */}
          <SlideIn from="right">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group" style={{ backgroundColor: "#1A1108" }}>
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/products/tongnamu-product.png"
                  alt="장작혁명 통나무 캠핑장작 & 화목장작 제품"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#D4611B", color: "#fff" }}>
                    NEW
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {["8kg", "13kg"].map((size) => (
                    <span key={size} className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(212,97,27,0.9)" }}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#D4611B" }}>국내 유일</p>
                <h3 className="text-2xl font-black mb-3 text-white">
                  통나무 장작
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,237,224,0.5)", whiteSpace: "pre-line" }}>
                  {"쪼개지 않은 통나무 그대로 완벽건조.\n오래가는 강한 화력과 긴 연소시간으로\n진짜 불멍을 경험하세요."}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {["국내 유일 통나무 완벽건조 기술", "타사 대비 압도적인 화력 — 동일 3kg 비교 검증", "화목난로·불멍 양용 — 연기·그을음 최소"].map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,237,224,0.7)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                        <path d="M3 8l3.5 3.5L13 5" stroke="#D4611B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={SMARTSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full font-bold py-4 rounded-xl text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D4611B", color: "#fff" }}
                >
                  통나무 장작 구매하기
                </a>
              </div>
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
