export function generateMailtoLink(to: string, subject: string, body: string): string {
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function formatContactBody(data: { name: string; email: string; phone: string; message: string }) {
    return `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}`
}

export function formatJobApplicationBody(data: { fullName: string; email: string; phone: string; resumeLink: string; coverLetter: string; jobTitle: string }) {
    return `Application for: ${data.jobTitle}

Applicant Details:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Resume/Portfolio: ${data.resumeLink}

Cover Letter:
${data.coverLetter}`
}

export function formatPartnerApplicationBody(data: { companyName: string; contactName: string; email: string; website: string; partnershipType: string; message: string }) {
    return `Partnership Inquiry

Company: ${data.companyName}
Contact Person: ${data.contactName}
Email: ${data.email}
Website: ${data.website}
Partnership Type: ${data.partnershipType}

Proposal:
${data.message}`
}

export function formatProjectInquiryBody(data: { name: string; email: string; company?: string; projectType: string; description: string }) {
    return `Project Inquiry: ${data.projectType}

Client Details:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'N/A'}

Project Description:
${data.description}`
}
