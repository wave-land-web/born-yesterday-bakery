/** `aria-current` value for a nav link: 'page' when `path` is the current page (or a parent of it) */
export const ariaCurrent = (pathname: string, path: string) =>
  (path === '/' ? pathname === '/' : pathname.startsWith(path)) ? 'page' : undefined
