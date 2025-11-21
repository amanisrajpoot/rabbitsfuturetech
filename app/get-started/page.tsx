'use client'

import { useState, useActionState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { FadeIn, FadeInStagger } from '@/components/ui/fade-in'
import { Rocket, Building2, ShoppingBag, Code2, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { submitProjectInquiry } from '@/app/actions/project-inquiry'

type State = {
    success: boolean
    message?: string
    errors?: Record<string, string[] | undefined>
    mailto?: string
}

const initialState: State = {
    success: false,
    message: '',
    errors: {}
}

function ProjectInquiryForm({ selectedType }: { selectedType: string }) {
    const [state, action, isPending] = useActionState(submitProjectInquiry, initialState)

    useEffect(() => {
        if (state.success && state.mailto) {
            window.location.href = state.mailto
        }
    }, [state.success, state.mailto])

    if (state.success) {
        return (
            <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <CheckCircle2 className="h-8 w-8" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Inquiry Sent!</h3>
                <p className="text-muted-foreground mb-6">
                    {state.message}
                </p>
                <Button asChild variant="outline" onClick={() => window.location.reload()}>
                    <button>Start Another Inquiry</button>
                </Button>
            </div>
        )
    }

    return (
        <form action={action} className="space-y-6 text-left">
            <input type="hidden" name="projectType" value={selectedType} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Your Name"
                    />
                    {state.errors?.name && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.name[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="you@company.com"
                    />
                    {state.errors?.email && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.email[0]}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">Company (Optional)</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Your Company Ltd."
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-foreground">Project Details</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Tell us about your goals, timeline, and budget..."
                    defaultValue={`I'm interested in ${selectedType} solutions...`}
                />
                {state.errors?.description && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {state.errors.description[0]}
                    </p>
                )}
            </div>

            <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-white">
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Inquiry...
                    </>
                ) : (
                    'Send Inquiry'
                )}
            </Button>
        </form>
    )
}

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
                            className="mt-16 mx-auto max-w-2xl"
                        >
                            <div className="glass-panel p-8 rounded-3xl border-0">
                                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                                    Start Your {businessTypes.find(t => t.id === selectedType)?.title} Journey
                                </h3>
                                <p className="text-muted-foreground mb-8 text-center">
                                    Tell us a bit about your project and we'll get back to you with a tailored plan.
                                </p>

                                <ProjectInquiryForm selectedType={selectedType} />
                            </div>
                        </motion.div>
                    )}
                </div>
            </Section>
        </div>
    )
}
