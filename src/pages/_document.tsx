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
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Portfolio of Aleksandr Kross — Software Developer skilled in React, TypeScript, and Firebase."
        />
        <meta
          name="keywords"
          content="Aleksandr Kross, Software Developer, React, TypeScript, Firebase, Portfolio, JavaScript, Web Developer"
        />
        <meta name="author" content="Aleksandr Kross" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krossale.vercel.app/" />
        <meta
          property="og:description"
          content="Full-stack developer specializing in React, TypeScript, Firebase, and modern web technologies."
        />
        <meta property="og:image" content="https://krossale.vercel.app/pf-preview.png" />
        <meta property="og:image:width" content="1183" />
        <meta property="og:image:height" content="776" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://krossale.vercel.app/" />
        <meta
          name="twitter:description"
          content="Explore projects and skills of Aleksandr Kross — full-stack developer skilled in React, TypeScript, and Firebase."
        />
        <meta name="twitter:image" content="https://krossale.vercel.app/pf-preview.png" />

        {/* Favicon */}
        <link rel="icon" href="/pf-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/pf-icon.svg" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
