import Image from "next/image";

const SMARTSTORE_URL = "https://smartstore.naver.com/jangjackrevo";

export default function CtaBanner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/products/fire1.jpg"
          alt="장작 불꽃"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          지금 바로 주문하세요
        </h2>

        <p className="text-white/50 text-lg mb-8">
          대표번호로 전화하시거나 스마트스토어에서 바로 구매하세요
        </p>

        <a
          href="tel:18777449"
          className="inline-block text-4xl md:text-6xl font-black text-white mb-10 hover:opacity-80 transition-opacity"
        >
          1877-7449
        </a>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SMARTSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg px-10 py-4 rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#D4611B" }}
          >
            스마트스토어에서 구매하기
          </a>
          <a
            href="tel:18777449"
            className="border-2 border-white/40 hover:border-white text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:bg-white/10"
          >
            전화 주문하기
          </a>
        </div>
      </div>
    </section>
  );
}
