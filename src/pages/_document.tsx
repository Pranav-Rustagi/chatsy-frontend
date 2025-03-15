import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head />
      <body className="antialiased h-screen w-screen overflow-hidden bg-chatsy-bg text-chatsy-text-main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
