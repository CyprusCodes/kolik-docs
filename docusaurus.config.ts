import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kolik",
  tagline: "Tüm İK süreçlerinizi tek bir merkezden yönetin.",
  favicon: "img/kolik-favicon.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CyprusCodes", // Usually your GitHub org/user name.
  projectName: "kolik-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    localeConfigs: {
      tr: { label: "Türkçe", htmlLang: "tr-TR" },
      en: { label: "English", htmlLang: "en-US" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/CyprusCodes/kolik-docs/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/CyprusCodes/kolik-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        // Most guides are Turkish; avoid English stemming changing search terms.
        removeDefaultStemmer: true,
        removeDefaultStopWordFilter: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchBarPosition: "right",
        searchBarShortcut: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Kolik",
        src: "img/kolik-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Dokümantasyon",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { type: "localeDropdown", position: "right" },
        {
          href: "https://github.com/CyprusCodes/kolik-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Kolik by FutureCast.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
