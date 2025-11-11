import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setThemeScript = `
    (function() {
      try {
        const stored = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = stored || (systemDark ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (e) {}
    })();
  `;

  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="description" content="Aleksandr Kross — Web Developer Portfolio" />
        <meta property="og:title" content="Aleksandr Kross — Portfolio" />
        <meta property="og:description" content="React • TypeScript • Firebase" />
        <meta property="og:image" content="/pf-profile.svg" />
        <link rel="icon" href="/pf-icon.svg" type="image/svg+xml" />
      </Head>
      <body>
        {/* set theme before paint */}
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
