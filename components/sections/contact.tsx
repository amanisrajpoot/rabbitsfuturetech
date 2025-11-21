'use client'

import { useActionState, useEffect } from 'react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'

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

export function Contact() {
    const [state, action, isPending] = useActionState(submitContactForm, initialState)

    useEffect(() => {
        if (state.success && state.mailto) {
            window.location.href = state.mailto
        }
    }, [state.success, state.mailto])

    return (
        <Section id="contact" className="py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Have a project in mind? Let's discuss how we can help you achieve your goals.
                    </p>

                    <div className="mt-10 space-y-8">
                        <div className="flex gap-x-4">
                            <div className="flex-none">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-foreground">Visit Us</h3>
                                <p className="mt-2 leading-7 text-muted-foreground">
                                    Shop no. - 1, Fortune 80 complex,<br />
                                    University Road, Udaipur, Rajasthan, India
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex-none">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-foreground">Call Us</h3>
                                <p className="mt-2 leading-7 text-muted-foreground">
                                    <a href="tel:+917300313898" className="hover:text-primary">+91-730-031-3898</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-4">
                            <div className="flex-none">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-foreground">Email Us</h3>
                                <p className="mt-2 leading-7 text-muted-foreground">
                                    <a href="mailto:info@rabbitsfuturetech.com" className="hover:text-primary">info@rabbitsfuturetech.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
                    {state.success ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="h-8 w-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground mb-8">
                                {state.message}
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => window.location.reload()}
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form action={action} className="space-y-6">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">Name</label>
                                    <div className="mt-2.5">
                                        <Input type="text" name="name" id="name" autoComplete="name" required />
                                    </div>
                                    {state.errors?.name && (
                                        <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">Phone</label>
                                    <div className="mt-2.5">
                                        <Input type="tel" name="phone" id="phone" autoComplete="tel" required />
                                    </div>
                                    {state.errors?.phone && (
                                        <p className="mt-1 text-sm text-red-500">{state.errors.phone[0]}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">Email</label>
                                <div className="mt-2.5">
                                    <Input type="email" name="email" id="email" autoComplete="email" required />
                                </div>
                                {state.errors?.email && (
                                    <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">Message</label>
                                <div className="mt-2.5">
                                    <Textarea name="message" id="message" rows={4} required />
                                </div>
                                {state.errors?.message && (
                                    <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Opening Email Client...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                            {state.message && !state.success && (
                                <p className="text-sm text-red-500 text-center">{state.message}</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </Section>
    )
}
