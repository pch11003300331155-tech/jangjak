"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const REVIEWS = [
  {
    text: "장작 불이 너무 잘 붙어요!\n예전에 다른 브랜드 쓰다가 이번에 처음 써봤는데\n착화가 정말 빠르고 연기도 많이 안 나서 너무 좋았어요.",
    author: "캠핑*러",
  },
  {
    text: "화목난로에 넣었는데 오래 타고 화력이 장난 아니에요.\n건조가 잘 돼 있어서 그런지 끊기지 않고 계속 잘 타더라고요.\n배송도 빠르고 포장도 튼튼해요.",
    author: "난로*인",
  },
  {
    text: "불멍 하려고 샀는데 완전 만족이에요!\n향도 좋고 불꽃도 예쁘게 올라와서 너무 힐링됐어요.\n양도 생각보다 많아서 2박3일도 충분했어요.",
    author: "가족*핑",
  },
  {
    text: "재구매입니다.\n처음엔 반신반의했는데 막상 써보니까 너무 좋아서 이번엔 13kg으로 샀어요.\n주변 캠퍼들한테도 다 추천하고 있어요.",
    author: "캠핑*연",
  },
];

function Stars() {
  return (
    <span className="text-lg tracking-wider" style={{ color: "#C9810A" }}>
      ★★★★★
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#F5EDE0" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p
              className="font-bold tracking-[0.3em] text-xs uppercase mb-3"
              style={{ color: "#D4611B" }}
            >
              REVIEWS
            </p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1108" }}>
              고객 후기
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.1}>
          {REVIEWS.map((review) => (
            <StaggerItem key={review.author}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Stars />
                <p
                  className="mt-4 leading-relaxed text-sm md:text-base"
                  style={{ color: "#1A1108", whiteSpace: "pre-line" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-5 text-xs font-bold text-gray-400">
                  {review.author}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
