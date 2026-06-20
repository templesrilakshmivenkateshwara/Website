"use client"

import { useEffect } from "react"

const KEY = "temple-site-reloaded-after-chunk-error"

function shouldReload(message: string) {
  return (
    message.includes("ChunkLoadError") ||
    message.includes("Loading chunk") ||
    message.includes("CSS_CHUNK_LOAD_FAILED") ||
    message.includes("Failed to fetch dynamically imported module")
  )
}

export function ReloadOnChunkError() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const message = event.error?.message || event.message || ""
      if (!shouldReload(message)) return
      if (sessionStorage.getItem(KEY)) return
      sessionStorage.setItem(KEY, "1")
      window.location.reload()
    }

    const handleRejection = (event: PromiseRejectionEvent) => {
      const message =
        event.reason?.message ||
        (typeof event.reason === "string" ? event.reason : "") ||
        ""
      if (!shouldReload(message)) return
      if (sessionStorage.getItem(KEY)) return
      sessionStorage.setItem(KEY, "1")
      window.location.reload()
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleRejection)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleRejection)
    }
  }, [])

  return null
}
