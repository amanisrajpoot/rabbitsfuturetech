'use server'

import { z } from 'zod'

import { generateMailtoLink, formatProjectInquiryBody } from '@/lib/mailto'

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    projectType: z.string(),
    description: z.string().min(20, 'Please provide more details about your project'),
})

export async function submitProjectInquiry(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        projectType: formData.get('projectType'),
        description: formData.get('description'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, company, projectType, description } = validatedFields.data
    const body = formatProjectInquiryBody({ name, email, company, projectType, description })
    const mailtoLink = generateMailtoLink('info@rabbitsfuturetech.com', `Project Inquiry: ${projectType}`, body)

    return {
        success: true,
        message: 'Opening your email client...',
        mailto: mailtoLink
    }
}
