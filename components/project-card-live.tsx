'use client'

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"
import WebsitePreview from "@/components/website-preview"

type Props = {
    title?: string
    subtitle?: string
    imageSrc?: string
    websiteUrl?: string
    tags?: string[]
    href?: string
    priority?: boolean
    gradientFrom?: string
    gradientTo?: string
    imageContainerClassName?: string
    containerClassName?: string
    revealDelay?: number
}

export default function ProjectCardLive({
    title = "Project title",
    subtitle = "Project subtitle",
    imageSrc = "/placeholder.svg?height=720&width=1280",
    websiteUrl,
    tags = ["Design", "Web"],
    href = "#",
    priority = false,
    gradientFrom = "#0f172a",
    gradientTo = "#6d28d9",
    imageContainerClassName,
    containerClassName,
    revealDelay = 0,
}: Props) {
    return (
        <article className={cn("group relative", containerClassName)}>
            <RevealOnView
                delay={revealDelay}
                className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full"
                style={{
                    backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                }}
            >
                <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full">
                    {/* Content - Website Preview or Image */}
                    <div className={cn("relative w-full h-full", imageContainerClassName)}>
                        {websiteUrl ? (
                            <WebsitePreview
                                url={websiteUrl}
                                title={title}
                                className="rounded-[1.35rem]"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <div className="text-center text-white/50">
                                    <div className="text-lg font-semibold">{title}</div>
                                    <div className="text-sm">{subtitle}</div>
                                </div>
                            </div>
                        )}

                        {/* Dark overlay for better accessibility */}
                        <div className="pointer-events-none absolute inset-0 bg-black/20" />
                        {/* Enhanced vignette */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Top-left tags */}
                    <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2 z-20">
                        {tags.map((t) => (
                            <Badge
                                key={t}
                                variant="secondary"
                                className="pointer-events-auto bg-black/50 text-white border-white/20 backdrop-blur-sm"
                            >
                                {t}
                            </Badge>
                        ))}
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-20">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold sm:text-xl text-white">{title}</h3>
                                <p className="text-sm text-white/70">{subtitle}</p>
                            </div>
                            <Link
                                href={href}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20 self-start sm:self-auto"
                                aria-label={`Visit: ${title}`}
                            >
                                Visit here
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </RevealOnView>
        </article>
    )
}
