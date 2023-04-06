export const SITE = {
  title: "gasps documentation",
  description: "the gasps interface suite documentation",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://gasps.xyz/default-og-image.png",
    alt: "gasps logo in front of a beautiful picture of a lake in snowy mountains.",
  },
  twitter: "@gasps.xyz",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const COMMUNITY_INVITE_URL = `https://discord.gg/guilty`;

export const GITHUB_EDIT_URL = `https://github.com/SiriusDevelopmentGroup/rayfield-docs/tree/master`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "gasps",
  appId: "Y1DPKMTCPW",
  apiKey: "23dce9cc88cb86b13abd821958b35469",
};

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
  Configuration: [
    { text: "introduction", link: "introduction" },
    { text: "booting the library", link: "booting-library" },
    { text: "windows", link: "windows" },
  ],
  Interaction: [
    { text: "elements", link: "interactive-elements" },
    { text: "binds", link: "keybinds" },
  ],

  "ui components": [{ text: "textual elements", link: "text" }],
};
