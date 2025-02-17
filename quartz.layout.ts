import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/vngrd/sprout",
      "♡": "https://mdhvn.xyz/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Explorer()),
    //Component.DesktopOnly(Component.Graph()),
  ],
  right: [ 
    //Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(), if the backlinks list is long enough, there is no way to scroll to see the rest
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  beforeBody: [Component.ArticleTitle()],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
  ],
  right: [],
}
