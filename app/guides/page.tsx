import { guides } from '@/lib/guides-data'
import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { Compass } from 'lucide-react'

export default function GuidesPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <FadeIn>
                        <div className="flex justify-center mb-8">
                            <div className="p-4 rounded-full bg-accent/10 text-accent">
                                <Compass className="h-12 w-12" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-6">Guides & Tutorials</h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            Step-by-step tutorials to help you master our platform.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {guides.map((guide) => (
                                <Link key={guide.id} href={`/guides/${guide.slug}`} className="block group h-full">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full flex flex-col">
                                        <div className="h-40 rounded-lg bg-muted mb-6 w-full flex items-center justify-center">
                                            <Compass className="h-10 w-10 text-muted-foreground/50" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                                                {guide.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {guide.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                                            {guide.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                            <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                                            <span className="text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">Start Learning &rarr;</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
