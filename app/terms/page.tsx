import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-8">Terms of Service</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                            <p>
                                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Rabbits Future Tech website.
                            </p>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                            <h2>2. Intellectual Property</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Rabbits Future Tech and its licensors.
                            </p>
                            <h2>3. Links To Other Web Sites</h2>
                            <p>
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by Rabbits Future Tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                            </p>
                            <h2>4. Termination</h2>
                            <p>
                                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                            <h2>5. Changes</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
