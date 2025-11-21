import { PartnerApplicationForm } from '@/components/forms/partner-application-form'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PartnerApplicationPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-12 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <Link
                            href="/partners"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Partners
                        </Link>

                        <div className="mb-12 text-center">
                            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-4">
                                Become a Partner
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Join our ecosystem and build the future of technology with us.
                            </p>
                        </div>

                        <PartnerApplicationForm />
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
