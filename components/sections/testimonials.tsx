import { Section } from '@/components/ui/section'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

async function getTestimonials() {
    try {
        if (client.config().projectId === 'your-project-id') return []
        return await client.fetch(`*[_type == "testimonial"]`)
    } catch (e) {
        return []
    }
}

export async function Testimonials() {
    const testimonials = await getTestimonials()

    if (!testimonials || testimonials.length === 0) return null

    return (
        <Section className="bg-background">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Clients Say About Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial: any) => (
                    <div key={testimonial._id} className="flex flex-col justify-between bg-muted/30 p-8 rounded-2xl">
                        <blockquote className="text-lg leading-8 text-foreground">
                            "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6 flex items-center gap-x-4">
                            {testimonial.image && (
                                <img
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                    src={urlForImage(testimonial.image).url()}
                                    alt={testimonial.clientName}
                                />
                            )}
                            <div>
                                <div className="font-semibold text-foreground">{testimonial.clientName}</div>
                                <div className="text-sm leading-6 text-muted-foreground">{testimonial.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
