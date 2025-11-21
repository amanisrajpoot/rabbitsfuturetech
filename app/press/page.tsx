import { Section } from '@/components/ui/section'
import { Mail, Phone, Download } from 'lucide-react'
import Link from 'next/link'

export default function PressPage() {
    const pressReleases = [
        {
            id: 1,
            title: 'Rabbits Futuretech Secures $15M Series A Funding',
            date: 'November 18, 2024',
            excerpt: 'Leading venture capital firms invest in our vision to democratize enterprise software development through AI-powered solutions.',
        },
        {
            id: 2,
            title: 'Partnership with Fortune 500 Companies Announced',
            date: 'October 25, 2024',
            excerpt: 'Rabbits Futuretech partners with major enterprises to deliver cutting-edge cloud transformation solutions across multiple industries.',
        },
        {
            id: 3,
            title: 'Launching AI-Powered Code Assistant',
            date: 'September 12, 2024',
            excerpt: 'Our new AI assistant helps developers write better code faster, reducing development time by up to 40% in beta testing.',
        },
    ]

    const awards = [
        {
            title: 'Best Emerging Tech Company 2024',
            organization: 'TechCrunch Disrupt',
            year: '2024'
        },
        {
            title: 'Top 10 Cloud Services Provider',
            organization: 'Cloud Computing Magazine',
            year: '2024'
        },
        {
            title: 'Innovation Excellence Award',
            organization: 'India Tech Summit',
            year: '2023'
        },
    ]

    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Press Room</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Latest news, press releases, and media resources.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-display font-bold text-foreground mb-6">Latest Press Releases</h2>
                        <div className="space-y-6">
                            {pressReleases.map((release) => (
                                <article key={release.id} className="glass-panel p-6 rounded-xl border-0 hover:border-primary/30 transition-all duration-300 hover:glow-hover group">
                                    <p className="text-sm text-accent mb-2">{release.date}</p>
                                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {release.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {release.excerpt}
                                    </p>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold text-sm"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download Full Release (PDF)
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="glass-panel p-6 rounded-xl">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4">Media Contact</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Press Inquiries</p>
                                    <a href="mailto:press@rabbitsfuturetech.com" className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
                                        <Mail className="h-4 w-4" />
                                        press@rabbitsfuturetech.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                                    <a href="tel:+1-555-123-4567" className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
                                        <Phone className="h-4 w-4" />
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-xl">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4">Media Kit</h2>
                            <p className="text-muted-foreground mb-4 text-sm">
                                Download our brand assets, logos, and company information.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-accent hover:bg-primary/20 transition-all text-sm"
                            >
                                <Download className="h-4 w-4" />
                                Download Media Kit
                            </Link>
                        </div>

                        <div className="glass-panel p-6 rounded-xl">
                            <h2 className="text-xl font-display font-bold text-foreground mb-4">Awards & Recognition</h2>
                            <div className="space-y-4">
                                {awards.map((award, index) => (
                                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                                        <p className="font-semibold text-foreground">{award.title}</p>
                                        <p className="text-sm text-muted-foreground">{award.organization}</p>
                                        <p className="text-xs text-accent">{award.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
