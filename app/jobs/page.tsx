import { Section } from '@/components/ui/section'
import { MapPin, Briefcase, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function JobsPage() {
    const jobs = [
        {
            id: 1,
            title: 'Senior Full-Stack Developer',
            department: 'Engineering',
            location: 'Remote (US/India)',
            type: 'Full-time',
            salary: '$80k - $120k',
            description: 'We\'re looking for an experienced full-stack developer to join our core engineering team. You\'ll work on building scalable web applications using Next.js, Node.js, and modern cloud technologies.'
        },
        {
            id: 2,
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Hybrid - Bangalore',
            type: 'Full-time',
            salary: '$70k - $100k',
            description: 'Join our DevOps team to manage and optimize our cloud infrastructure. Experience with Kubernetes, AWS, and CI/CD pipelines is essential.'
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            salary: '$60k - $90k',
            description: 'Create beautiful, user-centric designs for web and mobile applications. Strong portfolio with experience in Figma and modern design systems required.'
        },
        {
            id: 4,
            title: 'Machine Learning Engineer',
            department: 'AI Research',
            location: 'Remote (Global)',
            type: 'Full-time',
            salary: '$90k - $140k',
            description: 'Build and deploy ML models for production. Experience with Python, TensorFlow/PyTorch, and cloud ML services is a must.'
        },
        {
            id: 5,
            title: 'Technical Project Manager',
            department: 'Operations',
            location: 'Hybrid - Pune',
            type: 'Full-time',
            salary: '$65k - $95k',
            description: 'Lead cross-functional teams to deliver complex software projects. Strong technical background and Agile/Scrum certification preferred.'
        },
        {
            id: 6,
            title: 'QA Automation Engineer',
            department: 'Quality Assurance',
            location: 'Remote',
            type: 'Full-time',
            salary: '$55k - $85k',
            description: 'Develop and maintain automated testing frameworks. Experience with Selenium, Cypress, and API testing tools required.'
        }
    ]

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
                                href="/contact"
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
