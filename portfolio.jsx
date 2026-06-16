import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   YOUR DATA
───────────────────────────────────────── */
const DATA = {
  name: "Snehal Sonawane",
  role: "Computer Engineer & Aspiring Data Scientist",
  bio: "I build AI-powered tools, data pipelines, and interactive apps — from ML models to full-stack platforms. Currently open to exciting opportunities.",
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
      images: [], // paste up to 4 image URLs here
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
      period: "Feb 2025 – March 2025",
      bullets: [
        "Wrote blogs, website copy, and social media content aligned with brand goals.",
        "Researched industry topics and produced engaging content for digital platforms.",
      ],
      images: [],
    },
    {
      company: "MiddleMen.Asia",
      role: "Content Writing Intern",
      period: "Feb 2025 – March 2025",
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
      // images: ["img1.png", "img2.png", "img3.png"],  ← paste your image URLs here
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
      description: "AI-Powered Object Detection for Drone Orthophotos — Smart India Hackathon 2024 Finalist project.",
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
      description: "Tech Pragryan — AVCOE Hackathon project celebrating and promoting indie artisans and local craft businesses.",
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
      description: "Cleared internal rounds with the SVAMITVA Drone Orthophoto project — AI-powered object detection for government drone imagery.",
    },
    {
      title: "Hackathon Internal Round Clear",
      event: "CircuLCA & GrainShieldPro — 2025",
      description: "Both CircuLCA and GrainShieldPro projects helped clear internal hackathon rounds, recognized for innovation in sustainability and agri-tech.",
    },
    {
      title: "Tech Pragryan Winner",
      event: "AVCOE Hackathon",
      description: "Built IndieCraft — a platform for indie artisans — and won at the Tech Pragryan hackathon organized by AVCOE.",
    },
    {
      title: "Data Science Intern",
      event: "Netleap IT Training and Solutions — 2026",
      description: "Completed a Data Science internship building a healthcare insurance prediction model using Gradient Boosting, earning recognition for strong ML implementation.",
    },
  ],
  education: [
    {
      institution: "Amrutvahini College of Engineering",
      degree: "BE Computer",
      period: "2023 – 2027",
      gpa: "— / 10",
      logo: "data:image/png;base64,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",
    },
    {
      institution: "Sahyadri Junior College",
      degree: "HSC",
      period: "2020 – 2023",
      gpa: "—",
      logo: "data:image/jpeg;base64,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",
    },
    {
      institution: "Rasbihari International School",
      degree: "CBSE",
      period: "2014 – 2020",
      gpa: "—",
      logo: "data:image/jpeg;base64,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",
    },
  ],
};

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   ANIMATED SECTION
───────────────────────────────────────── */
function AnimSection({ id, children }) {
  const [ref, inView] = useInView();
  return (
    <section id={id} ref={ref}>
      <div className={`fade-up ${inView ? "visible" : ""}`}>{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
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
        <a href={DATA.resumeUrl} target="_blank" rel="noreferrer" onClick={close} style={{color:"#5ce1e6"}}>Resume ↗</a>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
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
          <a href={DATA.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">Resume ↗</a>
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



/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   ACHIEVEMENTS
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   EDUCATION
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   LOADING
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
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
