import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img
        src="/images/logo-circle.png"
        alt="PubliFast Logo"
        width={68}
        height={68}
      />
    </span>
  ),
  project: {
    link: "https://github.com/eme-digital-content/nexta-docs-test",
  },
  chat: {
    link: "https://www.linkedin.com/in/mbellorin2/",
  },
  docsRepositoryBase: "https://github.com/eme-digital-content/nexta-docs-test",
  footer: {
    text: "Technical Writer Test",
  },
};

export default config;
