import { motion } from "framer-motion"
import { Award as AwardIcon, Users } from "lucide-react"
import { Section } from "./Section"
import { SpotlightCard } from "./SpotlightCard"
import { awards, involvement } from "@/data/portfolio"

export function Awards() {
  return (
    <Section id="awards" index="04" kicker="Recognition" title="Awards & Honors">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Awards list */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <AwardIcon className="h-4 w-4 text-accent-cyan" strokeWidth={1.7} />
            Academic Distinctions
          </div>
          <div className="flex flex-col gap-3">
            {awards.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard tilt={false}>
                  <div className="flex items-start gap-4 p-5">
                    <span className="mt-0.5 rounded-md border border-accent-cyan/40 bg-accent-cyan/10 px-2 py-1 font-mono text-xs text-accent-cyan">
                      {a.year}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold leading-snug text-foreground">{a.name}</h3>
                      <p className="text-sm leading-relaxed text-muted">{a.detail}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Involvement */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <Users className="h-4 w-4 text-accent-cyan" strokeWidth={1.7} />
            Leadership & Service
          </div>
          <SpotlightCard tilt={false} className="h-full">
            <ul className="flex flex-col divide-y divide-border">
              {involvement.map((v, i) => (
                <motion.li
                  key={v.org}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col gap-1 p-5"
                >
                  <span className="font-mono text-xs text-accent-emerald">{v.role}</span>
                  <span className="text-sm leading-relaxed text-foreground/90">{v.org}</span>
                </motion.li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </Section>
  )
}
