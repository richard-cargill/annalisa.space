export default function currentPageIndexOf(pagesArray, slug) {
  return pagesArray.findIndex(page => page.slug === slug)
}
