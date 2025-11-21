export interface Guide {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
}

export const guides: Guide[] = [
    {
        id: 1,
        title: 'Choosing the Right Tech Stack for Your Startup',
        slug: 'choosing-tech-stack-startup',
        excerpt: 'A comprehensive guide to selecting the technologies that will power your product, balancing speed, scalability, and cost.',
        content: `
            <p>Choosing a tech stack is one of the most critical decisions a startup founder makes. It impacts not just your initial development speed, but your ability to scale, hire, and pivot later on.</p>
            
            <h2>The Core Components</h2>
            <p>A typical modern web stack consists of:</p>
            <ul>
                <li><strong>Frontend:</strong> React, Vue, or Angular? For most startups, React (specifically Next.js) offers the best balance of ecosystem, performance, and developer availability.</li>
                <li><strong>Backend:</strong> Node.js, Python, or Go? Node.js allows for full-stack JavaScript, which simplifies hiring. Python is great for AI/ML heavy apps.</li>
                <li><strong>Database:</strong> SQL (PostgreSQL) vs NoSQL (MongoDB). Start with SQL unless you have a specific reason not to. It enforces structure that pays off as you grow.</li>
            </ul>

            <h2>Factors to Consider</h2>
            <p><strong>1. Time to Market:</strong> Choose tools your team knows. Learning a new "trendy" language will slow you down.</p>
            <p><strong>2. Ecosystem:</strong> A large community means more libraries, tutorials, and hireable developers.</p>
            <p><strong>3. Scalability:</strong> Don't over-optimize for millions of users on day one, but don't pick a stack that hits a hard ceiling.</p>

            <h2>Our Recommendation</h2>
            <p>For 2024, the "T3 Stack" or similar variations (Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL) is the gold standard for shipping fast and scaling well.</p>
        `,
        category: 'Startup Strategy',
        readTime: '10 min read'
    },
    {
        id: 2,
        title: 'Migrating Legacy Systems to the Cloud',
        slug: 'migrating-legacy-systems-cloud',
        excerpt: 'Step-by-step strategies for moving on-premise applications to the cloud without disrupting business operations.',
        content: `
            <p>Legacy modernization is a daunting but necessary task. Moving to the cloud unlocks agility, cost savings, and innovation potential.</p>

            <h2>The 6 Rs of Migration</h2>
            <p>AWS defines 6 strategies for migration:</p>
            <ol>
                <li><strong>Rehost (Lift and Shift):</strong> Moving apps as-is. Fast, but doesn't leverage cloud-native features.</li>
                <li><strong>Replatform:</strong> Making minor optimizations (e.g., moving to a managed database) without changing core code.</li>
                <li><strong>Refactor:</strong> Re-architecting the application (e.g., to microservices) to be cloud-native. High effort, high reward.</li>
                <li><strong>Repurchase:</strong> Moving to a SaaS product.</li>
                <li><strong>Retire:</strong> Turning off unneeded apps.</li>
                <li><strong>Retain:</strong> Doing nothing for now.</li>
            </ol>

            <h2>Planning Your Migration</h2>
            <p>Start with a thorough assessment of your portfolio. Identify low-hanging fruit—apps that are low risk but high value to move. Create a roadmap and communicate clearly with stakeholders.</p>
        `,
        category: 'Cloud Architecture',
        readTime: '15 min read'
    },
    {
        id: 3,
        title: 'Securing Your Web Application: Best Practices',
        slug: 'securing-web-application-best-practices',
        excerpt: 'Essential security measures every developer should implement to protect user data and prevent common vulnerabilities.',
        content: `
            <p>Security cannot be an afterthought. In an era of increasing cyber threats, building secure software is a professional responsibility.</p>

            <h2>OWASP Top 10</h2>
            <p>Familiarize yourself with the OWASP Top 10 vulnerabilities, including Injection, Broken Authentication, and Sensitive Data Exposure.</p>

            <h2>Key Defenses</h2>
            <ul>
                <li><strong>Input Validation:</strong> Never trust user input. Sanitize and validate everything.</li>
                <li><strong>Authentication:</strong> Use established protocols like OAuth 2.0. Don't roll your own crypto.</li>
                <li><strong>HTTPS Everywhere:</strong> Encrypt data in transit.</li>
                <li><strong>Dependency Management:</strong> Regularly scan your libraries for known vulnerabilities (e.g., using npm audit).</li>
            </ul>

            <h2>Shift Left</h2>
            <p>Integrate security into your CI/CD pipeline. Automated security testing (SAST/DAST) catches issues early when they are cheaper to fix.</p>
        `,
        category: 'Security',
        readTime: '12 min read'
    }
];

export function getGuideBySlug(slug: string): Guide | undefined {
    return guides.find(guide => guide.slug === slug);
}
