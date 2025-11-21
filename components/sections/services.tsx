import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'

async function getServices() {
    try {
        if (client.config().projectId === 'your-project-id') return []
        return await client.fetch(`*[_type == "service"] | order(order asc)`)
    } catch (e) {
        return []
    }
}

interface ServicesProps {
    limit?: number;
    showViewAll?: boolean;
    excludeIds?: string[];
}

export async function Services({ limit, showViewAll, excludeIds = [] }: ServicesProps) {
    const services = await getServices()

    // Fallback services if no data
    const allServices = services.length > 0 ? services : [
        {
            _id: '1',
            title: 'Full-Stack Development',
            description: 'End-to-end web application development using MERN, Next.js, and modern frameworks.',
            icon: 'Code2',
            className: 'md:col-span-2 md:row-span-2'
        },
        {
            _id: '2',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps using React Native and Flutter for iOS and Android.',
            icon: 'Smartphone',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            _id: '3',
            title: 'AI & Machine Learning',
            description: 'Custom AI models, predictive analytics, and intelligent automation solutions.',
            icon: 'Brain',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            _id: '4',
            title: 'Cloud & DevOps',
            description: 'Scalable infrastructure on AWS/Azure, CI/CD pipelines, and containerization.',
            icon: 'Cloud',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            _id: '5',
            title: 'Blockchain & Web3',
            description: 'Smart contract development, dApps, and decentralized finance solutions.',
            icon: 'Blocks',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            _id: '6',
            title: 'UI/UX Design',
            description: 'User-centric design, prototyping, and interface crafting for digital products.',
            icon: 'Palette',
            className: 'md:col-span-2 md:row-span-1'
        },
        {
            _id: '7',
            title: 'QA & Testing',
            description: 'Automated and manual testing to ensure bug-free and reliable software delivery.',
            icon: 'CheckCircle2',
            className: 'md:col-span-1 md:row-span-1'
        },
        {
            _id: '8',
            title: 'Staff Augmentation',
            description: 'Dedicated development teams to extend your in-house capabilities.',
            icon: 'Users',
            className: 'md:col-span-1 md:row-span-1'
        }
    ]

    const filteredServices = excludeIds.length > 0
        ? allServices.filter((service: any) => !excludeIds.includes(service._id))
        : allServices;

    const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

    return (
        <Section id="services" className="bg-background relative overflow-hidden py-24 sm:py-32">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                    Our <span className="text-gradient">Exclusive Services</span>
                </h2>
                <p className="text-lg leading-8 text-muted-foreground">
                    Tailored solutions to drive your business forward into the future.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
                {displayServices.map((service: any, index: number) => {
                    // @ts-ignore
                    const IconComponent = Icons[service.icon] || Icons.Box
                    // Assign classes based on index for fallback data if className not present
                    const gridClass = service.className || (index === 0 ? 'md:col-span-2 md:row-span-2' : index === 5 ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1')

                    return (
                        <Card key={service._id} className={cn(
                            "group relative flex flex-col justify-between p-8 overflow-hidden border-0 glass-panel hover:border-primary/30 transition-all duration-500 hover:glow-hover",
                            gridClass
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="rounded-full bg-white/5 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 backdrop-blur-sm border border-white/10">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="font-display text-xl font-bold leading-7 text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {showViewAll && (
                <div className="mt-12 flex justify-center">
                    <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-white backdrop-blur-sm bg-transparent">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            )}
        </Section>
    )
}
