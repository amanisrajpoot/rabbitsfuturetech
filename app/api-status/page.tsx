import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function ApiStatusPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground">System Status</h1>
                            <div className="flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                                <span className="text-sm font-semibold">All Systems Operational</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {['API Gateway', 'Database Clusters', 'CDN Performance', 'Authentication Services'].map((service) => (
                                <div key={service} className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10">
                                    <span className="font-semibold text-foreground">{service}</span>
                                    <div className="flex items-center text-green-500 text-sm">
                                        <CheckCircle2 className="h-5 w-5 mr-2" />
                                        Operational
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                            <div className="flex items-start">
                                <AlertCircle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">Scheduled Maintenance</h3>
                                    <p className="text-muted-foreground">
                                        We will be performing routine maintenance on our database clusters on Sunday, November 24th, from 2:00 AM to 4:00 AM UTC. Brief interruptions may occur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
