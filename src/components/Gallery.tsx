"use client";

import Image from "next/image";
import { SplitText, CountUp, FadeUp, FadeIn, StaggerContainer, StaggerItem, AnimatedBar } from "./animations";
import KoreaMap from "./KoreaMap";

export default function Gallery() {
  return (
    <article style={{ backgroundColor: "#0C0B0A" }} className="overflow-hidden">

      {/* ─── 01. 대형 브랜드 선언 ─── */}
      <div className="px-8 md:px-20 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* 텍스트 */}
          <div>
            <FadeIn>
              <p className="font-bold tracking-[0.4em] text-xs uppercase mb-8" style={{ color: "#D4611B" }}>
                BRAND STORY
              </p>
            </FadeIn>
            <SplitText
              text={"대한민국에서\n가장 많은 캠핑장이\n선택한 장작이\n있습니다."}
              className="font-black leading-[1.05] text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
              stagger={0.15}
              duration={0.8}
            />
            <FadeUp delay={0.6}>
              <p className="text-white/40 mt-10 text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                {"전국 100여 곳의 캠핑장과 글램핑장이\n장작혁명을 선택한 이유는 단 하나입니다.\n한번 써본 캠퍼는 절대 다른 장작으로\n돌아가지 않습니다."}
              </p>
            </FadeUp>
          </div>

          {/* 대한민국 지도 */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center">
              <KoreaMap />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ─── 02. 풀블리드 사진 + 중앙 텍스트 ─── */}
      <div className="relative h-[70vh] md:h-screen">
        <Image
          src="/images/camp-fire.png"
          alt="전국 캠핑장에서 타오르는 장작혁명"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,11,10,0.85) 0%, rgba(12,11,10,0.3) 60%, rgba(12,11,10,0.7) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-20">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-5xl md:text-8xl font-black text-white leading-none mb-4">
                <CountUp to={20000} suffix="" className="" duration={2} />
                <span className="text-2xl md:text-4xl font-bold text-white/40 ml-2">박스</span>
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-white/60 text-lg">
                언제나 준비되어 있습니다. 주문 즉시 출고.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ─── 03. 비대칭 레이아웃: 텍스트 60 / 사진 40 ─── */}
      <div className="grid md:grid-cols-5 min-h-[70vh]">
        <div
          className="md:col-span-3 flex flex-col justify-center px-8 md:px-16 py-16"
          style={{ backgroundColor: "#111008" }}
        >
          <FadeIn>
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: "#D4611B" }}>
              10 DAYS PERFECT DRYING
            </p>
          </FadeIn>
          <SplitText
            text={"점화 3초.\n10일의 건조가\n만든 결과입니다."}
            as="h3"
            className="font-black text-white leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
            stagger={0.12}
          />
          <FadeUp delay={0.3}>
            <p className="text-white/50 leading-relaxed mb-10 max-w-lg" style={{ whiteSpace: "pre-line" }}>
              {"전기와 나무껍질을 이용한 10일간의 가마건조.\n시중의 어떤 장작보다 낮은 함수율.\n불을 붙이는 순간, 차이가 느껴집니다.\n연기는 줄고 화력은 강해집니다."}
            </p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {[
              { v: "10일", l: "가마건조" },
              { v: "0", l: "곰팡이 걱정" },
              { v: "즉시", l: "착화" },
            ].map((s) => (
              <StaggerItem key={s.l}>
                <p className="text-2xl md:text-3xl font-black" style={{ color: "#D4611B" }}>{s.v}</p>
                <p className="text-white/40 text-xs mt-1">{s.l}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="md:col-span-2 relative h-64 md:h-auto">
          <Image
            src="/images/common/stove1.jpg"
            alt="화목난로 강한 화력"
            fill
            className="object-cover"
            sizes="40vw"
          />
        </div>
      </div>

      {/* ─── 04. 큰 인용구 ─── */}
      <div
        className="px-8 md:px-20 py-20 md:py-28"
        style={{ backgroundColor: "#F5EDE0" }}
      >
        <FadeIn>
          <p className="font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: "#D4611B" }}>
            CUSTOMER VOICE
          </p>
        </FadeIn>
        <SplitText
          text={'"한번 써보면 다시는 다른 장작 못 써요."'}
          as="h3"
          className="font-black leading-tight"
          style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", color: "#1A1108" }}
          stagger={0.15}
          duration={0.7}
        />
        <FadeUp delay={0.4}>
          <p className="mt-6 text-sm" style={{ color: "#1A1108", opacity: 0.4 }}>— 실제 구매 고객 리뷰</p>
        </FadeUp>
      </div>

      {/* ─── 05. 비교 섹션: 사진 40 / 텍스트 60 ─── */}
      <div className="grid md:grid-cols-5 min-h-[60vh]">
        <div className="md:col-span-2 relative h-64 md:h-auto order-2 md:order-1">
          <Image
            src="/images/products/fire-compare.jpg"
            alt="장작 화력 비교 테스트"
            fill
            className="object-cover"
            sizes="40vw"
          />
          <FadeUp delay={0.3}>
            <div
              className="absolute bottom-5 left-5 right-5 rounded-xl p-4 text-xs text-white font-medium"
              style={{ backgroundColor: "rgba(12,11,10,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
            >
              동일 3kg 비교 테스트 — 장작혁명이 압도적
            </div>
          </FadeUp>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center px-8 md:px-16 py-16 order-1 md:order-2" style={{ backgroundColor: "#0C0B0A" }}>
          <FadeIn>
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: "#D4611B" }}>
              THE REVOLUTION
            </p>
          </FadeIn>
          <SplitText
            text={"타사 20kg =\n장작혁명 10kg"}
            as="h3"
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          />
          <FadeUp delay={0.2}>
            <p className="text-white/50 leading-relaxed max-w-lg mb-10" style={{ whiteSpace: "pre-line" }}>
              {"완벽건조가 만드는 기적입니다.\n수분이 빠진 장작은 무게 대비 부피가 압도적으로 커집니다.\n같은 돈으로 훨씬 오래, 훨씬 뜨겁게.\n이것이 장작혁명입니다."}
            </p>
          </FadeUp>
          {/* Visual comparison bar */}
          <FadeUp delay={0.3}>
            <div className="space-y-4 max-w-sm">
              <div>
                <div className="flex justify-between text-xs text-white/40 mb-1">
                  <span>타사 10kg</span>
                  <span>50%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <AnimatedBar targetWidth="50%" className="h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1" style={{ color: "#D4611B" }}>
                  <span>장작혁명 10kg</span>
                  <span>100%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: "rgba(212,97,27,0.2)" }}>
                  <AnimatedBar targetWidth="100%" className="h-2 rounded-full" style={{ backgroundColor: "#D4611B" }} />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ─── 06. 4컬럼 사진 스트립 + 키워드 ─── */}
      <div>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4" stagger={0.08}>
          {[
            { src: "/images/products/tongnamu-product.png", word: "통나무" },
            { src: "/images/common/camp3.jpg", word: "화력" },
            { src: "/images/common/stove2.jpg", word: "연소" },
            { src: "/images/common/camp2.jpg", word: "불멍" },
          ].map((item) => (
            <StaggerItem key={item.src}>
              <div className="relative h-48 md:h-72 group overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.word}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-black text-white text-2xl md:text-3xl tracking-widest opacity-90">
                    {item.word}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ─── 07. 화목난로 섹션 ─── */}
      <div className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24" style={{ backgroundColor: "#111008" }}>
          <FadeIn>
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: "#D4611B" }}>
              FOR WOOD STOVE
            </p>
          </FadeIn>
          <SplitText
            text={"캠핑장에서도,\n집에서도.\n화목난로에도\n완벽합니다."}
            as="h3"
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            stagger={0.12}
          />
          <FadeUp delay={0.4}>
            <p className="text-white/50 leading-relaxed max-w-md mb-8" style={{ whiteSpace: "pre-line" }}>
              {"낮은 함수율로 연기와 그을음이 적어\n실내 화목난로에서도 쾌적하게 사용할 수 있습니다.\n오랜 연소 시간으로 연료 효율도 탁월합니다."}
            </p>
          </FadeUp>
          <StaggerContainer className="space-y-3" stagger={0.08}>
            {["연기·그을음 최소화", "균일한 화력 유지", "긴 연소시간으로 연료 절감"].map((t) => (
              <StaggerItem key={t}>
                <li className="flex items-center gap-3 text-sm text-white/60 list-none">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#D4611B" }} />
                  {t}
                </li>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/images/common/stove2.jpg"
            alt="화목난로 통나무 장작"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      {/* ─── 08. 공장 / 생산현장 ─── */}
      <div className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative h-72 md:h-auto order-2 md:order-1">
          <Image
            src="/images/factory.jpg"
            alt="장작혁명 생산공장"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,11,10,0.6) 0%, transparent 60%)" }} />
          <div className="absolute bottom-5 left-5">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "rgba(212,97,27,0.9)" }}>
              경기도 자체 생산공장
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 order-1 md:order-2" style={{ backgroundColor: "#111008" }}>
          <FadeIn>
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: "#D4611B" }}>
              OUR FACTORY
            </p>
          </FadeIn>
          <SplitText
            text={"공장에서\n캠핑장까지,\n직접입니다."}
            as="h3"
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            stagger={0.12}
          />
          <FadeUp delay={0.3}>
            <p className="text-white/50 leading-relaxed max-w-md mb-8" style={{ whiteSpace: "pre-line" }}>
              {"중간 유통을 거치지 않습니다.\n경기도 자체 공장에서 직접 생산하고, 직접 배송합니다.\n그래서 품질을 보장할 수 있고, 가격 경쟁력도 다릅니다."}
            </p>
          </FadeUp>
          <StaggerContainer className="space-y-3" stagger={0.08}>
            {["자체 보유 가마건조 시설", "직접 생산 → 직접 배송 시스템", "주문 즉시 당일 출고 가능"].map((t) => (
              <StaggerItem key={t}>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#D4611B" }} />
                  {t}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* ─── 09. 유튜브 영상 ─── */}
      <div style={{ backgroundColor: "#0C0B0A" }} className="px-8 md:px-20 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="font-bold tracking-[0.3em] text-xs uppercase mb-4 text-center" style={{ color: "#D4611B" }}>
              BRAND VIDEO
            </p>
          </FadeIn>
          <FadeUp delay={0.1}>
            <h3 className="font-black text-white text-center mb-12" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              장작혁명을 직접 확인하세요
            </h3>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%", backgroundColor: "#111" }}>
              <iframe
                src="https://www.youtube.com/embed/UDLzFCUuBvc?rel=0&modestbranding=1"
                title="장작혁명 브랜드 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ─── 10. 마무리 풀블리드 ─── */}
      <div className="relative h-72 md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/products/fire1.jpg"
          alt="장작혁명 불꽃"
          fill
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative text-center px-6">
          <FadeIn>
            <p className="text-white/50 tracking-[0.4em] text-xs uppercase mb-4">
              Premium Firewood Brand
            </p>
          </FadeIn>
          <SplitText
            text={"장작혁명이 직접 만들고,\n직접 배송합니다."}
            as="p"
            className="font-black text-white"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
          />
        </div>
      </div>

    </article>
  );
}
