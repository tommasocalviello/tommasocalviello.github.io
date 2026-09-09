import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import { Section } from "./Section"
import { SpotlightCard } from "./SpotlightCard"
import { projects } from "@/data/portfolio"

export function Projects() {
  return (
    <Section id="projects" index="02" kicker="Selected Systems" title="Projects & Architectures">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
                      {p.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/60">
                    <Cpu className="h-4 w-4 text-accent-emerald" strokeWidth={1.7} />
                  </span>
                </div>

                {/* Metric badges */}
                <div className="flex flex-wrap gap-2.5">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline gap-1.5 rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1.5"
                    >
                      <span className="font-mono text-base font-semibold text-accent-cyan">{m.value}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 text-sm">
                  <p className="text-muted">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/60">Problem · </span>
                    {p.problem}
                  </p>
                  <p className="leading-relaxed text-foreground/90">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent-emerald">Solution · </span>
                    {p.solution}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
