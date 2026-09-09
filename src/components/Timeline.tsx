import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "./Section"
import { milestones } from "@/data/portfolio"

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section id="milestones" index="01" kicker="Trajectory" title="Milestones & Recognition">
      <div ref={ref} className="relative pl-2">
        {/* Track */}
        <div className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[15px]" />
        {/* Animated draw */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent-cyan via-accent-cyan to-accent-emerald sm:left-[15px]"
        />

        <ul className="flex flex-col gap-8">
          {milestones.map((m, i) => (
            <motion.li
              key={`${m.year}-${m.title}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12 sm:pl-14"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan shadow-[0_0_12px_2px_color-mix(in_oklab,var(--color-accent-cyan)_70%,transparent)]" />
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-accent-cyan">{m.year}</span>
                  <span className="rounded-md border border-border bg-surface/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-pretty text-lg font-medium text-foreground">{m.title}</h3>
                <p className="text-sm text-muted">{m.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
