import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="icon" href="/icons/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main style={{ fontFamily: "Outfit, sans-serif" }} />
        <NextScript />
      </body>
    </Html>
  );
}
