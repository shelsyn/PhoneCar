import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full bg-white">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-white" id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
