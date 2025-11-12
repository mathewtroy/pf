import Head from "next/head";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import { useLang } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Home() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang].seo;

  // Define locales and alternate links for SEO
  const currentLocale = lang === "ru" ? "ru_RU" : "en_US";
  const siteUrl = "https://krossale.vercel.app";

  return (
    <>
      <Head>
        {/* Base SEO */}
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <meta name="author" content="Aleksandr Kross" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:image" content={`${siteUrl}/pf-preview.png`} />
        <meta property="og:image:width" content="1183" />
        <meta property="og:image:height" content="776" />
        <meta property="og:locale" content={currentLocale} />
        <meta property="og:site_name" content="Aleksandr Kross Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.ogDescription} />
        <meta name="twitter:image" content={`${siteUrl}/pf-preview.png`} />

        {/* Alternate language links for Google */}
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="ru" href={`${siteUrl}/?lang=ru`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

        {/* Favicon */}
        <link rel="icon" href="/pf-icon.svg" type="image/svg+xml" />
      </Head>

      <Navbar />
      <ProfileSection />
    </>
  );
}
