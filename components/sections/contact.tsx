import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
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
                                    123 Innovation Drive<br />
                                    Tech Valley, CA 94043
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
                                    <a href="tel:+15551234567" className="hover:text-primary">+1 (555) 123-4567</a>
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
                                    <a href="mailto:hello@rabbitsfuturetech.com" className="hover:text-primary">hello@rabbitsfuturetech.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-6 bg-card p-8 rounded-2xl shadow-sm border border-border/50">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">First name</label>
                            <div className="mt-2.5">
                                <Input type="text" name="first-name" id="first-name" autoComplete="given-name" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">Last name</label>
                            <div className="mt-2.5">
                                <Input type="text" name="last-name" id="last-name" autoComplete="family-name" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">Email</label>
                        <div className="mt-2.5" suppressHydrationWarning>
                            <Input type="email" name="email" id="email" autoComplete="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">Message</label>
                        <div className="mt-2.5">
                            <Textarea name="message" id="message" rows={4} />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        Send Message
                    </Button>
                </form>
            </div>
        </Section>
    )
}
