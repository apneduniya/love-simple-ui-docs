import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
  faviconGlyph: "✨",
  docsRepositoryBase: "https://github.com/thekavikumar/love-simple-ui",
  logo: <h1 className="logo">Love Simple UI</h1>,
  project: {
    link: "https://github.com/thekavikumar/love-simple-ui",
  },
  chat: {
    link: "https://discord.gg/kBefU7D76n",
  },
  footer: {
    text: "© 2023 Love Simple UI. Made with ❤️ by Kavikumar.",
  },
};

export default config;
