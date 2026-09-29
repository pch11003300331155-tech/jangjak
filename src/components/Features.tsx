"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const FEATURES = [
  {
    num: "01",
    title: "국내 최대규모 생산설비 및 물류창고",
    desc: "국내 최대 규모의 생산설비와 물류보관창고를 직접 운영합니다.\n안정적인 공급과 일관된 품질을 보장합니다.",
  },
  {
    num: "02",
    title: "10일간 완벽 가마건조, 균일한 함수율",
    desc: "최대규모 기계건조장에서 전기와 나무껍질을 이용해 10일간 가마건조.\n균일한 함수율로 빠른 착화와 깔끔한 연소.",
  },
  {
    num: "03",
    title: "2만 박스 상시 대기, 주문 즉시 출고",
    desc: "본사 물류창고에 2만 박스 이상 상시 대기.\n주문 즉시 배송이 가능하여 캠핑 전날 주문해도 걱정 없습니다.",
  },
  {
    num: "04",
    title: "전국 가맹점 네트워크 배송",
    desc: "전국 가맹점 네트워크를 통해 빠르고 안전하게 배송합니다.\n어디서든 신선한 장작을 받아보세요.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6" style={{ backgroundColor: "#0C0B0A" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p
              className="font-bold tracking-[0.3em] text-xs uppercase mb-3"
              style={{ color: "#D4611B" }}
            >
              WHY JANGJAK REVOLUTION
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              장작혁명이 특별한 이유
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} stagger={0.12}>
          {FEATURES.map((f) => (
            <StaggerItem key={f.num}>
              <div
                className="p-10 md:p-14"
                style={{ backgroundColor: "#0C0B0A" }}
              >
                <p
                  className="text-5xl md:text-6xl font-black mb-6"
                  style={{ color: "#D4611B" }}
                >
                  {f.num}
                </p>
                <h3 className="text-white font-black text-xl md:text-2xl mb-4 leading-snug">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
