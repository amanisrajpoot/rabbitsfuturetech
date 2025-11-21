export interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
}

export const jobs: Job[] = [
    {
        id: 1,
        title: 'Senior Full-Stack Developer',
        department: 'Engineering',
        location: 'Remote (US/India)',
        type: 'Full-time',
        salary: '$80k - $120k',
        description: 'We\'re looking for an experienced full-stack developer to join our core engineering team. You\'ll work on building scalable web applications using Next.js, Node.js, and modern cloud technologies.'
    },
    {
        id: 2,
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Hybrid - Bangalore',
        type: 'Full-time',
        salary: '$70k - $100k',
        description: 'Join our DevOps team to manage and optimize our cloud infrastructure. Experience with Kubernetes, AWS, and CI/CD pipelines is essential.'
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        salary: '$60k - $90k',
        description: 'Create beautiful, user-centric designs for web and mobile applications. Strong portfolio with experience in Figma and modern design systems required.'
    },
    {
        id: 4,
        title: 'Machine Learning Engineer',
        department: 'AI Research',
        location: 'Remote (Global)',
        type: 'Full-time',
        salary: '$90k - $140k',
        description: 'Build and deploy ML models for production. Experience with Python, TensorFlow/PyTorch, and cloud ML services is a must.'
    },
    {
        id: 5,
        title: 'Technical Project Manager',
        department: 'Operations',
        location: 'Hybrid - Pune',
        type: 'Full-time',
        salary: '$65k - $95k',
        description: 'Lead cross-functional teams to deliver complex software projects. Strong technical background and Agile/Scrum certification preferred.'
    },
    {
        id: 6,
        title: 'QA Automation Engineer',
        department: 'Quality Assurance',
        location: 'Remote',
        type: 'Full-time',
        salary: '$55k - $85k',
        description: 'Develop and maintain automated testing frameworks. Experience with Selenium, Cypress, and API testing tools required.'
    }
];

export function getJobById(id: number): Job | undefined {
    return jobs.find(job => job.id === id);
}
