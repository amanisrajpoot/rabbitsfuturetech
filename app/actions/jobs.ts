'use server'

import { z } from 'zod'

import { generateMailtoLink, formatJobApplicationBody } from '@/lib/mailto'
import { getJobById } from '@/lib/jobs-data'

const schema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    resumeLink: z.string().url('Please provide a valid URL (e.g. LinkedIn or Portfolio)'),
    coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
    jobId: z.coerce.number(),
})

export async function submitJobApplication(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        resumeLink: formData.get('resumeLink'),
        coverLetter: formData.get('coverLetter'),
        jobId: formData.get('jobId'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { fullName, email, phone, resumeLink, coverLetter, jobId } = validatedFields.data
    const job = getJobById(jobId)
    const jobTitle = job ? job.title : `Job ID: ${jobId}`

    const body = formatJobApplicationBody({ fullName, email, phone, resumeLink, coverLetter, jobTitle })
    const mailtoLink = generateMailtoLink('info@rabbitsfuturetech.com', `Job Application: ${jobTitle}`, body)

    return {
        success: true,
        message: 'Opening your email client...',
        mailto: mailtoLink
    }
}
