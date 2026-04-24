"use client"
export function useRouter() {
  return { push: (url: string) => { window.location.href = url } }
}
export function usePathname() {
  if (typeof window === "undefined") return ""
  return window.location.pathname
}
