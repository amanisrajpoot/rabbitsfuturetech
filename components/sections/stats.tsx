import { Section } from '@/components/ui/section'

const stats = [
    { id: 1, name: 'Years of Innovation', value: '5+' },
    { id: 2, name: 'Projects Delivered', value: '500+' },
    { id: 3, name: 'Global Partners', value: '20+' },
    { id: 4, name: 'Team Experts', value: '50+' },
]

export function Stats() {
    return (
        <Section className="relative py-24 sm:py-32 overflow-hidden border-y border-white/5 bg-background/50 backdrop-blur-sm">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 group">
                            <dt className="text-base leading-7 text-muted-foreground group-hover:text-primary transition-colors duration-300">{stat.name}</dt>
                            <dd className="order-first text-5xl font-display font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    )
}
