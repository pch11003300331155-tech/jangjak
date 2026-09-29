import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "장작혁명 | 프리미엄 캠핑장작",
  description:
    "캠핑장작 혁명의 시작. 국내 최대규모 생산설비와 10일간 가마건조로 만들어진 프리미엄 캠핑장작. 캠핑 불멍과 화목난로 모두 사용 가능.",
  keywords: [
    "캠핑장작",
    "장작혁명",
    "불멍장작",
    "화목장작",
    "통나무장작",
    "프리미엄장작",
    "캠핑",
  ],
  openGraph: {
    title: "장작혁명 | 프리미엄 캠핑장작",
    description: "캠핑장작 혁명의 시작. 국내 최대규모 생산설비의 프리미엄 캠핑장작.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://jangjak.vercel.app/images/products/tongnamu-product.png",
        width: 1200,
        height: 630,
        alt: "장작혁명 통나무 캠핑장작",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
