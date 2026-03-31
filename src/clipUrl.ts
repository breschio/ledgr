/** Cache-bust video URLs so GitHub Pages / browsers pick up new renders after deploy. */
export function clipUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}?v=${__BUILD_HASH__}`
}
