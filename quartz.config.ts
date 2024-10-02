import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "anri's garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      /*typography: {
        header: "Palatino", 
        body: "Palatino", // overwritten by custom.scss
        code: "Courier",
      },*/
      typography: {
        header: "monospace",
        body: "monospace",
        code: "monospace",
      },
      //HSR color scheme
      /*colors: {
        lightMode: {
          light: "#eff1f5", // bg 
          lightgray: "#9ca0b0",
          gray: "#9ca0b0",
          darkgray: "#5c5f77",
          dark: "#4c4f69",
          secondary: "#4d93a1", // title, folder names, body links, callouts
          tertiary: "#b63b1d", // text selection, link hover
          highlight: "rgba(166, 227, 161, 0.15)", // link and tag highlight
        },
        darkMode: {
          light: "#0a1017", // bg
          lightgray: "#313244",
          gray: "#9399b2",
          darkgray: "#bac2de",
          dark: "#cdd6f4",
          secondary: "#4d93a1", // title, folder names, body links, callouts
          tertiary: "#b63b1d", // text selection, link hover
          highlight: "rgba(245, 224, 220, 0.15)", // link and tag highlight
        },*/
      //black and red
      colors: {
        lightMode: {
          light: "#eff1f5", // bg 
          lightgray: "#9ca0b0",
          gray: "#9ca0b0",
          darkgray: "#5c5f77",
          dark: "#4c4f69",
          secondary: "#a0564d", // title, folder names, body links, callouts
          tertiary: "#dbaea8", // text selection, link hover
          highlight: "rgba(166, 227, 161, 0.15)", // link and tag highlight
        },
        darkMode: {
          light: "#000", // bg
          lightgray: "#313244",
          gray: "#9399b2",
          darkgray: "#bac2de",
          dark: "#cdd6f4",
          secondary: "#d43046", // title, folder names, body links, callouts
          tertiary: "#896b67", // text selection, link hover
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
