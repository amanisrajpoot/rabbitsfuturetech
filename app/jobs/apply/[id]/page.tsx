import { getJobById, jobs } from '@/lib/jobs-data'
import { JobApplicationForm } from '@/components/forms/job-application-form'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { ArrowLeft, Briefcase, MapPin, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return jobs.map((job) => ({
        id: job.id.toString(),
    }))
}

export default async function JobApplicationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const job = getJobById(parseInt(id))

    if (!job) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-20">
            <Section className="py-12 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <Link
                            href="/jobs"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Jobs
                        </Link>

                        <div className="mb-12">
                            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-4">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
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
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs">
                                    {job.type}
                                </span>
                            </div>
                        </div>

                        <JobApplicationForm jobId={job.id} jobTitle={job.title} />
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
