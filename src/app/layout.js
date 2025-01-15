import "@/assets/scss/style.scss";

export const metadata = {
  title: "전선욱 포트폴리오 😜(RAINBOW MODE)",
  description: "여러 프레임워크를 활용한 포트폴리오",
  keywords:["포트폴리오", "next.js"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
