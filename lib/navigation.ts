export function getLocalizedHref(locale: string, href: string) {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href
  }

  if (href === "/") {
    return `/${locale}`
  }

  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) {
    return href
  }

  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`
}
