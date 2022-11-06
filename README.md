# Next.js w/ Tailwind for Telegram Web Apps

This is a template for quickly create Telegram Web Apps using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

### Why Next.js?

Next.js is easy and powerful, it also allows creating API routes without the need of another server and any troubles, example, it's ideal for validating the incoming web app's request hash.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io) to create a new project:

```bash
pnpm create next-app --example https://github.com/mauriciobraz/next.js-telegram-webapp your-app-name
```

Now, clone the [`.env.example`](.env.example) file and rename it to `.env.local` and fill the variables with your own data.

- `BOT_TOKEN`: Your Telegram Bot Token (used for validating the incoming requests, see [Request Validation](#request-validation) for more info)

```bash
pnpm dev
```

### Testing locally w/ [ngrok](https://ngrok.com/)

Since Telegram only accepts HTTPS links, you'll need to use a tunneling service like [ngrok](https://ngrok.com/) to test your bot locally.

```bash
# Copy the HTTPS URL given by ngrok and use it as main URL for your bot.
# If the port differs from 3000, change it accordingly.
ngrok http 3000
```

### Bundle Analyzer

This template is already configured to use [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer), that is a plugin for Next.js that analyzes the bundle size of your application (useful when you want to replace a library with another one that is smaller). The following command will generate a report in the `.next/analyze` folder and open it in your browser.

```bash
pnpm analyze
```

## Request Hash Validation

All the requests are validated using an API route that checks if the request is coming from Telegram. [Telegram's documentation](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app) explains how it works.

### Disabling the validation

To disable this feature, delete the [`pages/api/validate-hash.ts`](src/pages/api/validate-hash.ts) file and remove the `useEffect` hook from [`pages/_app.tsx`](src/pages/_app.tsx) and it's dependencies.

```diff
# src/pages/_app.tsx
import type { AppProps } from 'next/app';
- import { useEffect, useState } from 'react';
- import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
-  const [isHashValid, setIsHashValid] = useState(false);

-  // Wait for validation to complete before rendering the page and stop the
-  // rendering if the hash is invalid. Comment out the following useEffect
-  // hook to see the page render without the hash validation.
-  useEffect(() => {
-    axios
-      .post('/api/validate-hash', { hash: window.Telegram.WebApp.initData })
-      .then(response => setIsHashValid(response.status === 200));
-  }, []);

-  if (!isHashValid) {
-    return null;
-  }

  return <Component {...pageProps} />;
}
```

### Using [`initData`](https://core.telegram.org/bots/webapps#webappinitdata)

You can use in the `window.Telegram.WebApp.initDataUnsafe` but it's not recommended by Telegram. There's the hook [`useTelegramInitData`](src/hooks/useTelegramInitData.ts) that parses the data and returns an object.

```tsx
// src/pages/init-data.tsx
import { useTelegramInitData } from '../hooks/useTelegramInitData';

export default function InitData() {
  const initData = useTelegramInitData();

  return (
    <div>
      <h1>initData</h1>
      <pre>{JSON.stringify(initData, null, 2)}</pre>
    </div>
  );
}
```

## Telegram's Native Colors w/ Tailwind

Telegram's colors are already defined in the `tailwind.config.js` file. You can use them in your components with the following directives (see [Tailwind's documentation](https://tailwindcss.com/docs/customizing-colors#using-custom-colors) for more info):

| Tailwind Directive's Name  | Telegram's Color Variable            | Fallback Color |
| -------------------------- | ------------------------------------ | -------------- |
| `telegram-white`           | `var(--tg-theme-bg-color)`           | `#ffffff`      |
| `telegram-black`           | `var(--tg-theme-text-color)`         | `#000000`      |
| `telegram-hint`            | `var(--tg-theme-hint-color)`         | `#707579`      |
| `telegram-link`            | `var(--tg-theme-link-color)`         | `#3390ec`      |
| `telegram-primary`         | `var(--tg-theme-button-color)`       | `#3390ec`      |
| `telegram-primary-text`    | `var(--tg-theme-button-text-color)`  | `#ffffff`      |
| `telegram-secondary-white` | `var(--tg-theme-secondary-bg-color)` | `#f4f4f5`      |

### Component Example

```tsx
// src/components/Example.tsx
import type { FC } from 'react';

const Example: FC = () => {
  return (
    <div className="bg-telegram-white text-telegram-black flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl">Example</h1>
      <p className="text-sm">This is an example component.</p>
    </div>
  );
};

export default Example;
```
