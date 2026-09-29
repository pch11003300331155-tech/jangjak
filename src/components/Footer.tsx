"use client";

const SMARTSTORE_URL = "https://smartstore.naver.com/jangjackrevo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080706" }} className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div>
            <p className="text-white font-black text-2xl tracking-widest mb-3">
              장작혁명
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-5">
              캠핑장작 혁명의 시작.
              <br />
              국내 최대규모 생산설비의 프리미엄 캠핑장작.
            </p>
            <a
              href={SMARTSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold px-6 py-3 rounded-full text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#D4611B" }}
            >
              네이버 스마트스토어
            </a>
          </div>

          <div>
            <p className="text-white/40 font-bold text-xs tracking-widest uppercase mb-4">
              연락처
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M14.5 11.5v2a1 1 0 01-1 1A11.5 11.5 0 012 3a1 1 0 011-1h2a1 1 0 011 .8l.5 2a1 1 0 01-.3 1L5 7a9 9 0 004 4l1.2-1.2a1 1 0 011-.3l2 .5a1 1 0 01.8 1z" stroke="#D4611B" strokeWidth="1.2" fill="none" />
                </svg>
                <a href="tel:18777449" className="text-white/60 hover:text-white text-sm transition-colors">
                  1877-7449
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="#D4611B" />
                  <circle cx="8" cy="6" r="1.5" fill="#080706" />
                </svg>
                <p className="text-white/40 text-sm">경기도 화성시 장안면 금의리 54-13</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white/40 font-bold text-xs tracking-widest uppercase mb-4">
              바로가기
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "제품소개", href: "#products" },
                { label: "특징", href: "#features" },
                { label: "제작과정", href: "#process" },
                { label: "가맹점 안내", href: "#branches" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} 장작혁명. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white/20 hover:text-white/50 text-xs transition-colors flex items-center gap-1"
          >
            맨 위로
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 8l4-4 4 4" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
