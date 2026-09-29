"use client";

import Image from "next/image";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "./animations";

const HOOKS = [
  {
    num: "01",
    title: "국내 유일, 통나무 완벽건조",
    desc: "쪼개지 않은 통나무 그대로 완벽하게 건조합니다.\n국내에서 장작혁명만이 할 수 있는 기술입니다.",
  },
  {
    num: "02",
    title: "같은 3kg, 결과는 완전히 달랐습니다",
    desc: "동일한 3kg으로 타사 제품과 비교했을 때,\n점화 직후부터 압도적인 화력 차이가 납니다.",
  },
  {
    num: "03",
    title: "시간이 지나도 계속 타오릅니다",
    desc: "타사 장작이 꺼질 때 장작혁명은 여전히 강하게 타고 있습니다.\n긴 연소시간이 캠핑의 여유를 만듭니다.",
  },
  {
    num: "04",
    title: "화목·불멍, 두 가지 모두",
    desc: "캠핑장 불멍부터 가정용 화목난로까지.\n완벽건조된 통나무 장작은 어디서든 최고의 화력을 냅니다.",
  },
];

export default function TongnamuTeaser() {
  return (
    <section style={{ backgroundColor: "#F5EDE0" }} className="overflow-hidden">

      {/* ── 헤더: 풀블리드 다크 ── */}
      <div style={{ backgroundColor: "#1A1108" }} className="px-8 md:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <FadeUp>
                <span
                  className="inline-block text-xs font-black px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
                  style={{ backgroundColor: "rgba(212,97,27,0.15)", color: "#D4611B", border: "1px solid rgba(212,97,27,0.3)" }}
                >
                  NEW — 신제품 출시
                </span>
              </FadeUp>
              <FadeUp delay={0.15}>
                <h2
                  className="font-black text-white leading-tight"
                  style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                >
                  통나무 장작의<br />
                  <span style={{ color: "#D4611B" }}>혁명</span>이 왔습니다
                </h2>
              </FadeUp>
            </div>
            <FadeIn delay={0.3}>
              <p className="text-white/40 max-w-sm text-sm leading-relaxed md:text-right">
                국내 유일 통나무 완벽건조 기술.<br />
                쪼갠 장작과는 차원이 다른 화력과 연소시간을 경험하세요.
              </p>
            </FadeIn>
          </div>

          {/* 비교 이미지 2장 나란히 */}
          <div className="grid md:grid-cols-2 gap-3">
            <FadeIn delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/images/products/tongnamu-before.jpg"
                  alt="통나무 장작 점화 준비"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "rgba(12,11,10,0.8)" }}>
                    점화 전
                  </span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/images/products/tongnamu-compare.jpg"
                  alt="통나무 장작 화력 비교"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "rgba(212,97,27,0.9)" }}>
                    점화 직후 — 압도적 차이
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── 후킹 포인트 4개 ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20">
        <StaggerContainer className="grid md:grid-cols-2 gap-x-16 gap-y-14" stagger={0.12}>
          {HOOKS.map((h) => (
            <StaggerItem key={h.num}>
              <div className="flex gap-6 items-start">
                <p
                  className="font-black text-5xl leading-none shrink-0 select-none"
                  style={{ color: "rgba(26,17,8,0.08)" }}
                >
                  {h.num}
                </p>
                <div>
                  <h3 className="font-black text-xl md:text-2xl mb-3" style={{ color: "#1A1108" }}>
                    {h.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(26,17,8,0.5)", whiteSpace: "pre-line" }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── 풀블리드 사진 + 카운트다운 CTA ── */}
      <div className="relative overflow-hidden" style={{ height: "480px" }}>
        <Image
          src="/images/products/tongnamu-fire.jpg"
          alt="통나무 장작 강한 화력"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(12,11,10,0.92) 0%, rgba(12,11,10,0.5) 60%, rgba(12,11,10,0.2) 100%)" }}
        />
        <div className="relative h-full flex items-center px-8 md:px-20">
          <div className="max-w-lg">
            <FadeIn>
              <p
                className="font-bold tracking-[0.3em] text-xs uppercase mb-4"
                style={{ color: "#D4611B" }}
              >
                NOW AVAILABLE
              </p>
            </FadeIn>
            <FadeUp delay={0.1}>
              <h3
                className="font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                캠핑장작의<br />진짜 혁명.<br />지금 바로 만나보세요.
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                국내 유일 통나무 완벽건조 기술.<br />
                네이버 스마트스토어에서 지금 주문하실 수 있습니다.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://smartstore.naver.com/jangjackrevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-black text-white rounded-full px-8 py-4 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D4611B" }}
                >
                  지금 구매하기
                </a>
                <a
                  href="tel:18777449"
                  className="inline-flex items-center gap-3 font-bold text-white/70 rounded-full px-6 py-4 transition-colors hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5 12.75v2a1 1 0 01-1 1A13.5 13.5 0 012.25 2.5a1 1 0 011-1h2a1 1 0 011 .9l.5 2.5a1 1 0 01-.3 1.1L5.2 7.2a10.5 10.5 0 005.1 5.1l1.2-1.25a1 1 0 011.1-.3l2.5.5a1 1 0 01.9 1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  1877-7449
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ── 스펙 미리보기 ── */}
      <div style={{ backgroundColor: "#1A1108" }} className="px-8 md:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.08}>
            {[
              { label: "제품 형태", value: "통나무 원목" },
              { label: "건조 방식", value: "완벽 가마건조" },
              { label: "용도", value: "화목·불멍 양용" },
              { label: "특징", value: "국내 유일 기술" },
            ].map((spec) => (
              <StaggerItem key={spec.label}>
                <div className="border-l pl-5" style={{ borderColor: "rgba(212,97,27,0.4)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D4611B" }}>
                    {spec.label}
                  </p>
                  <p className="font-black text-white text-lg">{spec.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

    </section>
  );
}
