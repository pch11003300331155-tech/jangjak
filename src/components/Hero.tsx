"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "./animations";

const SMARTSTORE_URL = "https://smartstore.naver.com/jangjackrevo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Image
          src="/images/camp-fire.png"
          alt="장작혁명 캠핑 장작과 불"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-bold tracking-[0.4em] text-xs md:text-sm mb-6 uppercase"
          style={{ color: "#D4611B" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          PREMIUM FIREWOOD BRAND
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        >
          캠핑장작의 혁명
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          국내 최대규모 생산설비 · 10일 완벽건조 · 전국 즉시 배송
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
        >
          <a
            href={SMARTSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-lg px-10 py-4 rounded-full text-white transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#D4611B" }}
          >
            지금 구매하기
          </a>
          <a
            href="#products"
            className="border-2 border-white/40 hover:border-white text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:bg-white/10"
          >
            제품 보기
          </a>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
        >
          <div>
            <p className="text-3xl md:text-4xl font-black" style={{ color: "#D4611B" }}>
              <CountUp to={2} suffix="만+" />
            </p>
            <p className="text-white/50 text-sm mt-1">박스 상시 재고</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black" style={{ color: "#D4611B" }}>
              <CountUp to={10} suffix="일" />
            </p>
            <p className="text-white/50 text-sm mt-1">가마건조</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black" style={{ color: "#D4611B" }}>
              <CountUp to={100} suffix="+" />
            </p>
            <p className="text-white/50 text-sm mt-1">납품 캠핑장</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/40"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
