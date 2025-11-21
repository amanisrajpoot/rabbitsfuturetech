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
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="h-40 rounded-lg bg-muted mb-6 w-full" />
                                    <h3 className="text-lg font-bold text-foreground mb-2">Guide Title {i}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">A short description of what this guide covers and who it is for.</p>
                                    <span className="text-accent text-sm font-semibold">Start Learning &rarr;</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
