import Link from "next/link"
import { ArrowRight, Linkedin, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import ProjectCardLive from "@/components/project-card-live"
import AnimatedHeading from "@/components/animated-heading"
import { TextRevealCard } from "@/components/text-reveal-card"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Era of AI — AI Automation Agency",
      subtitle: "End-to-end AI solutions & automation",
      imageSrc: "/images/eraofaicover.png",
      websiteUrl: "https://eraofai.club",
      tags: ["AI", "Automation", "SaaS"],
      href: "https://eraofai.club",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "ProteinPick — Nutrition & Fitness",
      subtitle: "Personalized protein recommendations",
      imageSrc: "/images/project-2.webp",
      websiteUrl: "https://proteinpick.online",
      tags: ["React", "Nutrition", "Health"],
      href: "https://proteinpick.online",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Success Peak — Educational App",
      subtitle: "UX/UI Design Case Study",
      imageSrc: "/images/project-3.webp",
      websiteUrl: "https://www.behance.net/embed/project/124286979?ilo0=1",
      tags: ["UX/UI", "Mobile", "Education"],
      href: "https://www.behance.net/gallery/124286979/Success-Peak-Educational-App-Case-Study?tracking_source=search_projects|uxanirudh&l=0",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "HealthTrack — Fitness app",
      subtitle: "Mobile-first health tracking",
      imageSrc: "/images/project-4.webp",
      tags: ["React Native", "Firebase", "Health"],
      href: "#project-4",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Portfolio — Personal website",
      subtitle: "Modern portfolio showcase",
      imageSrc: "/images/project-5.webp",
      tags: ["Next.js", "Tailwind", "Animation"],
      href: "#project-5",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "AI ChatBot — Smart assistant",
      subtitle: "Conversational AI interface",
      imageSrc: "/images/project-6.webp",
      tags: ["Python", "OpenAI", "FastAPI"],
      href: "#project-6",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-2xl font-extrabold tracking-tight">Anirudh</div>
                    <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-white/50">
                    AI/ML Engineer • IIT Kanpur
                  </div>
                </div>

                {/* Headline with text reveal effect */}
                <div className="mb-6">
                  <TextRevealCard
                    text="I Build Products with the time i have after my 9-5"
                    revealText="I Build Products with the time i have after my 9-5"
                    className="w-full max-w-2xl bg-transparent border-none p-0"
                  />
                </div>

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  While building products, I approach problem-solving with a user-first mindset, knowing that even micro-level decisions can significantly impact system performance and user experience at scale.                 </p>

                {/* Social Media Links */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="https://www.linkedin.com/in/anirudhpy19/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/anirudh.xxv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://x.com/aiznikks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:anirudhpy19@gmail.com">
                      Get in touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Technologies */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">TECHNOLOGIES I WORK WITH</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-lg font-bold text-white/40 sm:grid-cols-3">
                    <li>N8N</li>
                    <li>Langchain</li>
                    <li>Agentic Ai</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Python</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => {
              // Use live preview for Era of AI (index 0), ProteinPick (index 1), and Success Peak (index 2)
              if ((idx === 0 || idx === 1 || idx === 2) && p.websiteUrl) {
                return (
                  <ProjectCardLive
                    key={p.title}
                    title={p.title}
                    subtitle={p.subtitle}
                    imageSrc={p.imageSrc}
                    websiteUrl={p.websiteUrl}
                    tags={p.tags}
                    href={p.href}
                    priority={p.priority}
                    gradientFrom={p.gradientFrom}
                    gradientTo={p.gradientTo}
                    imageContainerClassName="lg:h-full"
                    containerClassName="lg:h-[calc(100svh-2rem)]"
                    revealDelay={idx * 0.06}
                  />
                )
              }

              return (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  subtitle={p.subtitle}
                  imageSrc={p.imageSrc}
                  tags={p.tags}
                  href={p.href}
                  priority={p.priority}
                  gradientFrom={p.gradientFrom}
                  gradientTo={p.gradientTo}
                  imageContainerClassName="lg:h-full"
                  containerClassName="lg:h-[calc(100svh-2rem)]"
                  revealDelay={idx * 0.06}
                />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
