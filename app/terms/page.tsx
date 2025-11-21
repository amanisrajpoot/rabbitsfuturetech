import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-8">Terms of Service</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>

                            <p className="lead text-xl text-foreground/90">
                                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Rabbits Future Tech website (the "Service") operated by Rabbits Future Tech ("us", "we", or "our").
                            </p>

                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
                            </p>

                            <h3>2. Use License</h3>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on Rabbits Future Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul>
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>Attempt to decompile or reverse engineer any software contained on Rabbits Future Tech's website;</li>
                                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                            <p>
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Rabbits Future Tech at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                            </p>

                            <h3>3. Intellectual Property</h3>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Rabbits Future Tech and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Rabbits Future Tech.
                            </p>

                            <h3>4. Disclaimer</h3>
                            <p>
                                The materials on Rabbits Future Tech's website are provided on an 'as is' basis. Rabbits Future Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>

                            <h3>5. Limitations</h3>
                            <p>
                                In no event shall Rabbits Future Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rabbits Future Tech's website, even if Rabbits Future Tech or a Rabbits Future Tech authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>

                            <h3>6. Links To Other Web Sites</h3>
                            <p>
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by Rabbits Future Tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Rabbits Future Tech shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                            </p>

                            <h3>7. Governing Law</h3>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>

                            <h3>8. Changes</h3>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>

                            <h3>9. Contact Us</h3>
                            <p>
                                If you have any questions about these Terms, please contact us at <a href="mailto:info@rabbitsfuturetech.com" className="text-primary hover:underline">info@rabbitsfuturetech.com</a>.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
