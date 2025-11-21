import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-20">
            <Section className="py-24">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <h1 className="text-4xl font-display font-bold tracking-tight text-foreground mb-8">Privacy Policy</h1>
                        <div className="prose prose-invert max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>

                            <p className="lead text-xl text-foreground/90">
                                At Rabbits Future Tech ("we," "us," or "our"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>

                            <h3>1. Information We Collect</h3>
                            <p>We collect information that you provide directly to us when you:</p>
                            <ul>
                                <li>Fill out forms on our website (such as contact forms or newsletter signups)</li>
                                <li>Request a quote or consultation</li>
                                <li>Apply for a job</li>
                                <li>Communicate with us via email or other channels</li>
                            </ul>
                            <p>The types of personal information we may collect include:</p>
                            <ul>
                                <li><strong>Contact Data:</strong> Name, email address, phone number, and company name.</li>
                                <li><strong>Project Data:</strong> Details about your project requirements, budget, and timeline.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data collected via cookies and analytics tools.</li>
                            </ul>

                            <h3>2. How We Use Your Information</h3>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Provide, operate, and maintain our website and services</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Communicate with you, including for customer service, updates, and marketing purposes</li>
                                <li>Process your job applications</li>
                                <li>Prevent fraud and ensure the security of our platform</li>
                            </ul>

                            <h3>3. Sharing Your Information</h3>
                            <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>
                            <p>We may disclose your information if required to do so by law or in the good-faith belief that such action is necessary to comply with state and federal laws or respond to a court order, judicial or other government subpoena, or warrant.</p>

                            <h3>4. Data Security</h3>
                            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                            <h3>5. Third-Party Websites</h3>
                            <p>The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.</p>

                            <h3>6. Your Data Rights</h3>
                            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
                            <ul>
                                <li>The right to access the personal data we hold about you</li>
                                <li>The right to request correction of inaccurate personal data</li>
                                <li>The right to request deletion of your personal data</li>
                                <li>The right to restrict or object to processing of your personal data</li>
                                <li>The right to data portability</li>
                            </ul>

                            <h3>7. Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.</p>

                            <h3>8. Contact Us</h3>
                            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                            <p>
                                <strong>Rabbits Future Tech</strong><br />
                                Email: <a href="mailto:info@rabbitsfuturetech.com" className="text-primary hover:underline">info@rabbitsfuturetech.com</a><br />
                                Address: Shop no. - 1, Fortune 80 complex, University Road, Udaipur, Rajasthan, India
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    )
}
