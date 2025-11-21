'use client'

import { useActionState, useEffect } from 'react'
import { submitJobApplication } from '@/app/actions/jobs'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

type State = {
    success: boolean
    message?: string
    errors?: Record<string, string[] | undefined>
    mailto?: string
}

const initialState: State = {
    success: false,
    message: '',
    errors: {}
}

export function JobApplicationForm({ jobId, jobTitle }: { jobId: number, jobTitle: string }) {
    const [state, action, isPending] = useActionState(submitJobApplication, initialState)

    useEffect(() => {
        if (state.success && state.mailto) {
            window.location.href = state.mailto
        }
    }, [state.success, state.mailto])

    if (state.success) {
        return (
            <div className="glass-panel p-8 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Application Received!</h3>
                <p className="text-muted-foreground mb-6">
                    {state.message}
                </p>
                <Button asChild variant="outline">
                    <a href="/jobs">Back to Jobs</a>
                </Button>
            </div>
        )
    }

    return (
        <form action={action} className="space-y-6 glass-panel p-8 rounded-xl">
            <input type="hidden" name="jobId" value={jobId} />

            <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Apply for {jobTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="John Doe"
                    />
                    {state.errors?.fullName && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.fullName[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="john@example.com"
                    />
                    {state.errors?.email && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.email[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="+1 (555) 000-0000"
                    />
                    {state.errors?.phone && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.phone[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="resumeLink" className="text-sm font-medium text-foreground">Resume / Portfolio Link</label>
                    <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="https://linkedin.com/in/johndoe"
                    />
                    {state.errors?.resumeLink && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.resumeLink[0]}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium text-foreground">Cover Letter</label>
                <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Tell us why you're a great fit for this role..."
                />
                {state.errors?.coverLetter && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {state.errors.coverLetter[0]}
                    </p>
                )}
            </div>

            <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-white">
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Application...
                    </>
                ) : (
                    'Submit Application'
                )}
            </Button>
        </form>
    )
}
