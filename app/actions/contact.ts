'use server'

import { z } from 'zod'
import { generateMailtoLink, formatContactBody } from '@/lib/mailto'

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, phone, message } = validatedFields.data
    const body = formatContactBody({ name, email, phone, message })
    const mailtoLink = generateMailtoLink('info@rabbitsfuturetech.com', 'New Contact Form Submission', body)

    return {
        success: true,
        message: 'Opening your email client...',
        mailto: mailtoLink
    }
}
