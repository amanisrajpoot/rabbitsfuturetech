import { jobs } from '@/lib/jobs-data'
import { Section } from '@/components/ui/section'
import { MapPin, Briefcase, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function JobsPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="bg-primary/5 py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl">Join Our Team</h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Build the future with us. Explore open positions and grow your career.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="glass-panel p-8 rounded-xl border-0 hover:border-primary/30 transition-all duration-300 hover:glow-hover group">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4" />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="h-4 w-4" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-accent text-sm whitespace-nowrap h-fit">
                                    {job.type}
                                </span>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                {job.description}
                            </p>
                            <Link
                                href={`/jobs/apply/${job.id}`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/50"
                            >
                                Apply Now
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center glass-panel p-8 rounded-xl">
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">Don't see a perfect fit?</h3>
                    <p className="text-muted-foreground mb-6">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold"
                    >
                        Send General Application
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </Section>
        </div>
    )
}
