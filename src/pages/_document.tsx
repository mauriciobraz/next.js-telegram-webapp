import { Head, Html, Main, NextScript } from 'next/document';
import { Roboto, Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

const ROBOTO_TTF = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const ROBOTO_MONO_TTF = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-roboto-mono',
});

function MyDocument() {
  return (
    <Html>
      <Head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </Head>
      <body className={`${ROBOTO_TTF.variable} ${ROBOTO_MONO_TTF.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
