import { getGuideBySlug, guides } from '@/lib/guides-data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { ArrowLeft, Clock, Tag, Compass } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const guide = getGuideBySlug(slug)

    if (!guide) {
        return {
            title: 'Guide Not Found',
        }
    }

    return {
        title: guide.title,
        description: guide.excerpt,
        openGraph: {
            title: guide.title,
            description: guide.excerpt,
            type: 'article',
        },
    }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const guide = getGuideBySlug(slug)

    if (!guide) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-20">
            <Section className="py-12 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <Link
                            href="/guides"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Guides
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center gap-2">
                                <Tag className="h-3 w-3" />
                                {guide.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {guide.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-8">
                            {guide.title}
                        </h1>

                        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-white/10">
                            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                <Compass className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <div className="font-semibold text-foreground">Rabbits Future Tech Team</div>
                                <div className="text-xs text-muted-foreground">Official Guide</div>
                            </div>
                        </div>

                        <div
                            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: guide.content }}
                        />
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
