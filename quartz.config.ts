import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "vngrd://sprout",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Nunito",
        body: "Nunito",
        code: "Courier",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // bg 
          lightgray: "#bcc0cc",
          gray: "#9ca0b0",
          darkgray: "#9ca0b0",
          dark: "#4c4f69",
          secondary: "#5a7a44", // title, folder names, body links, callouts
          tertiary: "#ef9f76", // text selection, link hover
          highlight: "rgba(166, 227, 161, 0.15)", // link and tag highlight
        },
        darkMode: {
          light: "#1e1e2e", // bg
          lightgray: "#313244",
          gray: "#9399b2",
          darkgray: "#bac2de",
          dark: "#cdd6f4",
          secondary: "#a6e3a1", // title, folder names, body links, callouts
          tertiary: "#f38ba8", // text selection, link hover
          highlight: "rgba(245, 224, 220, 0.15)", // link and tag highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
