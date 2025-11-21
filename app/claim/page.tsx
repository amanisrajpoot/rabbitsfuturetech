import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ClaimPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-8">Submit a Claim</h1>
                        <p className="text-lg text-muted-foreground mb-12">
                            If you have encountered an issue with our services or believe you have a valid claim, please use the contact form below to get in touch with our legal team.
                        </p>
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            <Link href="/contact">Contact Legal Team</Link>
                        </Button>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
