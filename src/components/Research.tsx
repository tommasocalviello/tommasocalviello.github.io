import { motion } from "framer-motion"
import { Presentation } from "lucide-react"
import { Section } from "./Section"
import { SpotlightCard } from "./SpotlightCard"
import { presentations } from "@/data/portfolio"

export function Research() {
  return (
    <Section id="research" index="03" kicker="Academic" title="Presentations & Poster Sessions">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <Presentation className="h-4 w-4 text-accent-cyan" strokeWidth={1.7} />
          Conference Presentations
        </div>
        <SpotlightCard tilt={false}>
          <ul className="flex flex-col divide-y divide-border">
            {presentations.map((p, i) => (
              <motion.li
                key={p.venue}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-1 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium text-foreground">{p.venue}</span>
                  <span className="font-mono text-xs text-accent-cyan">{p.year}</span>
                </div>
                <span className="text-sm text-muted">{p.title}</span>
              </motion.li>
            ))}
          </ul>
        </SpotlightCard>
      </div>
    </Section>
  )
}
