import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import { profile, stack } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const actions = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
]

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-matrix opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-cyan) 40%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-24 sm:px-8 md:grid-cols-[auto_1fr] md:gap-16 md:pt-32">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-3 animate-[spin_16s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--color-accent-cyan),var(--color-accent-emerald),transparent_60%,var(--color-accent-cyan))] opacity-70 blur-md" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-cyan/40 to-accent-emerald/30" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-surface sm:h-48 sm:w-48">
            <img
              src={profile.photo || "/placeholder.svg"}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start gap-6">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald animate-breathe" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
            </span>
            <span className="text-foreground/90">{profile.status}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl text-pretty text-lg text-foreground/90">
            {profile.bioLead}
          </motion.p>
          <motion.p variants={item} className="max-w-2xl text-pretty leading-relaxed text-muted">
            {profile.bio}
          </motion.p>

          {/* Actions */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            {actions.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={cn(
                  "group inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground/90 backdrop-blur-md",
                  "transition-all duration-300 ease-out hover:border-accent-cyan/60 hover:text-foreground",
                  "hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent-cyan)_40%,transparent),0_0_24px_-6px_color-mix(in_oklab,var(--color-accent-cyan)_60%,transparent)]",
                )}
              >
                <Icon className="h-4 w-4 text-accent-cyan" strokeWidth={1.8} />
                {label}
              </a>
            ))}
            <a
              href={profile.cv}
              className={cn(
                "group inline-flex items-center gap-2 rounded-lg border border-accent-cyan/50 bg-accent-cyan/10 px-4 py-2.5 text-sm font-medium text-accent-cyan backdrop-blur-md",
                "transition-all duration-300 ease-out hover:bg-accent-cyan/20",
                "hover:shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--color-accent-cyan)_70%,transparent)]",
              )}
            >
              <Download className="h-4 w-4" strokeWidth={1.8} />
              Download CV
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative border-y border-border bg-surface/40 py-4 backdrop-blur-sm"
      >
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-3 pr-3">
            {[...stack, ...stack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap rounded-md border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  )
}
