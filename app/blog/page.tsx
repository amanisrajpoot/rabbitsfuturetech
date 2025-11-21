import { Section } from '@/components/ui/section'
import { Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Tech Blog</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Insights, tutorials, and industry trends from our engineering team.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                            <article className="glass-panel p-6 rounded-xl border-0 hover:border-primary/30 transition-all duration-300 hover:glow-hover h-full flex flex-col">
                                <div className="flex items-center gap-2 text-sm text-accent mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                        {post.category}
                                    </span>
                                    <span className="text-muted-foreground">{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-white/10 pt-4 mt-auto">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-muted-foreground">
                        Want to contribute? <Link href="/contact" className="text-accent hover:text-primary transition-colors">Contact us</Link> to share your insights.
                    </p>
                </div>
            </Section>
        </div>
    )
}
