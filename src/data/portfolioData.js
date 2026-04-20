export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
]

export const highlights = [
  {
    title: 'Problem-Solving Mindset',
    description: 'I break complex requirements into clear technical milestones and measurable outcomes.',
  },
  {
    title: 'User-Focused Engineering',
    description: 'I balance performance, accessibility, and visual clarity to ship polished interfaces.',
  },
  {
    title: 'End-to-End Delivery',
    description: 'From API design to frontend architecture, I build and iterate complete products fast.',
  },
]

export const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive interfaces with modern UI frameworks.',
    skills: [
      { name: 'HTML', icon: 'html', level: 'Advanced' },
      { name: 'CSS', icon: 'css', level: 'Advanced' },
      { name: 'JavaScript', icon: 'javascript', level: 'Advanced' },
      { name: 'React.js', icon: 'react', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Designing scalable APIs and reliable server-side logic for web applications.',
    skills: [
      { name: 'Node.js', icon: 'node', level: 'Intermediate' },
      { name: 'Express.js', icon: 'express', level: 'Intermediate' },
    ],
  },
  {
    title: 'Database',
    description: 'Managing structured and document-based data models for production apps.',
    skills: [
      { name: 'MongoDB', icon: 'mongodb', level: 'Intermediate' },
      { name: 'MySQL', icon: 'mysql', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Technologies',
    description: 'Using developer tools for collaboration, coding workflow, and code quality.',
    skills: [
      { name: 'Git & GitHub', icon: 'github', level: 'Advanced' },
      { name: 'VS Code', icon: 'vscode', level: 'Advanced' },
    ],
  },
]

export const aiMlSkillGroups = [
  {
    title: 'AI/ML Skills',
    description: 'Core machine learning concepts and practical workflows for model building and analysis.',
    skills: [
      { name: 'Supervised Learning', icon: 'brain' },
      { name: 'Unsupervised Learning', icon: 'layer' },
      { name: 'Model Evaluation', icon: 'chart' },
    ],
  },
  {
    title: 'Data Handling',
    description: 'Preparing, analyzing, and shaping data before and during model development.',
    skills: [
      { name: 'Data Cleaning', icon: 'check' },
      { name: 'Exploratory Data Analysis (EDA)', icon: 'magnify' },
      { name: 'Feature Engineering', icon: 'flask' },
    ],
  },
  {
    title: 'Programming Language',
    description: 'Primary language used for AI and data science workflows.',
    skills: [{ name: 'Python', icon: 'python' }],
  },
  {
    title: 'Libraries of Python',
    description: 'Essential libraries for numerical computing and data manipulation.',
    skills: [
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' },
    ],
  },
  {
    title: 'Tools',
    description: 'Notebook-based environments used for experimentation and reporting.',
    skills: [
      { name: 'Jupyter Lab', icon: 'jupyter' },
      { name: 'Jupyter Notebook', icon: 'jupyter' },
    ],
  },
]

export const projects = [
  {
    title: 'IntervAI',
    description:
      'AI-powered interview preparation platform with mock interviews, resume-aware feedback, and personalized improvement guidance. Built for a clean dark dashboard experience with clear progress signals and practical learning support.',
    techStack: ['React.js', 'JavaScript', 'Gemini API'],
    github: 'https://github.com/sunilkumawat-96/IntervAI-Project',
    liveDemo: 'https://interv-ai-tan.vercel.app/',
    details: {
      mode: 'accordion',
      sections: [
        {
          id: 'core-functionality',
          title: 'Core Functionality',
          icon: 'brain',
          groups: [
            {
              title: 'Dual-Path Mock Interviews',
              items: ['Topic-Based interviews for React, Backend, and similar roles', 'Resume-Based interviews that use AI to analyze user experience'],
            },
            {
              title: 'Intelligent Performance Analytics',
              items: [
                'Displays average score, such as 8.2/10, for quick performance review',
                'Tracks Technical Accuracy, Communication, and Problem Solving metrics',
              ],
            },
            {
              title: 'Adaptive Improvement Areas',
              items: ['Suggests targeted topics like System Design and State Management for focused practice'],
            },
          ],
        },
        {
          id: 'engagement-motivation',
          title: 'Engagement & Motivation',
          icon: 'trophy',
          groups: [
            {
              title: 'Gamified Progress Tracking',
              items: [
                'Weekly goal tracker with progress bar',
                'Streak system with visual indicators',
                'Achievement badges such as React Master and 3-Day Streak',
              ],
            },
            {
              title: 'Session History',
              items: ['Tracks previous interview attempts', 'Shows role-based performance for Frontend and Backend practice'],
            },
          ],
        },
        {
          id: 'ux-design',
          title: 'User Experience & Design',
          icon: 'palette',
          groups: [
            {
              title: 'Modern Dark Interface',
              items: ['High-contrast dark theme', 'Blue-to-purple gradient styling'],
            },
            {
              title: 'Curated Learning Resources',
              items: ['Top 50 React Questions', 'STAR Method Guide'],
            },
            {
              title: 'Clean Navigation',
              items: ['Card-based layout for easy readability', 'Organized dashboard with clear sections'],
            },
          ],
        },
      ],
    },
  },
  {
    title: 'CivicSense',
    description:
      'AI-powered civic complaint platform with geo-tagged issue reporting, real-time tracking, community verification, and severity-based analysis for faster resolution.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase (Authentication, Firestore)', 'GPS Integration'],
    github: 'https://github.com/sunilkumawat-96/CivicSence',
    liveDemo: 'https://civicvv.netlify.app/',
    details: {
      featureGroups: [
        {
          id: 'citizen',
          title: 'Citizen Side Features',
          items: [
            'Voice complaint (Hindi and English)',
            'Upload photo with live preview',
            'GPS auto location',
            'AI image classification',
            'Track complaint by ID',
            'Google heatmap of issues',
            'Ward and zone analytics (live graphs)',
            'Disaster mode',
            'Citizen reputation score',
            'SLA timer and escalation',
            'QR-based complaint',
            'Social media sharing (WhatsApp, X, Instagram, Threads, YouTube)',
            'Dark and light mode',
          ],
        },
        {
          id: 'admin',
          title: 'Admin and Government Features',
          items: [
            'Complaint status workflow',
            'Smart priority engine',
            'Heatmap analytics',
            'Open data dashboard',
            'SMS and WhatsApp alerts',
            'Officer and department routing',
          ],
        },
      ],
      techStackSections: [
        { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        { title: 'Backend', items: ['Node.js', 'Express.js'] },
        { title: 'Database', items: ['MongoDB Atlas'] },
        { title: 'AI', items: ['Python', 'Flask', 'PyTorch'] },
        { title: 'APIs and Services', items: ['Google Maps API', 'Twilio (SMS and WhatsApp)'] },
        { title: 'Hosting', items: ['Vercel', 'Netlify'] },
      ],
      architecture: `civicsense-smart-city/
├── frontend/
├── backend/
├── routes/
├── models/
└── ai/`,
      runLocally: [
        { title: 'Frontend', command: 'Open index.html' },
        { title: 'Backend', command: 'npm install -> node server.js' },
        { title: 'AI Service', command: 'python app.py' },
      ],
      vision:
        'CivicSense bridges the gap between citizens and government using AI, automation, and real-time data to create transparent and smarter cities.',
    },
  },
]

export const hackathons = [
  {
    name: 'The Unstoppable Open Source Hackathon, LNMIIT Jaipur',
    role: 'Team Member',
    description:
      'Contributed to our open source hackathon project at LNMIIT Jaipur. Our team ranked among the top 40 teams out of 250+ participating teams.',
    techStack: ['Open Source', 'Collaboration', 'Problem Solving'],
    result: 'Top 40 of 250+ teams',
    credentialUrl: 'https://credsverse.com/credentials/3aeb7666-e821-4d0b-b00b-0ce4b13cd59c',
  },
  {
    name: 'HACK ARYA VERSE 2.0',
    role: 'Team Member',
    description:
      '24-hour in-person hackathon at Arya College of Engineering & I.T., Jaipur. Built IntervAI project showcasing problem-solving and rapid prototyping skills in a competitive environment.',
    techStack: ['Full Stack Development', 'Rapid Prototyping', 'Team Collaboration'],
    result: 'Participant',
    credentialUrl: 'https://github.com/Sattar078/IntervAI',
    certificateImage: '/HAV-50.jpg',
  },
  {
    name: 'GENISYS 1.0 - Flagship AI Hackathon',
    role: 'Finalist',
    description:
      "Participated as a finalist in GENISYS 1.0, the flagship AI hackathon organized by the Entrepreneurship Cell, MNIT Jaipur under E-Summit'26.",
    techStack: ['AI/ML', 'Problem Solving', 'Team Collaboration'],
    result: 'Finalist',
    certificateImage: '/Genisys-1.0.pdf',
  },
]

export const certifications = []

export const workshops = [
  {
    name: 'Digital Forensics Workshop',
    role: 'Participant',
    description:
      'Comprehensive workshop on Digital Forensics covering investigation techniques, evidence collection, analysis methods, and best practices in digital forensic analysis.',
    techStack: ['Digital Forensics', 'Cybersecurity', 'Investigation'],
    result: 'Completed',
    certificateImage: '/Digital_Forensics.pdf',
  },
  {
    name: 'AI-Powered Innovation: Tools, Tactics & Transformation',
    role: 'Participant',
    description:
      'One-day training program on AI-Powered Innovation organized by AICTE and CTE. Explored practical tools, tactics, and transformation strategies for leveraging AI in real-world applications.',
    techStack: ['AI/ML', 'Innovation', 'Tools & Frameworks'],
    result: 'Completed',
    certificateImage: '/AI_powered.pdf.pdf',
  },
]
