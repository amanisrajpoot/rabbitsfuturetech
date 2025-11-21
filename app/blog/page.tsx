import { Section } from '@/components/ui/section'
import { Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'The Future of AI in Enterprise Software Development',
            excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy enterprise applications, from automated testing to intelligent code generation.',
            author: 'Sarah Chen',
            date: 'Nov 15, 2024',
            category: 'AI & ML',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Building Scalable Microservices with Kubernetes',
            excerpt: 'A comprehensive guide to deploying cloud-native applications using Kubernetes, including best practices for container orchestration and service mesh implementation.',
            author: 'Michael Torres',
            date: 'Nov 10, 2024',
            category: 'Cloud & DevOps',
            readTime: '8 min read'
        },
        {
            id: 3,
            title: 'Blockchain Beyond Cryptocurrency: Real-World Use Cases',
            excerpt: 'Discover how blockchain technology is being applied in supply chain management, healthcare, and digital identity verification beyond financial transactions.',
            author: 'Priya Sharma',
            date: 'Nov 5, 2024',
            category: 'Blockchain',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Mobile-First Design: Best Practices for 2024',
            excerpt: 'Learn the latest trends in mobile UX design, from progressive web apps to gesture-based navigation, ensuring your app stands out in a crowded marketplace.',
            author: 'David Kim',
            date: 'Oct 28, 2024',
            category: 'UI/UX',
            readTime: '4 min read'
        },
        {
            id: 5,
            title: 'Securing Your API: Authentication and Authorization Strategies',
            excerpt: 'Essential security practices for modern APIs, including OAuth 2.0, JWT tokens, and rate limiting to protect your applications from common vulnerabilities.',
            author: 'Alex Rodriguez',
            date: 'Oct 20, 2024',
            category: 'Security',
            readTime: '7 min read'
        },
        {
            id: 6,
            title: 'The Rise of Low-Code Platforms in Enterprise Development',
            excerpt: 'How low-code and no-code platforms are democratizing software development while maintaining enterprise-grade security and scalability.',
            author: 'Emily Watson',
            date: 'Oct 12, 2024',
            category: 'Development',
            readTime: '5 min read'
        }
    ]

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
                    {posts.map((post) => (
                        <article key={post.id} className="glass-panel p-6 rounded-xl border-0 hover:border-primary/30 transition-all duration-300 hover:glow-hover group">
                            <div className="flex items-center gap-2 text-sm text-accent mb-4">
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                    {post.category}
                                </span>
                                <span className="text-muted-foreground">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-white/10 pt-4">
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
