import { Section } from '@/components/ui/section'
import Link from 'next/link'

export default function PartnersPage() {
    const partners = [
        {
            id: 1,
            name: 'Amazon Web Services',
            category: 'Cloud Infrastructure',
            description: 'AWS Advanced Consulting Partner helping enterprises migrate and optimize their cloud workloads.',
            tier: 'Strategic'
        },
        {
            id: 2,
            name: 'Microsoft Azure',
            category: 'Cloud Platform',
            description: 'Microsoft Gold Partner specializing in Azure cloud solutions and enterprise migrations.',
            tier: 'Strategic'
        },
        {
            id: 3,
            name: 'Google Cloud Platform',
            category: 'Cloud & AI',
            description: 'GCP Partner providing ML/AI solutions and data analytics infrastructure.',
            tier: 'Strategic'
        },
        {
            id: 4,
            name: 'Stripe',
            category: 'Payments',
            description: 'Verified Stripe partner for payment integration and fintech solutions.',
            tier: 'Technology'
        },
        {
            id: 5,
            name: 'MongoDB',
            category: 'Database',
            description: 'Certified MongoDB partner for NoSQL database solutions and data management.',
            tier: 'Technology'
        },
        {
            id: 6,
            name: 'Vercel',
            category: 'Frontend Cloud',
            description: 'Vercel integration partner for modern web deployment and hosting solutions.',
            tier: 'Technology'
        },
        {
            id: 7,
            name: 'Sanity.io',
            category: 'Headless CMS',
            description: 'Sanity partner delivering content management solutions for digital experiences.',
            tier: 'Technology'
        },
        {
            id: 8,
            name: 'Auth0',
            category: 'Identity & Security',
            description: 'Auth0 partner providing authentication and authorization solutions.',
            tier: 'Technology'
        },
    ]

    const partnerBenefits = [
        {
            title: 'Co-Marketing Opportunities',
            description: 'Feature in joint case studies, webinars, and marketing campaigns to reach new audiences.'
        },
        {
            title: 'Technical Training',
            description: 'Access to our technical team for training sessions and knowledge sharing.'
        },
        {
            title: 'Referral Program',
            description: 'Earn commissions by referring clients who need our services.'
        },
        {
            title: 'Early Access',
            description: 'Beta access to new products and features before public release.'
        },
    ]

    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Our Partners</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Collaborating with industry leaders to deliver exceptional solutions.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {partners.map((partner) => (
                        <div key={partner.id} className="glass-panel p-6 rounded-xl border-0 hover:border-primary/30 transition-all duration-300 hover:glow-hover group">
                            <div className="mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs ${partner.tier === 'Strategic'
                                        ? 'bg-accent/20 text-accent border border-accent/30'
                                        : 'bg-primary/10 text-primary border border-primary/20'
                                    }`}>
                                    {partner.tier} Partner
                                </span>
                            </div>
                            <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {partner.name}
                            </h3>
                            <p className="text-sm text-accent mb-3">{partner.category}</p>
                            <p className="text-sm text-muted-foreground">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="glass-panel p-12 rounded-2xl text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-foreground mb-4">Become a Partner</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join our partner ecosystem and grow your business with cutting-edge technology solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {partnerBenefits.map((benefit, index) => (
                            <div key={index} className="text-left">
                                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/50"
                    >
                        Apply to Partner Program
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground">
                        Interested in learning more? <Link href="/contact" className="text-accent hover:text-primary transition-colors font-semibold">Contact our partnerships team</Link>.
                    </p>
                </div>
            </Section>
        </div>
    )
}
