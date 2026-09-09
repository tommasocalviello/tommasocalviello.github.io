import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  index: string
  title: string
  kicker?: string
  children: ReactNode
  className?: string
}

export function Section({ id, index, title, kicker, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex flex-col gap-3"
      >
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent-cyan">
          <span>{index}</span>
          <span className="h-px w-8 bg-accent-cyan/50" />
          {kicker ? <span className="text-muted">{kicker}</span> : null}
        </div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}
