import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "containers/LanguageProvider";
import langConfig from "languageConfig.json";

const DefaultHead = ({ title }) => {
  const { userLanguage } = useLanguage();

  return (
    <Helmet htmlAttributes={{ lang: userLanguage }}>
      <meta charSet="utf-8" />
      <title lang={userLanguage}>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={langConfig[userLanguage].ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="application-name" content="Tkfm Toolbox" />
      <meta name="msapplication-TileColor" content="#F48FB1" />
      <meta
        name="msapplication-TileImage"
        content="/tkfmtools/mstile-144x144.png"
      />
      <meta
        name="msapplication-square70x70logo"
        content="/tkfmtools/mstile-70x70.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="/tkfmtools/mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="/tkfmtools/mstile-310x310.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/tkfmtools/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/tkfmtools/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/tkfmtools/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/tkfmtools/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/tkfmtools/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/tkfmtools/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/tkfmtools/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/tkfmtools/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/tkfmtools/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/tkfmtools/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/tkfmtools/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/tkfmtools/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/tkfmtools/favicon-128.png"
        sizes="128x128"
      />
      <link rel="manifest" href="/tkfmtools/manifest.json" />
    </Helmet>
  );
};

export default ({ title, description, path }) => {
  const { isDefault, userLanguage } = useLanguage();
  const url = path === "/" ? "" : path?.split("/").slice(0, -1).join("_");

  return (
    <>
      <DefaultHead title={title} />
      {path && (
        <Helmet htmlAttributes={{ lang: userLanguage }}>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
          <meta
            property="og:url"
            content={`https://purindaisuki.github.io/tkfmtools${
              (isDefault ? "" : "/" + userLanguage) + path
            }`}
          />
          <meta
            property="og:image"
            content={`https://purindaisuki.github.io/tkfmtools/website_preview${
              url + (isDefault ? "" : "_en")
            }.png`}
          />
          <meta property="og:image:width" content="1440" />
          <meta property="og:image:height" content="756" />
          <meta
            property="twitter:url"
            content={`https://purindaisuki.github.io/tkfmtools${
              (isDefault ? "" : "/" + userLanguage) + path
            }`}
          />
          <meta
            property="twitter:image"
            content={`https://purindaisuki.github.io/tkfmtools/website_preview${
              url + (isDefault ? "" : "_en")
            }.png`}
          />
          <meta
            name="google-site-verification"
            content="F_IfmH-gHHQSs2j53dl-2l-zMqnWtwWOnfqdQiwLUow"
          />
        </Helmet>
      )}
    </>
  );
};
