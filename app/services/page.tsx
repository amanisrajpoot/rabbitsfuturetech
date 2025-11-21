import { Services } from '@/components/sections/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Explore our comprehensive range of IT services including Web Development, AI Solutions, Cloud Architecture, and more.',
}

export default async function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <Services />
        </div>
    )
}
