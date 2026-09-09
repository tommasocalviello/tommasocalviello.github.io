import { useRef, useState, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  /** Enable subtle 3D tilt following the cursor. */
  tilt?: boolean
}

export function SpotlightCard({ children, className, tilt = true }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false })

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springRx = useSpring(rx, { stiffness: 150, damping: 18 })
  const springRy = useSpring(ry, { stiffness: 150, damping: 18 })
  const rotateX = useTransform(springRx, (v) => `${v}deg`)
  const rotateY = useTransform(springRy, (v) => `${v}deg`)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setGlow({ x: px * 100, y: py * 100, active: true })
    if (tilt) {
      rx.set((0.5 - py) * 6)
      ry.set((px - 0.5) * 6)
    }
  }

  function handleLeave() {
    setGlow((g) => ({ ...g, active: false }))
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-md",
        "transition-colors duration-300 ease-out hover:border-accent-cyan/40",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(340px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--color-accent-cyan) 14%, transparent), transparent 60%)`,
        }}
      />
      <div className="relative" style={{ transform: "translateZ(1px)" }}>
        {children}
      </div>
    </motion.div>
  )
}
