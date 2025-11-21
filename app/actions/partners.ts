'use server'

import { z } from 'zod'

import { generateMailtoLink, formatPartnerApplicationBody } from '@/lib/mailto'

const schema = z.object({
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    website: z.string().url('Please provide a valid URL (e.g. https://example.com)'),
    partnershipType: z.enum(['strategic', 'technology', 'reseller', 'other']),
    message: z.string().min(20, 'Message must be at least 20 characters'),
})

export async function submitPartnerApplication(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        companyName: formData.get('companyName'),
        contactName: formData.get('contactName'),
        email: formData.get('email'),
        website: formData.get('website'),
        partnershipType: formData.get('partnershipType'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { companyName, contactName, email, website, partnershipType, message } = validatedFields.data
    const body = formatPartnerApplicationBody({ companyName, contactName, email, website, partnershipType, message })
    const mailtoLink = generateMailtoLink('info@rabbitsfuturetech.com', `Partnership Inquiry: ${companyName}`, body)

    return {
        success: true,
        message: 'Opening your email client...',
        mailto: mailtoLink
    }
}
