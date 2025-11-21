import { Section } from '@/components/ui/section'
import { WhyUs } from '@/components/sections/why-us'

export default async function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">About Us</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We are Rabbits Future Tech, your partner in digital transformation.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Who We Are</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            Rabbits Future Tech is a leading IT services provider dedicated to helping businesses navigate the digital landscape. We combine technical expertise with creative innovation to deliver solutions that drive real growth.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Our team of experts is passionate about technology and committed to your success. Whether you need a simple website or a complex enterprise application, we have the skills and experience to make it happen.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden bg-muted">
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <span className="text-muted-foreground">Team Image</span>
                        </div>
                    </div>
                </div>
            </Section>

            <WhyUs />
        </div>
    )
}
