import { Section } from '@/components/ui/section'
import { CheckCircle2, Zap, ShieldCheck, Users } from 'lucide-react'

const features = [
    {
        name: 'Technical Excellence',
        description: 'We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.',
        icon: Zap,
    },
    {
        name: 'Security First',
        description: 'Security is ingrained in our DNA. We ensure your data and infrastructure are protected at all times.',
        icon: ShieldCheck,
    },
    {
        name: 'Client-Centric Approach',
        description: 'Your success is our priority. We work closely with you to understand your needs and deliver value.',
        icon: Users,
    },
    {
        name: 'Proven Track Record',
        description: 'With over a decade of experience, we have a history of delivering successful projects across industries.',
        icon: CheckCircle2,
    },
]

export function WhyUs() {
    return (
        <Section className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-display font-bold tracking-tight text-foreground sm:text-5xl">
                        Driving Success Through <span className="text-gradient">Digital Expertise</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Turning Your Ideas into Business Results. We combine technical expertise with business acumen to deliver solutions that matter.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16 group">
                                <dt className="text-xl font-bold leading-7 text-foreground">
                                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                                        <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Section>
    )
}
