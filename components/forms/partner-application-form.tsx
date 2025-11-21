'use client'

import { useActionState, useEffect } from 'react'
import { submitPartnerApplication } from '@/app/actions/partners'
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

export function PartnerApplicationForm() {
    const [state, action, isPending] = useActionState(submitPartnerApplication, initialState)

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
                    <a href="/partners">Back to Partners</a>
                </Button>
            </div>
        )
    }

    return (
        <form action={action} className="space-y-6 glass-panel p-8 rounded-xl">
            <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Partnership Application</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Acme Corp"
                    />
                    {state.errors?.companyName && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.companyName[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="contactName" className="text-sm font-medium text-foreground">Contact Person</label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="Jane Smith"
                    />
                    {state.errors?.contactName && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.contactName[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Business Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="jane@acme.com"
                    />
                    {state.errors?.email && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.email[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-foreground">Company Website</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                        placeholder="https://acme.com"
                    />
                    {state.errors?.website && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {state.errors.website[0]}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="partnershipType" className="text-sm font-medium text-foreground">Partnership Type</label>
                <select
                    id="partnershipType"
                    name="partnershipType"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground [&>option]:bg-background [&>option]:text-foreground"
                >
                    <option value="">Select a type...</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="technology">Technology Partner</option>
                    <option value="reseller">Reseller / Distributor</option>
                    <option value="other">Other</option>
                </select>
                {state.errors?.partnershipType && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {state.errors.partnershipType[0]}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Partnership Proposal</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Describe how you'd like to partner with us..."
                />
                {state.errors?.message && (
                    <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {state.errors.message[0]}
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
