const { useState, useEffect, useRef } = React;

/* ----------------------------------------
   YOUR DATA
---------------------------------------- */
const DATA = {
  name: "Snehal Sonawane",
  role: "Computer Engineer & Aspiring Data Scientist",
  bio: "I build AI-powered tools, data pipelines, and interactive apps - from ML models to full-stack platforms. Currently open to exciting opportunities.",
  email: "snehalsonawane984@gmail.com",
  resumeUrl: "#",
  social: {
    github: "https://github.com/svsonawane",
    linkedin: "https://www.linkedin.com/in/snehal-sonawane-85b8143a6/",
    twitter: "https://x.com/sonawane23602",
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JavaScript"] },
    { category: "Frameworks & Libraries", items: ["Streamlit", "Scikit-learn", "Node.js", "Django", "Angular"] },
    { category: "Tools & Platforms", items: ["Git", "AWS S3", "Docker", "Netlify", "Vercel", "Figma", "Eclipse", "IAM"] },
  ],
  experience: [
    {
      company: "Netleap IT Training and Solutions",
      role: "Data Science Intern",
      period: "Jan 2026",
      bullets: [
        "Developed a healthcare insurance prediction model using Gradient Boosting (GBR) on a US dataset.",
        "Performed data preprocessing, feature engineering, and model evaluation to improve prediction accuracy.",
      ],
      images: [],
    },
    {
      company: "InAmigos",
      role: "Graphic Design Intern",
      period: "June 2025",
      bullets: [
        "Created promotional videos and social media content to support donation campaigns.",
        "Designed engaging posts that increased awareness and community participation.",
      ],
      images: [],
    },
    {
      company: "WeDidIt",
      role: "Content Writing Intern",
      period: "Feb 2025 - March 2025",
      bullets: [
        "Wrote blogs, website copy, and social media content aligned with brand goals.",
        "Researched industry topics and produced engaging content for digital platforms.",
      ],
      images: [],
    },
    {
      company: "MiddleMen.Asia",
      role: "Content Writing Intern",
      period: "Feb 2025 - March 2025",
      bullets: [
        "Managed social media content and supported community engagement initiatives.",
        "Assisted with marketing campaigns to improve reach and audience growth.",
      ],
      images: [],
    },
  ],
  projects: [
    {
      title: "CircuLCA",
      description: "AI-Driven Life Cycle Assessment platform for analyzing environmental impact across product life cycles using AI.",
      points: [
        "Interactive dashboard showing emissions, energy use, and resource consumption with scenario analysis.",
        "AI-powered predictions to forecast environmental impacts and compare materials and strategies.",
      ],
      tags: ["Python", "Streamlit", "AI/ML", "Data Viz"],
      github: "https://github.com/svsonawane/CircuLCA",
      live: "https://lca-mining.streamlit.app/",
      emoji: "♻️",
      images: [],
    },
    {
      title: "GrainShieldPro",
      description: "Blockchain-enabled hedging platform with AI price forecasting for oilseed farmers to manage price volatility and risk.",
      points: [
        "Real-time price forecasting using ML algorithms with virtual futures trading simulator for risk-free practice.",
        "Forward contract creation, blockchain-based transaction ledger, and educational hedging modules.",
      ],
      tags: ["Python", "Streamlit", "Scikit-learn", "Blockchain", "Plotly"],
      github: "https://github.com/svsonawane/GrainShieldPro",
      live: "https://oilseed-hedging-platform.streamlit.app/",
      emoji: "🌾",
      images: [],
    },
    {
      title: "SVAMITVA Drone Orthophoto",
      description: "AI-Powered Object Detection for Drone Orthophotos - Smart India Hackathon 2024 Finalist project.",
      points: [
        "Real-time object detection using YOLOv8 on drone imagery to identify buildings, vehicles, trees, and water bodies.",
        "Supports multiple image formats with adjustable confidence thresholds and export to CSV, JSON, and Excel.",
      ],
      tags: ["Python", "YOLOv8", "Streamlit", "Computer Vision"],
      github: "https://github.com/svsonawane/SVAMITVA-Drone-Orthophoto",
      live: null,
      emoji: "🗺️",
      images: [],
    },
    {
      title: "Netleap Insurance Predictor",
      description: "ML-based healthcare insurance cost prediction app built during Data Science internship at Netleap IT.",
      points: [
        "Trained Gradient Boosting Regressor on a US insurance dataset with data preprocessing and feature engineering.",
        "Deployed as an interactive Streamlit web app allowing real-time insurance cost prediction.",
      ],
      tags: ["Python", "Streamlit", "Scikit-learn", "GBR", "ML"],
      github: "https://github.com/svsonawane/Netleap-Insuarace-Final-App-2",
      live: "https://netleap-insuarace-final-app-2-vlxlbx2u5a5mrxaqokdic5.streamlit.app/",
      emoji: "🏥",
      images: [],
    },
    {
      title: "CCBackupProject",
      description: "Cloud Computing backup solution leveraging AWS S3, IAM roles, and Eclipse IDE for enterprise-grade file management.",
      points: [
        "Implements secure backup workflows using AWS S3 buckets with IAM-controlled access policies.",
        "Deployed on Render with a clean interface for managing and restoring cloud backups.",
      ],
      tags: ["AWS S3", "IAM", "Java", "Eclipse", "Cloud"],
      github: "https://github.com/svsonawane/CCBackupProject",
      live: "https://ccbackupproject.onrender.com/",
      emoji: "☁️",
      images: [],
    },
    {
      title: "IndieCraft",
      description: "Tech Pragryan - AVCOE Hackathon project celebrating and promoting indie artisans and local craft businesses.",
      points: [
        "Built a fully responsive web platform to showcase artisan products with a modern indie aesthetic.",
        "Developed as a hackathon submission highlighting UI/UX skills and rapid full-stack prototyping.",
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/svsonawane/IndieCraft",
      live: "https://svsonawane.github.io/IndieCraft/index.html",
      emoji: "🎨",
      images: [],
    },
    {
      title: "Asset Management System",
      description: "Web Technology mini-project for tracking, managing, and reporting on organizational assets in real time.",
      points: [
        "Built with Streamlit for an intuitive dashboard to add, update, and monitor asset status and lifecycle.",
        "Supports categorized asset views, status tracking, and exportable reports.",
      ],
      tags: ["Python", "Streamlit", "SQL"],
      github: "https://github.com/svsonawane/asset-management",
      live: "https://asset-management-wtminiproject.streamlit.app/",
      emoji: "📦",
      images: [],
    },
    {
      title: "Student Performance Tracker",
      description: "AI/DSA academic project that tracks and visualizes student performance metrics across subjects and exams.",
      points: [
        "Implements data structures to efficiently store and retrieve student records and grade history.",
        "Provides visual performance reports with trend analysis to help identify academic strengths and gaps.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "DSA"],
      github: "https://github.com/svsonawane/Student-Performance-Tracker",
      live: "https://svsonawane.github.io/Student-Performance-Tracker/Student%20Performance%20Tracker.html",
      emoji: "📊",
      images: [],
    },
    {
      title: "Bank Management System",
      description: "Console and web-based bank management system built as an AI/DSA project for account and transaction handling.",
      points: [
        "Uses core data structures (linked lists, queues) to manage account creation, deposits, withdrawals, and transfers.",
        "Web interface for account operations with transaction history and balance tracking.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "DSA"],
      github: "https://github.com/svsonawane/Bank-Management",
      live: "https://svsonawane.github.io/Bank-Management/Bank%20Managment.html",
      emoji: "🏦",
      images: [],
    },
  ],
  achievements: [
    {
      title: "SIH 2024 Finalist",
      event: "Smart India Hackathon 2024",
      description: "Cleared internal rounds with the SVAMITVA Drone Orthophoto project - AI-powered object detection for government drone imagery.",
    },
    {
      title: "Hackathon Internal Round Clear",
      event: "CircuLCA & GrainShieldPro - 2025",
      description: "Both CircuLCA and GrainShieldPro projects helped clear internal hackathon rounds, recognized for innovation in sustainability and agri-tech.",
    },
    {
      title: "Tech Pragryan Winner",
      event: "AVCOE Hackathon",
      description: "Built IndieCraft - a platform for indie artisans - and won at the Tech Pragryan hackathon organized by AVCOE.",
    },
    {
      title: "Data Science Intern",
      event: "Netleap IT Training and Solutions - 2026",
      description: "Completed a Data Science internship building a healthcare insurance prediction model using Gradient Boosting, earning recognition for strong ML implementation.",
    },
  ],
  education: [
    {
      institution: "Amrutvahini College of Engineering",
      degree: "BE Computer",
      period: "2023 - 2027",
      gpa: "- / 10",
      logo: "",
    },
    {
      institution: "Sahyadri Junior College",
      degree: "HSC",
      period: "2020 - 2023",
      gpa: "-",
      logo: "",
    },
    {
      institution: "Rasbihari International School",
      degree: "CBSE",
      period: "2014 - 2020",
      gpa: "-",
      logo: "",
    },
  ],
};

/* ----------------------------------------
   ICONS
---------------------------------------- */
const IconGithub = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const IconLinkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconTwitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
  </svg>
);
const IconExternal = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconMail = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconImage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
);

/* ----------------------------------------
   HOOKS
---------------------------------------- */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ----------------------------------------
   CSS
---------------------------------------- */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Poppins', sans-serif; background: #00040f; color: #fff; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #00040f; }
  ::-webkit-scrollbar-thumb { background: #5ce1e6; border-radius: 99px; }

  .grad-text {
    background: linear-gradient(135deg, #5ce1e6 0%, #33bbcf 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-up.d1 { transition-delay: 0.1s; } .fade-up.d2 { transition-delay: 0.2s; }
  .fade-up.d3 { transition-delay: 0.3s; } .fade-up.d4 { transition-delay: 0.4s; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 6vw; height: 70px;
    background: rgba(0,4,15,0.75); backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(92,225,230,0.1); transition: transform 0.3s ease;
  }
  nav.hidden-nav { transform: translateY(-100%); }
  .nav-logo { font-size: 1.4rem; font-weight: 700; letter-spacing: -0.5px; text-decoration: none; color: #fff; }
  .nav-logo span { color: #5ce1e6; }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
  .nav-links a:hover { color: #5ce1e6; }
  .nav-hamburger { display: none; background: none; border: none; color: #fff; cursor: pointer; }
  .mobile-menu {
    display: none; flex-direction: column; gap: 1.5rem;
    position: fixed; top: 70px; right: 0; bottom: 0; width: 260px;
    background: rgba(0,4,15,0.97); backdrop-filter: blur(20px);
    padding: 2.5rem 2rem; border-left: 1px solid rgba(92,225,230,0.15); z-index: 99;
    animation: slideIn 0.25s ease;
  }
  .mobile-menu.open { display: flex; }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
  .mobile-menu a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 1.1rem; font-weight: 500; transition: color 0.2s; }
  .mobile-menu a:hover { color: #5ce1e6; }
  @media (max-width: 768px) { .nav-links { display: none; } .nav-hamburger { display: block; } }

  /* SECTIONS */
  section { padding: 50px 6vw; max-width: 1200px; margin: 0 auto; }
  .section-tag {
    display: inline-block; font-size: 0.75rem; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: #5ce1e6;
    border: 1px solid rgba(92,225,230,0.3); border-radius: 99px;
    padding: 4px 14px; margin-bottom: 1rem;
  }
  .section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; margin-bottom: 0.5rem; line-height: 1.2; }
  .divider { width: 52px; height: 3px; background: linear-gradient(90deg, #5ce1e6, #33bbcf); border-radius: 99px; margin-bottom: 2.5rem; }

  /* HERO */
  #hero { min-height: 100vh; display: flex; align-items: center; padding-top: 70px; padding-bottom: 40px; position: relative; overflow: hidden; }
  .hero-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
  .hero-glow-1 { width: 500px; height: 500px; background: rgba(92,225,230,0.07); top: -100px; right: -100px; }
  .hero-glow-2 { width: 300px; height: 300px; background: rgba(51,187,207,0.05); bottom: 50px; left: -80px; }
  .hero-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; width: 100%; padding: 0 6vw; }
  .hero-eyebrow { font-size: 1rem; font-weight: 500; color: #5ce1e6; margin-bottom: 1rem; }
  .hero-name { font-size: clamp(2.8rem, 7vw, 5.5rem); font-weight: 800; line-height: 1.05; margin-bottom: 1rem; letter-spacing: -1px; }
  .hero-role { font-size: clamp(1.1rem, 2.5vw, 1.5rem); font-weight: 400; color: rgba(255,255,255,0.5); margin-bottom: 1.8rem; }
  .hero-bio { max-width: 520px; color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 2.5rem; font-size: 1rem; }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 0.95rem;
    background: linear-gradient(135deg, #5ce1e6, #33bbcf);
    color: #00040f; text-decoration: none; transition: opacity 0.2s, transform 0.2s;
  }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 28px; border-radius: 8px; font-weight: 600; font-size: 0.95rem;
    border: 1.5px solid rgba(92,225,230,0.4); color: #5ce1e6;
    text-decoration: none; transition: background 0.2s, transform 0.2s;
  }
  .btn-ghost:hover { background: rgba(92,225,230,0.08); transform: translateY(-2px); }
  .hero-social { display: flex; gap: 1.2rem; }
  .hero-social a { color: rgba(255,255,255,0.45); transition: color 0.2s; }
  .hero-social a:hover { color: #5ce1e6; }
  .scroll-hint { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; color: rgba(255,255,255,0.25); font-size: 0.7rem; letter-spacing: 1px; animation: bob 2s ease-in-out infinite; }
  @keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }

  /* SKILLS */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
  .skill-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 1.8rem; transition: border-color 0.25s, background 0.25s; }
  .skill-card:hover { border-color: rgba(92,225,230,0.25); background: rgba(92,225,230,0.04); }
  .skill-card h3 { font-size: 0.8rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #5ce1e6; margin-bottom: 1.2rem; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .skill-tag { font-size: 0.82rem; padding: 4px 12px; border-radius: 99px; font-weight: 500; background: rgba(92,225,230,0.08); color: rgba(255,255,255,0.75); border: 1px solid rgba(92,225,230,0.15); }

  /* EXPERIENCE */
  .exp-list { display: flex; flex-direction: column; position: relative; }
  .exp-list::before { content:''; position:absolute; left:7px; top:8px; bottom:0; width:1px; background: rgba(92,225,230,0.2); }
  .exp-item { display: flex; gap: 1.8rem; padding-bottom: 2.5rem; position: relative; }
  .exp-dot {
    width:15px; height:15px; border-radius:50%; border:2px solid #5ce1e6; background:#00040f;
    flex-shrink:0; margin-top:4px; position:relative; z-index:1;
    cursor:pointer; padding:0; transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .exp-dot:hover { background: rgba(92,225,230,0.2); transform: scale(1.25); }
  .exp-dot.exp-dot-active { background: #5ce1e6; box-shadow: 0 0 10px rgba(92,225,230,0.5); transform: scale(1.3); }
  .exp-body { flex: 1; }
  .exp-company { font-size: 1.1rem; font-weight: 700; }
  .exp-role { font-size: 0.9rem; color: #5ce1e6; font-weight: 500; margin: 2px 0; }
  .exp-period { font-size: 0.78rem; color: rgba(255,255,255,0.35); }

  /* EXPERIENCE TAB STRIP */
  .exp-tabs-strip-wrap {
    margin-top: 1.5rem;
    animation: fadeSlideDown 0.3s ease;
  }
  @keyframes fadeSlideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
  .exp-tabs-strip {
    display: flex; gap: 1rem;
    overflow-x: auto; padding: 1rem 0.5rem 1.2rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin; scrollbar-color: rgba(92,225,230,0.3) transparent;
  }
  .exp-tabs-strip::-webkit-scrollbar { height: 4px; }
  .exp-tabs-strip::-webkit-scrollbar-thumb { background: rgba(92,225,230,0.3); border-radius: 99px; }
  .exp-tab-card {
    flex-shrink: 0; width: 260px; scroll-snap-align: start;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px; padding: 1.5rem; cursor: pointer;
    transition: border-color 0.25s, background 0.25s, transform 0.2s;
  }
  .exp-tab-card:hover { border-color: rgba(92,225,230,0.25); background: rgba(92,225,230,0.04); transform: translateY(-3px); }
  .exp-tab-card.exp-tab-card-active { border-color: rgba(92,225,230,0.5); background: rgba(92,225,230,0.07); }
  .exp-tab-emoji { font-size: 1.6rem; margin-bottom: 0.75rem; }
  .exp-tab-company { font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
  .exp-tab-role { font-size: 0.85rem; color: #5ce1e6; font-weight: 500; margin-bottom: 2px; }
  .exp-tab-period { font-size: 0.72rem; color: rgba(255,255,255,0.35); margin-bottom: 1rem; }
  .exp-tab-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
  .exp-tab-bullets li { font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.6; padding-left: 1rem; position: relative; }
  .exp-tab-bullets li::before { content:'▸'; position:absolute; left:0; color:#5ce1e6; font-size:0.68rem; top:3px; }

  /* EXPERIENCE IMAGE GRID */
  .exp-images-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
    margin-top: 1rem; animation: fadeSlideDown 0.3s ease;
  }
  .exp-img-slot {
    aspect-ratio: 4/3; border-radius: 10px; overflow: hidden;
    background: rgba(92,225,230,0.06); border: 1px solid rgba(92,225,230,0.15);
  }
  .exp-img-slot img { width: 100%; height: 100%; object-fit: cover; }
  .exp-img-placeholder {
    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
    color: rgba(92,225,230,0.3);
  }
  .exp-bullets { list-style: none; margin-top: 0.6rem; display: flex; flex-direction: column; gap: 0.4rem; }
  .exp-bullets li { font-size: 0.83rem; color: rgba(255,255,255,0.55); line-height: 1.6; padding-left: 1rem; position: relative; }
  .exp-bullets li::before { content:'▸'; position:absolute; left:0; color:#5ce1e6; font-size:0.68rem; top:3px; }

  /* PROJECTS */
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.8rem; }
  .project-card {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 18px; overflow: hidden; display: flex; flex-direction: column;
    transition: border-color 0.25s, background 0.25s, transform 0.25s;
  }
  .project-card:hover { border-color: rgba(92,225,230,0.3); background: rgba(92,225,230,0.035); transform: translateY(-5px); }
  .project-card-body { padding: 1.8rem; display: flex; flex-direction: column; gap: 1rem; flex: 1; }
  .project-header { display: flex; align-items: center; gap: 0.8rem; }
  .project-emoji { font-size: 2rem; line-height: 1; flex-shrink: 0; }
  .project-title { font-size: 1.1rem; font-weight: 700; }
  .project-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.7; }
  .project-points { display: flex; flex-direction: column; gap: 0.4rem; }
  .project-point { font-size: 0.82rem; color: rgba(255,255,255,0.5); line-height: 1.6; padding-left: 1rem; position: relative; }
  .project-point::before { content:'▸'; position:absolute; left:0; color:#5ce1e6; font-size:0.7rem; top:2px; }
  .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .project-tag { font-size: 0.72rem; padding: 3px 10px; border-radius: 99px; background: rgba(92,225,230,0.1); color: #5ce1e6; border: 1px solid rgba(92,225,230,0.2); font-weight: 500; }
  .project-links-row { display: flex; gap: 1rem; padding: 1rem 1.8rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.05); margin-top: auto; }
  .project-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
  .project-link:hover { color: #5ce1e6; }

  /* ACHIEVEMENTS */
  .ach-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
  .ach-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 1.8rem; border-left: 3px solid #5ce1e6; transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
  .ach-card:hover { background: rgba(92,225,230,0.05); transform: translateY(-3px); box-shadow: 0 6px 20px rgba(92,225,230,0.08); }
  .ach-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
  .ach-event { font-size: 0.78rem; color: #5ce1e6; font-weight: 500; margin-bottom: 0.75rem; letter-spacing: 0.5px; }
  .ach-desc { font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.65; }

  /* EDUCATION */
  .edu-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 2rem; display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap; }
  .edu-icon { font-size: 2.5rem; flex-shrink: 0; }
  .edu-inst { font-size: 1.1rem; font-weight: 700; margin-bottom: 2px; }
  .edu-deg { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-bottom: 2px; }
  .edu-period { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
  .edu-gpa { margin-left: auto; background: rgba(92,225,230,0.1); border: 1px solid rgba(92,225,230,0.2); border-radius: 8px; padding: 0.5rem 1rem; text-align: center; }
  .edu-gpa-label { font-size: 0.65rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; }
  .edu-gpa-val { font-size: 1.2rem; font-weight: 700; color: #5ce1e6; }

  /* FOOTER */
  footer { background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.06); padding: 28px 6vw; }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
  .footer-bottom-name { font-size: 1.1rem; font-weight: 700; }
  .footer-bottom-name span { color: #5ce1e6; }
  .footer-copy { font-size: 0.78rem; color: rgba(255,255,255,0.25); }
  .footer-socials { display: flex; gap: 1.2rem; }
  .footer-socials a { color: rgba(255,255,255,0.35); transition: color 0.2s; }
  .footer-socials a:hover { color: #5ce1e6; }

  /* LOADING */
  .loading { position: fixed; inset: 0; background: #00040f; display: flex; align-items: center; justify-content: center; z-index: 999; transition: opacity 0.5s; }
  .loading.fade { opacity: 0; pointer-events: none; }
  .loading-dot-row { display: flex; gap: 10px; justify-content: center; margin-top: 1rem; }
  .loading-dot { width: 8px; height: 8px; border-radius: 50%; background: #5ce1e6; animation: dotpulse 1.2s ease-in-out infinite; }
  .loading-dot:nth-child(2){animation-delay:0.2s} .loading-dot:nth-child(3){animation-delay:0.4s}
  @keyframes dotpulse { 0%,80%,100%{transform:scale(0.6);opacity:0.4} 40%{transform:scale(1);opacity:1} }
`;

/* ----------------------------------------
   ANIMATED SECTION
---------------------------------------- */
function AnimSection({ id, children }) {
  const [ref, inView] = useInView();
  return (
    <section id={id} ref={ref}>
      <div className={`fade-up ${inView ? "visible" : ""}`}>{children}</div>
    </section>
  );
}

/* ----------------------------------------
   NAVBAR
---------------------------------------- */
function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  useEffect(() => {
    const fn = () => { const y = window.scrollY; setHidden(y > last.current && y > 100); last.current = y; };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Experience", "Projects", "Achievements", "Contact"];
  const close = () => setOpen(false);
  return (
    <>
      <nav className={hidden ? "hidden-nav" : ""}>
        <a href="#hero" className="nav-logo">{DATA.name.split(" ")[0]}<span>.</span></a>
        <ul className="nav-links">
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={close}>{l}</a></li>)}
        </ul>
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>)}
        <a href={DATA.resumeUrl} target="_blank" rel="noreferrer" onClick={close} style={{color:"#5ce1e6"}}>Resume &gt; </a>
      </div>
    </>
  );
}

/* ----------------------------------------
   HERO
---------------------------------------- */
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:70,paddingBottom:40,position:"relative",overflow:"hidden"}}>
      <div className="hero-glow hero-glow-1" /><div className="hero-glow hero-glow-2" />
      <div className="hero-inner">
        <p className={`hero-eyebrow fade-up ${visible?"visible":""}`}>Hello, world 👋</p>
        <h1 className={`hero-name fade-up d1 ${visible?"visible":""}`}>I'm <span className="grad-text">{DATA.name}</span></h1>
        <p className={`hero-role fade-up d2 ${visible?"visible":""}`}>{DATA.role}</p>
        <p className={`hero-bio fade-up d2 ${visible?"visible":""}`}>{DATA.bio}</p>
        <div className={`hero-btns fade-up d3 ${visible?"visible":""}`}>
          <a href={DATA.social.github} target="_blank" rel="noreferrer" className="btn-primary">See My Work</a>
          <a href={DATA.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">Resume &gt; </a>
        </div>
        <div className={`hero-social fade-up d4 ${visible?"visible":""}`}>
          <a href={DATA.social.github} target="_blank" rel="noreferrer"><IconGithub size={22}/></a>
          <a href={DATA.social.linkedin} target="_blank" rel="noreferrer"><IconLinkedin size={22}/></a>
          <a href={DATA.social.twitter} target="_blank" rel="noreferrer"><IconTwitter size={22}/></a>
          <a href="https://mail.google.com/mail/?view=cm&to=snehalsonawane984@gmail.com" target="_blank" rel="noreferrer"><IconMail size={22}/></a>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------
   EXPERIENCE
---------------------------------------- */
function Experience() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <AnimSection id="experience">
      <span className="section-tag">Experience</span>
      <h2 className="section-title">Internships Done</h2>
      <div className="divider" />
      <div className="exp-list">
        {DATA.experience.map((e, i) => (
          <div key={i} className="exp-item">
            <button
              className={`exp-dot${openIdx === i ? " exp-dot-active" : ""}`}
              onClick={() => toggle(i)}
              aria-label={`Toggle ${e.company}`}
            />
            <div className="exp-body">
              <div className="exp-company">{e.company}</div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-period">{e.period}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>

              {openIdx === i && (
                <div className="exp-images-grid">
                  {[0,1,2,3].map(slot => (
                    <div key={slot} className="exp-img-slot">
                      {e.images && e.images[slot]
                        ? <img src={e.images[slot]} alt={`${e.company} ${slot+1}`} />
                        : <div className="exp-img-placeholder"><IconImage /></div>
                      }
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimSection>
  );
}

/* ----------------------------------------
   PROJECT CARD
---------------------------------------- */
function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div className="project-card-body">
        <div className="project-header">
          <span className="project-emoji">{p.emoji}</span>
          <span className="project-title">{p.title}</span>
        </div>
        <div className="project-desc">{p.description}</div>
        <div className="project-tags">
          {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>

      <div className="project-links-row">
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
            <IconGithub size={14}/> Source
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
            <IconExternal size={14}/> Live demo
          </a>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------
   PROJECTS
---------------------------------------- */
function Projects() {
  return (
    <AnimSection id="projects">
      <span className="section-tag">Projects</span>
      <h2 className="section-title">Things I've Built</h2>
      <div className="divider" />
      <div className="projects-grid">
        {DATA.projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </AnimSection>
  );
}

/* ----------------------------------------
   ACHIEVEMENTS
---------------------------------------- */
function Achievements() {
  return (
    <AnimSection id="achievements">
      <span className="section-tag">Achievements</span>
      <h2 className="section-title">Recognition & Awards</h2>
      <div className="divider" />
      <div className="ach-grid">
        {DATA.achievements.map((a, i) => (
          <div key={i} className="ach-card">
            <div className="ach-title">{a.title}</div>
            <div className="ach-event">{a.event}</div>
            <div className="ach-desc">{a.description}</div>
          </div>
        ))}
      </div>
    </AnimSection>
  );
}

/* ----------------------------------------
   EDUCATION
---------------------------------------- */
function Education() {
  return (
    <AnimSection id="education">
      <span className="section-tag">Education</span>
      <h2 className="section-title">Academic Background</h2>
      <div className="divider" />
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        {DATA.education.map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-icon">
              {e.logo
                ? <img src={e.logo} alt={e.institution} style={{width:"52px",height:"52px",objectFit:"contain",borderRadius:"8px",background:"rgba(255,255,255,0.9)",padding:"4px"}} />
                : <span style={{fontSize:"2.2rem"}}>🎓</span>}
            </div>
            <div>
              <div className="edu-inst">{e.institution}</div>
              <div className="edu-deg">{e.degree}</div>
              <div className="edu-period">{e.period}</div>
            </div>
            <div className="edu-gpa">
              <div className="edu-gpa-label">CGPA</div>
              <div className="edu-gpa-val">{e.gpa}</div>
            </div>
          </div>
        ))}
      </div>
    </AnimSection>
  );
}

/* ----------------------------------------
   FOOTER
---------------------------------------- */
function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <div className="footer-bottom">
          <div className="footer-bottom-name">{DATA.name.split(" ")[0]}<span>.</span></div>
          <div className="footer-socials">
            <a href={DATA.social.github} target="_blank" rel="noreferrer"><IconGithub size={18}/></a>
            <a href={DATA.social.linkedin} target="_blank" rel="noreferrer"><IconLinkedin size={18}/></a>
            <a href={DATA.social.twitter} target="_blank" rel="noreferrer"><IconTwitter size={18}/></a>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------
   LOADING
---------------------------------------- */
function Loading({ done }) {
  return (
    <div className={`loading ${done ? "fade" : ""}`}>
      <div style={{textAlign:"center"}}>
        <div className="grad-text" style={{fontSize:"1.8rem",fontWeight:700,letterSpacing:-0.5}}>
          {DATA.name.split(" ")[0]}<span style={{color:"#fff"}}>.</span>
        </div>
        <div className="loading-dot-row">
          <div className="loading-dot"/><div className="loading-dot"/><div className="loading-dot"/>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------
   APP
---------------------------------------- */
function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 1000); return () => clearTimeout(t); }, []);
  return (
    <>
      <style>{CSS}</style>
      <Loading done={loaded} />
      <div style={{opacity: loaded ? 1 : 0, transition:"opacity 0.5s 0.1s"}}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Footer />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
