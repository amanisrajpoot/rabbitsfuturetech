import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export function CTA() {
    return (
        <Section className="relative isolate overflow-hidden py-24 sm:py-32 bg-background">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
            <div className="absolute inset-0 -z-10 backdrop-blur-3xl" />

            {/* Floating Orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="mx-auto max-w-2xl text-center relative z-10 px-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Ready to <span className="text-gradient">Future-Proof</span> Your Business?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-8 text-muted-foreground">
                    Join the forward-thinking companies that are transforming their industries with our cutting-edge solutions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full">
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                    <Link href="/services" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                        View Services <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
