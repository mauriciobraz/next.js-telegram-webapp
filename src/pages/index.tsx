import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SvgComponent from '../assets/GithubSvg';

const Home: NextPage = () => {
  return (
    <div className="bg-telegram-white flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Next.js + Tailwind CSS + Telegram&apos;s Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <span className="text-telegram-black text-2xl font-bold">
          This is a starter template using Next.js and Tailwind CSS for
          Telegram&apos;s Web Apps.
        </span>
      </main>

      <footer className="border-t-telegram-black flex items-center justify-center w-full h-20 border-t">
        <a
          className="flex items-center justify-center gap-2 text-telegram-black"
          href="https://github.com/mauriciobraz/next.js-telegram-webapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="text-telegram-link">
            mauriciobraz/next.js-telegram-webapp
          </span>
          <SvgComponent className="w-6 h-6 fill-telegram-link" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
