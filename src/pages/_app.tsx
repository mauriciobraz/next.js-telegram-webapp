import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  const [isHashValid, setIsHashValid] = useState(false);

  // Wait for validation to complete before rendering the page and stop the
  // rendering if the hash is invalid. Comment out the following useEffect
  // hook to see the page render without the hash validation.
  useEffect(() => {
    axios
      .post('/api/validate-hash', { hash: window.Telegram.WebApp.initData })
      .then(response => setIsHashValid(response.status === 200));
  }, []);

  if (!isHashValid) {
    return null;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
