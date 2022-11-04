import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

function MyDocument() {
  return (
    <Html>
      <Head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
