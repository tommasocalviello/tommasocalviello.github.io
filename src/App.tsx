import { Hero } from "./components/Hero"
import { Timeline } from "./components/Timeline"
import { Projects } from "./components/Projects"
import { Research } from "./components/Research"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Research />
      </main>
      <Footer />
    </div>
  )
}
