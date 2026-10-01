// Single source of truth for all page content. Edit this file to update the portfolio;
// no component changes are required.

export const profile = {
  name: 'Barbara Bańczyk',
  role: 'System Integration & AI Engineer',
  tagline:
    'Recently completed my Master\'s in Computer Science at Warsaw University of Technology (thesis awarded with distinction) and looking for a full-time role in AI engineering or system integration. I have a background in both software and robotics — my thesis focused on explainability in deep learning models for audio classification, and my internship work has ranged from building MCP-based AI agents at Accenture to programming industrial robots at Danfoss. I care about building AI systems that are not just functional but reliable and interpretable.',
  location: 'Warsaw, Poland',
  email: 'b.banczyk@gmail.com',
};

export const socials = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/barbsnb' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/barbara-bańczyk-72a13a265/' },
  { id: 'email', label: 'Email', url: 'mailto:b.banczyk@gmail.com' },
];

export const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export const experience = [
  {
    id: 'exp-accenture',
    role: 'System Integration Developer',
    company: 'Accenture',
    period: 'Aug 2025 — Present',
    summary: 'AI agent development and enterprise MuleSoft integration for international clients.',
    highlights: [
      'Designed and implemented an MCP server from scratch to automate developer onboarding using an AI Agent.',
      'Developed AI agent rules and workflows enabling autonomous onboarding, environment verification, and dependency checking.',
      'Monitored MuleSoft integration platform logs for an international luxury fashion brand, performing root cause analysis and implementing bug fixes.',
      'Worked with MuleSoft, Anypoint Platform, Amazon SQS, Amazon S3, CloudHub, and Model Context Protocol (MCP).',
    ],
    tech: ['MuleSoft', 'Anypoint Platform', 'MCP', 'AI Agents', 'Amazon SQS', 'Amazon S3', 'CloudHub', 'Prompt Engineering'],
  },
  {
    id: 'exp-danfoss',
    role: 'Maintenance Department Intern',
    company: 'Danfoss',
    period: 'Oct 2022 — Dec 2023',
    summary: 'Industrial automation, PLC programming, and robotics for production systems.',
    highlights: [
      'Designed and implemented an automated press workstation.',
      'Programmed and configured industrial robots: KUKA, Mitsubishi, ABB, and Fanuc.',
      'Integrated sensors and machine vision cameras with industrial automation systems.',
      'Developed PLC and HMI applications using Siemens TIA Portal and enhanced the Ignition SCADA interface.',
      'Supported maintenance by troubleshooting machine failures and preparing preventive inspection schedules.',
    ],
    tech: ['Siemens TIA Portal', 'PLC Programming', 'HMI', 'Ignition SCADA', 'Industrial Robotics', 'Vision Systems'],
  },
  {
    id: 'exp-bira',
    role: 'R&D Department Intern',
    company: 'Bira',
    period: 'Jul 2022 — Sep 2022',
    summary: 'Mechanical prototyping and technical documentation for engineering projects.',
    highlights: [
      'Created and maintained technical documentation for ongoing R&D projects.',
      'Designed and manufactured mechanical components and functional prototypes using lathes, milling machines, and 3D printers.',
      'Collaborated with quality control, warehouse, and production teams to support prototype development.',
    ],
    tech: ['Fusion 360', '3D Printing', 'Prototyping', 'Technical Documentation'],
  },
];

export const education = [
  {
    id: 'edu-masters',
    degree: "M.Sc. Computer Science — Artificial Intelligence",
    school: 'Warsaw University of Technology, Faculty of Electronics and Information Technology',
    period: 'Oct 2023 — Jun 2026',
    details: 'Thesis (awarded with distinction): Bird Species Classification Using Neural Networks — Analysis of Performance and Explainability on Field Recordings.',
  },
  {
    id: 'edu-erasmus',
    degree: 'Erasmus Exchange — Computer Science',
    school: 'Universitat Politècnica de Catalunya — Barcelona Tech',
    period: 'Sep 2024 — Feb 2025',
    details: '',
  },
  {
    id: 'edu-bachelors',
    degree: 'B.Eng. Robotics and Automatic Control',
    school: 'Warsaw University of Technology, Faculty of Power and Aeronautical Engineering',
    period: 'Oct 2019 — Jun 2023',
    details: 'Thesis: Software for a Small Mobile Robot in the ROS Environment.',
  },
];

export const research = [
  {
    id: 'res-birdnet',
    title: 'BirdNET XAI Analysis',
    meta: 'Master\'s thesis, awarded with distinction · Warsaw University of Technology',
    description:
      'Built an end-to-end research pipeline to probe what BirdNET v2.4 actually learns when classifying bird species from field recordings. Rather than treating the model as a black box, the project applies and compares multiple XAI methods — GradCAM, SoundLIME, and occlusion-based analysis — to surface which parts of a spectrogram drive each prediction. Evaluation goes beyond accuracy: faithfulness and stability metrics quantify how trustworthy each explanation is, while clustering and dimensionality reduction reveal structure in the model\'s embedding space. Planned for publication.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Explainable AI (XAI)', 'Scikit-learn', 'Pandas', 'NumPy'],
    // Paths are relative to public/ and resolved against import.meta.env.BASE_URL when rendered.
    media: ['pictures/birdnet1.mp4', 'pictures/sample_3386_faithfulness.png'],
    plot: 'pictures/tsne_3d_interactive_all.html',
    repo: 'https://github.com/barbsnb/XAIBirdNet',
  },
];

export const projects = [
  {
    id: 'proj-codereview',
    name: 'AI-Powered Code Review Assistant',
    description:
      'Full-stack web application for automated code quality analysis and AI-assisted developer feedback. Led a team of four developers. Built with Django/SQLite backend, React.js frontend, and OpenAI LLM integration for intelligent code analysis via a chat interface.',
    tech: ['Python', 'Django', 'React.js', 'JavaScript', 'REST API', 'OpenAI API', 'LLM'],
    // Paths are relative to public/ and resolved against import.meta.env.BASE_URL when rendered.
    video: 'video/projectnest.mp4',
    repo: 'https://github.com/barbsnb/ProjectNest',
    demo: null,
  },
  {
    id: 'proj-midibytes',
    name: 'MIDIBytes',
    description:
      'Research application for analysing the impact of different tokenisation strategies on symbolic music generation quality. Integrated NanoGPT-based generative models and MIDITok pipelines for compatibility with transformer-based architectures.',
    tech: ['Python', 'PyTorch', 'NanoGPT', 'MIDITok', 'Docker', 'Machine Learning'],
    video: 'video/midibytes.mp4',
    repo: 'https://github.com/barbsnb/MIDIBytes',
    demo: null,
  },
  {
    id: 'proj-kindle',
    name: 'Kindle Clippings Viewer',
    description:
      'A web app to manage, filter, and edit Kindle highlights and notes, with automatic Linux import.',
    tech: ['Python', 'Django', 'SQLite', 'JavaScript', 'Linux CLI'],
    video: 'video/kindle.mp4',
    repo: 'https://github.com/barbsnb/KindleClippings',
    demo: null,
  },
];

export const skills = [
  {
    id: 'lang',
    group: 'Languages',
    items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'MATLAB', 'Shell'],
  },
  {
    id: 'ai',
    group: 'AI & Machine Learning',
    items: ['LLMs', 'Generative AI', 'AI Agents', 'Prompt Engineering', 'Explainable AI (XAI)', 'TensorFlow', 'PyTorch'],
  },
  {
    id: 'integration',
    group: 'Integration & Cloud',
    items: ['MuleSoft', 'Anypoint Platform', 'REST APIs', 'JSON/XML', 'Model Context Protocol (MCP)', 'AWS (S3, SQS)'],
  },
  {
    id: 'frameworks',
    group: 'Frameworks & Tools',
    items: ['Django', 'React', 'Streamlit', 'Docker', 'Git', 'Linux CLI'],
  },
  {
    id: 'data',
    group: 'Data & Software Engineering',
    items: ['Pandas', 'Scikit-learn', 'pytest', 'Agile/Scrum', 'Software Debugging & Testing'],
  },
  {
    id: 'robotics',
    group: 'Robotics & Automation',
    items: ['ROS', 'PLC Programming', 'Siemens TIA Portal', 'SCADA (Ignition)', 'Industrial Robots'],
  },
  {
    id: 'cad',
    group: 'CAD & Simulation',
    items: ['Siemens NX', 'Fusion 360', 'AutoCAD', 'ANSYS APDL'],
  },
];

export const certificates = [
  { id: 'cert-mulesoft', name: 'Salesforce Certified MuleSoft Developer I' },
  { id: 'cert-msagent', name: 'Microsoft Agentic AI Course' },
];

export const achievements = [
  {
    id: 'ach-hackathon',
    date: 'Apr 2023',
    title: 'Second place — Hackathon',
    description: 'Project of a robot with built-in algorithms for detecting mood changes.',
  },
];

export const languages = [
  { id: 'lang-en', name: 'English', level: 'Fluent' },
  { id: 'lang-fr', name: 'French', level: 'Intermediate' },
];

export const interests = [
  {
    id: 'int-sailing',
    name: 'Sailing',
    description:
      'Fourteen years on the water — from crew to first officer, on inland lakes and coastal routes. I\'ve delivered a yacht professionally, which means I know the difference between sailing for fun and sailing when the job has to get done regardless of conditions.',
    // Paths are relative to public/ and resolved against import.meta.env.BASE_URL when rendered.
    images: ['pictures/sailing1.jpg', 'pictures/sailing2.jpg', 'pictures/sailing3.jpg'],
  },
  {
    id: 'int-hiking',
    name: 'Hiking & climbing',
    description:
      'Mountain trails and climbing walls: the best way I know to reset after a week of screen time.',
    images: ['pictures/hiking1.JPG', 'pictures/hiking2.JPG', 'pictures/hiking3.jpg'],
  },
  {
    id: 'int-cooking',
    name: 'Cooking',
    description:
      'Cooking is my favourite kind of experiment — iterate on a recipe, taste, adjust, repeat.',
    images: ['pictures/cooking1.jpg', 'pictures/cooking2.jpg', 'pictures/cooking3.jpg'],
  },
];