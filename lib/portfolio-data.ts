import { Bot, Cpu, type LucideIcon, Workflow } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface PortfolioProject {
  title: string;
  roleOrType: string;
  summary: string;
  highlights: string[];
  stack: string[];
  githubHref?: string;
  demoHref?: string;
  featured?: boolean;
}

export interface ServiceOffering {
  icon: LucideIcon;
  serviceName: string;
  oneLiner: string;
  supportingPoints: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  highlights: string[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  credentialHref?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dateRange: string;
  detailLine: string;
  achievements: string[];
}

export interface CommunityImpactEntry {
  title: string;
  summary: string;
}

export interface ContactLinks {
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  resumeHref: string;
}

export const siteNavLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
];

export const metrics: Metric[] = [
  { value: "30%", label: "RAG accuracy lift" },
  { value: "95%", label: "Invoice processing cut" },
  { value: "80%", label: "Data access gain" },
];

export const allProjects: PortfolioProject[] = [
  {
    title: "ResumePros AI",
    roleOrType: "Product Engineer",
    summary:
      "Built and shipped a production AI product for resume optimization with structured scoring, extraction, and rewriting workflows.",
    highlights: [
      "Built extraction, analysis, and generation loops around LLM workflows",
      "Improved output consistency with deterministic evaluation beside model output",
      "Owned the full stack from product idea to production iteration",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "OpenAI APIs"],
    featured: true,
  },
  {
    title: "Document Understanding AI Pipeline",
    roleOrType: "AI Engineer",
    summary:
      "Designed an end-to-end RAG document system combining OCR, embeddings, retrieval, and LLM reasoning for real business documents.",
    highlights: [
      "Connected ingestion, retrieval, and validation into one production pipeline",
      "Improved performance by tuning both accuracy and latency together",
      "Built a document intelligence workflow instead of a demo-only chatbot",
    ],
    stack: ["Python", "RAG", "Embeddings", "LLMs"],
    featured: true,
  },
  {
    title: "Product Analytics Dashboard",
    roleOrType: "Product Analytics Builder",
    summary:
      "Created a KPI dashboard that consolidated SaaS metrics for faster product decisions and tighter operating rhythm.",
    highlights: [
      "Reduced manual KPI tracking with one consolidated decision surface",
      "Brought funnel, cohort, and real-time monitoring into one workflow",
      "Supported better product decisions with clearer operating visibility",
    ],
    stack: ["Python", "Streamlit", "Analytics", "SaaS Metrics"],
    featured: true,
  },
  {
    title: "Online File Encryption / Decryption Tool",
    roleOrType: "Web Security Tool",
    summary:
      "Built a browser-based AES-CBC encryption tool that secures files in-browser without sending data to an external server.",
    highlights: [
      "Added drag-and-drop upload, password validation, and instant encryption and decryption",
      "Kept file handling fully client-side for better privacy and trust",
      "Created a lightweight alternative for secure file protection",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Web Crypto API"],
    demoHref: "https://iamrealfaizan.github.io/FileEncryptionDecryption/",
  },
  {
    title: "Text To Speech Converter",
    roleOrType: "Accessibility Web Tool",
    summary:
      "Developed a web application that converts text input into speech with support for multiple voices and languages.",
    highlights: [
      "Built real-time speech generation with a clean responsive interface",
      "Supported multiple voices and languages for accessibility and learning use cases",
      "Created a simple tool that helps users access content more easily",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    demoHref: "https://iamrealfaizan.github.io/Text2speech/",
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);

export const services: ServiceOffering[] = [
  {
    icon: Bot,
    serviceName: "AI Product Builds",
    oneLiner:
      "I build AI features that feel like product, not lab experiments.",
    supportingPoints: [
      "LLM-powered product workflows",
      "Scoring, analysis, and generation systems",
      "Production delivery from prototype to rollout",
    ],
  },
  {
    icon: Cpu,
    serviceName: "RAG And Document Intelligence",
    oneLiner:
      "I design retrieval pipelines that turn messy knowledge into usable output.",
    supportingPoints: [
      "Document ingestion and retrieval architecture",
      "Embedding and vector search integration",
      "Accuracy, latency, and evaluation tuning",
    ],
  },
  {
    icon: Workflow,
    serviceName: "Automation And AI Workflows",
    oneLiner:
      "I automate operational bottlenecks with agentic and LLM-based systems.",
    supportingPoints: [
      "Workflow automation around real business constraints",
      "API integration and orchestration logic",
      "Scalable delivery with cloud and container tooling",
    ],
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    company: "Adaptive AI Ventures",
    role: "Team Lead - Software Engineering",
    dateRange: "Oct 2025 - Present",
    highlights: [
      "Leading production-grade AI systems and LLM workflows from architecture through deployment.",
      "Driving stronger engineering practices, design reviews, and scalable execution standards.",
      "Mentoring engineers across LLM development, RAG pipelines, and prompt engineering.",
    ],
  },
  {
    company: "Adaptive AI Ventures",
    role: "AI Engineer",
    dateRange: "Dec 2023 - Oct 2025",
    highlights: [
      "Digitized 1,000+ paper-based records with AI, OCR, and computer vision, improving data accessibility by 80%.",
      "Reduced invoice processing time by 95%, cutting manual work from hours to under 5 minutes and driving a 70% productivity increase.",
      "Fine-tuned and deployed LLM solutions across OpenAI, Llama2, and Mistral with accuracy improvements up to 30%.",
    ],
  },
  {
    company: "AboveTheWIngs",
    role: "Software Engineering Intern",
    dateRange: "Jun 2023 - Nov 2023",
    highlights: [
      "Integrated the Amadeus API for real-time flight search and booking, reducing search latency by 40%.",
      "Built secure Express.js APIs handling 100+ daily queries with 99.9% uptime.",
      "Worked in Agile delivery across 5+ cross-functional contributors while keeping milestones on schedule.",
    ],
  },
];

export const certifications: CertificationEntry[] = [
  {
    title: "Generative AI Leader",
    issuer: "Google Cloud -  Professional Certificate",
    date: "Apr 2026",
    credentialHref: "https://coursera.org/share/c0fdfbd2051e0b3f7db881aebfd98d97",
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google - Specialization",
    date: "Apr 2026",
    credentialHref: "https://coursera.org/share/0befeac3b2b918a0134b1768537c4332",
  },
  {
    title: "Automation Business Analysis - Concepts And Principles",
    issuer: "UiPath",
    date: "Jan 2025",
    credentialHref: "https://coursera.org/share/1875262ee36b5da091f168d5158609e7",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications - MCA",
    institution: "Government College of Engineering, Aurangabad",
    dateRange: "2022 - 2024",
    detailLine: "CGPA 9.0 | Department Topper",
    achievements: [
      "Served as Class Representative and Student Council Member",
      "Led 20+ tech events including hackathons and coding competitions",
      "Applied academic learning through real-world technical work and leadership",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science - B.Sc",
    institution: "Maulana Azad College, Aurangabad",
    dateRange: "2019 - 2022",
    detailLine: "Computer science fundamentals and applied project work",
    achievements: [
      "Built a strong foundation in programming, databases, algorithms, and problem-solving",
      "Completed academic work across SQL, Java, and web technologies",
    ],
  },
];

export const communityImpact: CommunityImpactEntry[] = [
  {
    title: "Teaching And Mentoring",
    summary:
      "I am interested in teaching, mentoring, and helping learners who need guidance but may not have direct access to it.",
  },
  {
    title: "Student And Community Leadership",
    summary:
      "I enjoy contributing through student leadership, technical events, peer support, and collaborative learning spaces that raise the level of the people around me.",
  },
  {
    title: "Impact-Oriented Volunteering",
    summary:
      "I want to support NGO and community efforts where technology, time, or structured problem-solving can create practical social impact.",
  },
];

export const contactLinks: ContactLinks = {
  email: "mohdfaizanashfaq@gmail.com",
  linkedin: "https://linkedin.com/in/mohdfaizanashfaq",
  github: "https://github.com/iamrealfaizan",
  leetcode: "https://leetcode.com",
  resumeHref: "/resume/MOHD_FAIZAN_7498478741.pdf",
};
