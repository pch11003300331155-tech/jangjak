const STEPS = [
  { num: "01", title: "원목 절단", desc: "엄선된 원목을 최적의 크기로 정밀 절단합니다." },
  { num: "02", title: "건조장 이동", desc: "절단된 원목을\n국내 최대규모 기계건조장으로 이동합니다." },
  { num: "03", title: "10일 가마건조", desc: "전기와 나무껍질을 활용해 10일간 가마건조.\n균일한 함수율을 달성합니다." },
  { num: "04", title: "자연건조", desc: "가마건조 후 자연건조를 통해\n최적의 연소 상태로 완성합니다." },
  { num: "05", title: "포장 출고", desc: "품질 검사를 거쳐 안전하게 포장.\n물류창고에서 즉시 출고 대기합니다." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="font-bold tracking-[0.3em] text-xs uppercase mb-3"
            style={{ color: "#D4611B" }}
          >
            PRODUCTION PROCESS
          </p>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1108" }}>
            장작이 만들어지는 과정
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {STEPS.map((step) => (
            <div key={step.num} className="flex items-start gap-6 md:gap-12 max-w-3xl mx-auto">
              <p
                className="text-7xl md:text-8xl font-black leading-none shrink-0 select-none"
                style={{ color: "rgba(26,17,8,0.08)" }}
              >
                {step.num}
              </p>
              <div className="pt-3 md:pt-5">
                <h3 className="text-xl md:text-2xl font-black mb-2" style={{ color: "#1A1108" }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed" style={{ whiteSpace: "pre-line" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
