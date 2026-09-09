import { useEffect, useState } from "react"
import { profile } from "@/data/portfolio"

const BUILD_HASH = Math.random().toString(16).slice(2, 9)
const BUILD_TIME = new Date()

function useUptime() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => setSeconds(Math.floor((Date.now() - start) / 1000)), 1000)
    return () => clearInterval(id)
  }, [])
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
  const s = String(seconds % 60).padStart(2, "0")
  return `${h}:${m}:${s}`
}

export function Footer() {
  const uptime = useUptime()

  return (
    <footer className="relative border-t border-border bg-surface/40 backdrop-blur-sm">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-lines opacity-30" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-border bg-background/70 font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-emerald" />
            <span className="ml-2 text-muted">tommaso@portfolio: ~</span>
          </div>
          <div className="flex flex-col gap-1.5 p-4 leading-relaxed text-muted">
            <p>
              <span className="text-accent-emerald">$</span> systemctl status portfolio.service
            </p>
            <p>
              <span className="text-foreground/80">status</span>{" "}
              <span className="text-accent-emerald">● active (running)</span>
            </p>
            <p>
              <span className="text-foreground/80">uptime</span>{" "}
              <span className="text-accent-cyan">{uptime}</span>
            </p>
            <p>
              <span className="text-foreground/80">build</span>{" "}
              <span className="text-accent-cyan">{BUILD_HASH}</span>{" "}
              <span className="text-muted/70">
                ({BUILD_TIME.toISOString().slice(0, 16).replace("T", " ")} UTC)
              </span>
            </p>
            <p>
              <span className="text-foreground/80">stack</span>{" "}
              <span className="text-muted/80">vite · react · tailwind · framer-motion</span>
            </p>
            <p className="pt-1">
              <span className="text-accent-emerald">$</span> <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
        <p className="mt-5 text-center font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built for the bedside.
        </p>
      </div>
    </footer>
  )
}
