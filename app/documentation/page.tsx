import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { Book } from 'lucide-react'

export default function DocumentationPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <FadeIn>
                        <div className="flex justify-center mb-8">
                            <div className="p-4 rounded-full bg-primary/10 text-primary">
                                <Book className="h-12 w-12" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-6">Documentation</h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            Comprehensive guides and API references to help you build with Rabbits Future Tech.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-foreground mb-4">Getting Started</h3>
                                <p className="text-muted-foreground mb-4">Learn the basics of integrating our solutions into your workflow.</p>
                                <span className="text-primary text-sm font-semibold">Read Guide &rarr;</span>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold text-foreground mb-4">API Reference</h3>
                                <p className="text-muted-foreground mb-4">Detailed documentation for all our public APIs and endpoints.</p>
                                <span className="text-primary text-sm font-semibold">View API Docs &rarr;</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
