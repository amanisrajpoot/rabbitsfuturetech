import { Contact } from '@/components/sections/contact'
import { Section } from '@/components/ui/section'

export default async function ContactPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Contact Us</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We'd love to hear from you. Reach out to us for any inquiries.
                    </p>
                </div>
            </Section>
            <Contact />
        </div>
    )
}
