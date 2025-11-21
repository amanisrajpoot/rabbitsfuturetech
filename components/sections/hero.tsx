import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ArrowRight } from 'lucide-react'

async function getHeroData() {
    try {
        if (client.config().projectId === 'your-project-id') return null
        return await client.fetch(`*[_type == "hero"][0]`)
    } catch (e) {
        return null
    }
}

export async function Hero() {
    const data = await getHeroData()

    // Fallback content if no data in Sanity
    const heading = data?.heading || "Driving Success Through Digital Expertise"
    const subheading = data?.subheading || "Pioneering tomorrow's technology solutions with minimalist precision and innovative thinking."
    const ctaText = data?.ctaText || "Get Started"
    const ctaLink = data?.ctaLink || "/get-started"
    const bgImage = data?.backgroundImage ? urlForImage(data.backgroundImage).url() : null

    return (
        <div className="relative isolate overflow-hidden bg-background pt-14 min-h-[90vh] flex items-center justify-center">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px] animate-pulse delay-2000" />
                {bgImage && (
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                        <img src={bgImage} alt="Background" className="h-full w-full object-cover" />
                    </div>
                )}
            </div>

            <Section className="py-0">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:glow">
                            Announcing our next round of funding. <Link href="#" className="font-semibold text-accent"><span className="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight sm:text-7xl mb-8">
                        <span className="text-foreground">Driving Success Through </span>
                        <span className="text-gradient">Digital Expertise</span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg leading-8 text-muted-foreground max-w-2xl mx-auto px-4">
                        {subheading}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
                        <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full">
                            <Link href={ctaLink}>
                                {ctaText}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Link href="/services" className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                            Explore Services <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    )
}
