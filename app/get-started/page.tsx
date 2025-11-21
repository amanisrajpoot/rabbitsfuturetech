'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { FadeIn, FadeInStagger } from '@/components/ui/fade-in'
import { Rocket, Building2, ShoppingBag, Code2, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const businessTypes = [
    {
        id: 'startup',
        title: 'Startup',
        icon: Rocket,
        description: 'I need to launch my MVP fast and scale.',
        features: ['Rapid Prototyping', 'Scalable Architecture', 'Growth Hacking'],
    },
    {
        id: 'enterprise',
        title: 'Enterprise',
        icon: Building2,
        description: 'I need digital transformation and security.',
        features: ['Legacy Modernization', 'Enterprise Security', 'Cloud Migration'],
    },
    {
        id: 'ecommerce',
        title: 'E-commerce',
        icon: ShoppingBag,
        description: 'I need to sell products online effectively.',
        features: ['Custom Storefronts', 'Payment Integration', 'Inventory Management'],
    },
    {
        id: 'saas',
        title: 'SaaS',
        icon: Code2,
        description: 'I need a robust software platform.',
        features: ['Multi-tenancy', 'Subscription Billing', 'API Development'],
    },
]

export default function GetStartedPage() {
    const [selectedType, setSelectedType] = useState<string | null>(null)

    return (
        <div className="min-h-screen pt-20 bg-background">
            <Section className="relative isolate overflow-hidden py-24 sm:py-32">
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.DEFAULT),transparent)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-white/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <FadeIn>
                            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">
                                Let's Build Your <span className="text-gradient">Future</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Select your business type to get a tailored path to success. We have the expertise to guide you every step of the way.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeInStagger>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {businessTypes.map((type) => (
                                <FadeIn key={type.id}>
                                    <div
                                        onClick={() => setSelectedType(type.id)}
                                        className={`relative flex flex-col p-8 h-full rounded-2xl border transition-all duration-300 cursor-pointer group hover:glow ${selectedType === type.id
                                                ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20'
                                                : 'bg-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg mb-6 transition-colors ${selectedType === type.id ? 'bg-primary text-white' : 'bg-white/10 text-primary group-hover:bg-primary group-hover:text-white'
                                            }`}>
                                            <type.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-6 flex-grow">{type.description}</p>
                                        <ul className="space-y-2 mb-8">
                                            {type.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-xs text-muted-foreground">
                                                    <CheckCircle2 className="h-3 w-3 text-accent mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`mt-auto flex items-center text-sm font-semibold ${selectedType === type.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                                            }`}>
                                            Select Path <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeInStagger>

                    {selectedType && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-16 mx-auto max-w-2xl text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Excellent Choice!
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                You've selected the <strong>{businessTypes.find(t => t.id === selectedType)?.title}</strong> path. We have specific strategies designed to accelerate your growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                                    <Link href={`/contact?type=${selectedType}`}>
                                        Start Your Project
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/10 hover:bg-white/5">
                                    <Link href="/services">
                                        Explore Services
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </Section>
        </div>
    )
}
