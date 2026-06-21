import { useState } from 'react';
import { ProjectCard, type ProjectCardProps } from '../ui/ProjectCard';

type FilterType = 'All' | 'Blockchain' | 'DevTools' | 'AI' | 'Others';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const projects: (ProjectCardProps & { title: string })[] = [
    {
      title: 'DevBoard',
      category: 'Devtool',
      description: 'Real-time collaborative code editor enabling multi-user editing, live cursor tracking, line-based comments, persistent storage, and room-based collaboration.',
      technologies: ['Next.js', 'TypeScript', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Monaco Editor', 'Express', 'TailwindCSS'],
      year: '2026',
      featured: true,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/DevBoard',
      hoverColor: 'yellow',
      modalContent: {
        overview: 'DDevBoard is a real-time collaborative code editor that enables multiple users to write, review, and discuss code together in shared rooms. Users can see live code updates, track collaborator cursors, and leave line-specific comments, creating a lightweight environment for pair programming, technical interviews, and collaborative debugging.',
        problem: 'Remote collaboration often requires heavy IDE setups or multiple disconnected tools for editing, communication, and code review. DevBoard solves this by providing a shared coding workspace where teams can collaborate instantly through real-time editing, presence tracking, and inline feedback.',
        features: [
          'Real-time collaborative code editing with instant synchronization',
          'Live cursor tracking and active user presence',
          'Line-specific comments integrated directly into the editor',
          'Persistent code and comment storage with PostgreSQL',
          'Room-based code review and pair programming environments'
        ],
        technicalHighlights: [
          'Implemented WebSockets via Socket.IO for low-latency sync',
          'Integrated Monaco Editor for VS Code-like editing experience',
          'Architected a robust PostgreSQL + Prisma database schema for persistent state',
          'Built scalable Node/Express backend to handle concurrent WebSocket connections'
        ],
        challenges: 'Managing concurrent edits and preventing race conditions over WebSockets was a primary hurdle. This was solved by implementing Operational Transformation concepts and debouncing database writes to optimize performance.',
        impact: 'Provided a seamless pair programming experience that significantly reduces setup time for code reviews and collaborative debugging.'
      }
    },
    {
      title: 'B2B Financial Fraud Prevention',
      category: 'Blockchain',
      description: 'Decentralized invoice financing platform for fraud detection and intermediary elimination. Implements invoice–PO validation, secure transaction workflows, RBAC, and digital lock mechanisms for fund protection.',
      technologies: ['Hyperledger Fabric', 'Go', 'Docker', 'Node.js'],
      year: '2026',
      featured: true,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/b2b-financial-fraud-prevention',
      hoverColor: 'red',
      modalContent: {
        overview: 'A decentralized invoice financing platform built on blockchain technology to detect and prevent fraudulent B2B transactions. It establishes a trustless ecosystem where invoices and purchase orders are cryptographically validated.',
        problem: 'Traditional supply chain financing is plagued by double-financing fraud, fake invoices, and excessive intermediary fees, costing the industry billions annually and delaying legitimate transactions.',
        features: [
          'Automated Invoice-to-PO validation',
          'Secure, immutable transaction workflows',
          'Role-Based Access Control (RBAC)',
          'Digital lock mechanisms for fund protection',
          'Real-time audit trails'
        ],
        technicalHighlights: [
          'Built private blockchain network using Hyperledger Fabric',
          'Developed robust smart contracts (chaincode) in Go',
          'Containerized network nodes and peers using Docker',
          'Created scalable Node.js middleware for client interactions'
        ],
        challenges: 'Designing a consensus mechanism that ensured privacy between competing suppliers while allowing banks to verify invoice authenticity without exposing sensitive trade secrets. Solved using Hyperledger Fabric Channels and Private Data Collections.',
        impact: 'Eliminates the possibility of double-financing an invoice, drastically reducing the risk for lenders and accelerating the financing approval process for suppliers.'
      }
    },
    {
      title: 'Snap It',
      category: 'File Sharing App',
      description: 'Peer-to-peer file sharing application enabling direct device-to-device transfers using real-time signaling without relying on external storage.',
      technologies: ['JavaScript', 'WebRTC', 'WebSockets', 'Node.js', 'HTML', 'CSS'],
      year: '2025',
      featured: false,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/snapit',
      hoverColor: 'green',
      modalContent: {
        overview: 'SnapIt is a peer-to-peer file sharing platform that enables users to transfer files directly between devices without relying on cloud storage. Using WebRTC DataChannels, files are sent directly between peers, while a lightweight signaling server handles device discovery and connection setup.',
        problem: 'Most file-sharing solutions require uploading files to centralized servers, which introduces privacy concerns, storage costs, and additional transfer latency. SnapIt solves this by establishing direct peer-to-peer connections, allowing secure and efficient file transfers without storing files on third-party infrastructure.',
        features: [
  'Direct peer-to-peer file transfer without cloud storage',
  'Real-time device discovery and connection establishment',
  'Reliable chunk-based file transfers with progress tracking',
  'Multi-file transfer support with accept/reject workflows',
  'Cross-platform browser-based experience with no installation required'
],

        technicalHighlights: [
  'Built peer-to-peer communication using WebRTC DataChannels for direct browser-to-browser file transfer',
  'Implemented a custom WebSocket signaling server in Node.js for peer discovery and connection negotiation',
  'Designed a chunking, acknowledgment, and retry mechanism to improve transfer reliability on unstable networks',
  'Managed binary file processing and reconstruction using ArrayBuffers and Blob APIs'
],

        challenges: 'Establishing reliable peer-to-peer connections across different networks and NAT configurations. Solved by integrating STUN servers for WebRTC negotiation and implementing a custom ACK-based retry mechanism to handle packet loss and transfer interruptions.',

impact: 'Delivered a private, serverless file-sharing solution that minimizes bandwidth costs, improves transfer speed, and ensures files never pass through centralized storage.'
      }
    },
    {
      title: 'Drift',
      category: 'Communication App',
      description: 'Real-time chat application with authentication and websocket-powered messaging for fast and seamless communication.',
      technologies: ['TypeScript', 'TailwindCSS', 'Socket.IO', 'Node.js'],
      year: '2025',
      featured: false,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/Chatapp',
      hoverColor: 'purple',
      modalContent: {
        overview: 'Drift is a modern, responsive real-time chat application that provides instantaneous messaging capabilities. It features secure user authentication and a sleek, intuitive interface for seamless communication.',
        problem: 'Building a reliable, low-latency messaging system from scratch requires handling complex state synchronization, connection drops, and secure user sessions across distributed clients.',
        features: [
          'Real-time instant messaging',
          'Secure user authentication and sessions',
          'Online/offline presence indicators',
          'Responsive, mobile-friendly chat interface',
          'Message history and timestamping'
        ],
        technicalHighlights: [
          'Engineered real-time bi-directional communication using Socket.IO',
          'Built type-safe data flows from frontend to backend using TypeScript',
          'Implemented secure JWT-based authentication flow',
          'Styled dynamic UI components efficiently using TailwindCSS'
        ],
        challenges: 'Managing WebSocket connection lifecycle and state consistency when users abruptly disconnect or switch networks. Implemented robust heartbeat mechanisms and automatic reconnection logic on the client.',
        impact: 'Delivered a highly responsive chat experience with sub-second message delivery times and a scalable architecture capable of supporting numerous concurrent users.'
      }
    },
    {
      title: 'MindBridge',
      category: 'Campus Platform',
      description: 'AI-assisted student wellness platform featuring mood tracking, counselling session booking, peer communities, moderation dashboards, and mental health support tools.',
      technologies: ['Next.js', 'TailwindCSS', 'Supabase', 'Gemini'],
      year: '2025',
      featured: false,
      projectUrl: '',
      githubUrl: 'https://github.com/Team-BrawlDevs/MindBridge',
      hoverColor: 'yellow',
      modalContent: {
        overview: 'MindBridge is an AI-assisted student wellness platform that combines mental health screening, mood tracking, counselling support, and self-help resources into a single campus-focused system. Students can access AI-powered emotional support, book counselling sessions, and use wellness tools, while administrators gain insights into wellbeing trends through analytics dashboards.',
        problem: 'College students often struggle with stress, anxiety, and burnout, while mental health support is fragmented across different systems. MindBridge provides a centralized platform for early detection, self-help, and timely intervention, making support more accessible, private, and proactive.',
        features: [
          'AI-powered multilingual emotional support assistant with voice interaction',
          'PHQ-9 mental health screening, mood tracking, and automated support pathways',
          'Real-time counsellor chat, appointment booking, and wellness resource hub (podcasts, breathing exercises, meditation, stress-relief tools)',
          'Campus-wide administrator dashboards for trend analysis and resource management',
          'Anonymous peer-support communities with privacy-preserving moderation'
        ],
        technicalHighlights: [
          'Integrated Google Gemini API for intelligent mood analysis and empathetic chatbot responses',
          'Built with Next.js App Router for server-side rendering, optimized performance, and scalable architecture',
          'Used Supabase for secure authentication, real-time databases, and backend services',
          'Implemented complex role-based routing (Student vs. Counselor vs. Admin)'
        ],
        challenges: 'Ensuring absolute data privacy and anonymity for students in peer communities while still allowing moderators to intervene in crisis situations. Solved using Supabase Row Level Security (RLS) policies.',
        impact: 'Created a centralized, accessible, and unintimidating entry point for student mental health care, actively encouraging proactive wellness management.'
      }
    },
    {
      title: 'SAFE',
      category: 'Healthcare AI',
      description: 'Smart AI First-Aid Assistant that analyzes symptoms, images, and voice prompts to provide triage guidance and emergency assistance recommendations.',
      technologies: ['Python', 'Streamlit', 'Gemini', 'OpenStreetMap'],
      year: '2025',
      featured: true,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/Sr1v1dhya/safe',
      hoverColor: 'red',
      modalContent: {
        overview: 'SAFE (Smart AI First-Aid) is an intelligent healthcare assistant designed to provide immediate, actionable triage guidance during medical situations using multimodal AI analysis.',
        problem: 'During medical emergencies or minor injuries, people often panic and lack immediate medical knowledge. Searching the internet can yield conflicting or overly generic advice, costing crucial time.',
        features: [
          'Multimodal input: Analyze symptoms via text, voice, or images',
          'Instant first-aid triage and step-by-step guidance',
          'Location-based emergency services routing',
          'Voice-prompt processing for hands-free assistance',
          'Clear, panic-reducing instruction formatting'
        ],
        technicalHighlights: [
          'Integrated Gemini Vision and Language models for multimodal symptom analysis',
          'Built a rapid, interactive prototype UI using Streamlit',
          'Implemented geolocation routing to nearest hospitals using OpenStreetMap API',
          'Processed audio inputs utilizing Python speech recognition libraries'
        ],
        challenges: 'Ensuring the AI provided safe, conservative medical advice without hallucinating critical treatments. Implemented strict system prompts and confidence thresholds, always prioritizing "call emergency services" for high-risk inputs.',
        impact: 'Developed a critical proof-of-concept for accessible, rapid-response AI medical assistance that can guide users through high-stress situations.'
      }
    },
    {
      title: 'Text Parser',
      category: 'Devtool',
      description: 'GUI-based document processing tool for extracting and categorizing text from PDFs and DOCX files using regex, NLP entity recognition, and LaTeX parsing.',
      technologies: ['Python', 'Tkinter', 'PyPDF2', 'spaCy', 'NLTK'],
      year: '2025',
      featured: false,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/Text-Parser',
      hoverColor: 'green',
      modalContent: {
        overview: 'Text Parser is a robust, locally-hosted desktop application designed for automated document processing. It extracts, analyzes, and categorizes unstructured text from various document formats into structured data.',
        problem: 'Researchers and administrators spend countless hours manually reading and extracting data (names, dates, specific figures) from large volumes of PDFs and Word documents.',
        features: [
          'Multi-format support (PDF, DOCX, LaTeX)',
          'Automated Named Entity Recognition (NER)',
          'Custom Regex-based data extraction rules',
          'User-friendly graphical interface',
          'Bulk processing and categorization'
        ],
        technicalHighlights: [
          'Utilized spaCy and NLTK for advanced Natural Language Processing and entity extraction',
          'Built a cross-platform GUI using Python Tkinter',
          'Implemented PyPDF2 and custom parsers for handling complex document layouts',
          'Optimized bulk processing using Python multiprocessing to handle large document batches'
        ],
        challenges: 'Extracting clean text from poorly formatted or scanned PDFs. Integrated OCR fallbacks and custom layout-analysis algorithms to preserve reading order and context.',
        impact: 'Significantly reduced manual data entry time by automating the extraction of key entities and metadata from dense document archives.'
      }
    },
    {
      title: 'QuickMart',
      category: 'E-Commerce',
      description: 'Responsive grocery platform with dynamic cart management, authenticated checkout, persistent sessions, and seamless shopping workflows.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      year: '2024',
      featured: false,
      projectUrl: 'PROJECT_URL_HERE',
      githubUrl: 'https://github.com/anan-yaa/quick-mart',
      hoverColor: 'purple',
      modalContent: {
        overview: 'QuickMart is a responsive grocery e-commerce platform that enables users to browse products, manage shopping carts, securely authenticate, and complete purchases through a streamlined shopping experience. Built with vanilla JavaScript and Firebase, it demonstrates how a lightweight architecture can deliver core commerce functionality without a traditional backend.',

problem: 'Many small grocery stores lack affordable digital storefronts and often rely on manual ordering processes. QuickMart addresses this by providing a simple, scalable online shopping experience with authentication, cart management, and checkout workflows.',

features: [
'User registration, login, and secure session management',
'Dynamic product catalog with cart and quantity management',
'Checkout workflow with address and profile integration',
'Persistent cart storage across browsing sessions',
'Responsive shopping experience optimized for desktop and mobile devices'
],

technicalHighlights: [
'Integrated Firebase Authentication for secure user identity and session management',
'Used Firestore to store and manage customer profile and address information',
'Implemented custom cart state management and checkout logic using vanilla JavaScript and localStorage',
'Designed a hybrid persistence architecture combining cloud-based user data with client-side transactional state'
],

challenges: 'Maintaining a consistent shopping experience across page navigations while balancing cloud persistence and client-side state. Solved by combining Firebase authentication listeners with localStorage-based cart persistence and route protection mechanisms.',

impact: 'Delivered a lightweight e-commerce solution that demonstrates complete shopping workflows, secure authentication, and scalable frontend architecture without requiring a custom backend server.'

      }
    }
  ];

  const getFilterCategory = (title: string): FilterType => {
    if (['B2B Financial Fraud Prevention'].includes(title)) return 'Blockchain';
    if (['DevBoard', 'Text Parser'].includes(title)) return 'DevTools';
    if (['SAFE', 'MindBridge'].includes(title)) return 'AI';
    return 'Others';
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return getFilterCategory(project.title) === activeFilter;
  });

  return (
    <section id="projects" className="flex flex-col border-t-4 border-black bg-neo-bg w-full">
      <div className="px-8 py-8 border-b-4 border-black flex items-center justify-between">
        <div>
          <span className="font-mono text-sm tracking-widest font-bold text-black/70 mr-4">03 / SELECTED WORK</span>
          <h2 className="text-5xl font-black uppercase tracking-tight mt-2">Projects</h2>
        </div>
        <div className="hidden lg:flex border-2 border-black font-mono text-sm font-bold uppercase tracking-widest">
          {(['All', 'Blockchain', 'DevTools', 'AI', 'Others'] as FilterType[]).map((filter, index) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 ${index < 4 ? 'border-r-2 border-black' : ''} transition-colors ${
                activeFilter === filter ? 'bg-black text-white hover:bg-black/80' : 'bg-transparent text-black hover:bg-black/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-8 md:p-12 lg:p-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr w-full">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
