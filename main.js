/* ==========================================================================
   MOHAMMED ADNAN P - DIGITAL MARKETING PORTFOLIO CMS LOGIC
   ========================================================================== */

// 1. DEFAULT DATA STORAGE SCHEMA
const DEFAULT_PORTFOLIO_DATA = {
  personalInfo: {
    name: "Mohammed Adnan P",
    title: "Digital Marketing Enthusiast",
    heroPretitle: "Graduate Digital Associate",
    heroIntro: "A motivated, creative, and analytical business administration graduate specializing in marketing. Eager to leverage a strong academic foundation, Meta & Google certifications, and hands-on SEO/SMM experience to build successful online brands.",
    aboutBio: "I am a highly motivated Business Administration graduate from Calicut University, specializing in Marketing, with a strong academic foundation (CGPA 4.96) and a deep passion for digital growth. My journey combines analytical business strategy with practical marketing methodologies to construct data-driven online campaigns.\n\nThrough hands-on internships and freelance projects, I have developed key competencies in Search Engine Optimization (SEO), Paid Search Campaigns, Social Media Marketing, Content Strategy, and Analytics. I am eager to leverage this knowledge, along with my Google and Meta certifications, to drive traffic and brand growth in a Graduate Digital Associate role.",
    qualification: "BBA, Calicut University (2023–2026)",
    phone: "9744273307",
    email: "adnanmohammed9744@gmail.com",
    location: "Malappuram, Kerala",
    avatar: "", // Base64 data URL fallback to ./profile.png
    cvFile: "", // Base64 data URL fallback to ./cv.jpg
    linkedin: "https://linkedin.com/in/7mohammedadnan-7736",
    instagram: "https://instagram.com/mr_adnnn",
    whatsapp: "https://wa.me/919744273307"
  },
  theme: {
    bgPrimary: "#030008",
    bgSecondary: "#080314",
    accentPurple: "#7C3AED",
    accentBlue: "#00F0FF",
    preset: "purpleBlue"
  },
  stats: [
    { val: "5+", lbl: "Simulated Ad Campaigns" },
    { val: "15k+", lbl: "Organic Traffic Reach" },
    { val: "4+", lbl: "Verified Certifications" },
    { val: "92%", lbl: "Average SEO Audit Score" }
  ],
  gallery: [
    {
      title: "Eco-Friendly Campaign Ad Banner",
      category: "Social Media",
      desc: "Facebook ad post mockup for organic soap launch.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' style='background:linear-gradient(135deg,%23061727,%23030008);'><rect x='50' y='50' width='500' height='500' rx='12' fill='none' stroke='rgba(0,240,255,0.1)' stroke-width='4'/><circle cx='300' cy='250' r='120' fill='%2310B981' opacity='0.25'/><text x='300' y='280' fill='%2310B981' font-family='sans-serif' font-weight='900' font-size='28' text-anchor='middle'>META AD BANNER</text><text x='300' y='320' fill='%23FFFFFF' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle' opacity='0.7'>Eco-Friendly Soap Post</text></svg>"
    },
    {
      title: "Eduvate 2.0 Campaign Poster",
      category: "Poster",
      desc: "Promotional event poster mockup with typography focus.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' style='background:linear-gradient(135deg,%2319082d,%23030008);'><rect x='50' y='50' width='500' height='500' rx='12' fill='none' stroke='rgba(124,58,237,0.1)' stroke-width='4'/><polygon points='300,120 420,380 180,380' fill='%237C3AED' opacity='0.3'/><text x='300' y='300' fill='%237C3AED' font-family='sans-serif' font-weight='900' font-size='28' text-anchor='middle'>PROMO POSTER</text><text x='300' y='340' fill='%23FFFFFF' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle' opacity='0.7'>Eduvate Event Design</text></svg>"
    },
    {
      title: "Modern Tech Branding Visuals",
      category: "Branding",
      desc: "Brand layout rules and logo typography standards.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' style='background:linear-gradient(135deg,%230a1c1d,%23030008);'><rect x='50' y='50' width='500' height='500' rx='12' fill='none' stroke='rgba(0,240,255,0.1)' stroke-width='4'/><rect x='200' y='200' width='200' height='200' rx='16' fill='%2300F0FF' opacity='0.15' stroke='%2300F0FF' stroke-width='2'/><text x='300' y='290' fill='%2300F0FF' font-family='sans-serif' font-weight='900' font-size='28' text-anchor='middle'>BRAND LOGO</text><text x='300' y='330' fill='%23FFFFFF' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle' opacity='0.7'>Corporate Tech Identity</text></svg>"
    },
    {
      title: "Discount Offer Display Ad",
      category: "Advertisement",
      desc: "Google ads display banner with promo codes.",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' style='background:linear-gradient(135deg,%23211505,%23030008);'><rect x='50' y='50' width='500' height='500' rx='12' fill='none' stroke='rgba(245,158,11,0.1)' stroke-width='4'/><rect x='150' y='180' width='300' height='180' rx='6' fill='%23F59E0B' opacity='0.2'/><text x='300' y='260' fill='%23F59E0B' font-family='sans-serif' font-weight='900' font-size='28' text-anchor='middle'>30% OFF ADS</text><text x='300' y='300' fill='%23FFFFFF' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle' opacity='0.7'>Google Banner Ad Creative</text></svg>"
    }
  ],
  skills: [
    { name: "Search Engine Optimization (SEO)", level: 88 },
    { name: "Social Media Marketing", level: 90 },
    { name: "Content Marketing", level: 80 },
    { name: "Meta Ads", level: 85 },
    { name: "Email Marketing", level: 84 },
    { name: "Google Analytics", level: 82 },
    { name: "Canva & Creative Design Tools", level: 92 },
    { name: "Adobe Photoshop", level: 85 },
    { name: "Adobe Illustrator", level: 78 }
  ],
  projects: [
    {
      title: "Capstone: SEO Non-Profit Website Optimization",
      tag: "SEO Capstone",
      desc: "Led a team of 4 students to conduct keyword mapping and content audits for a local non-profit. Implemented basic on-page edits, resulting in search traffic growth.",
      tools: "Screaming Frog, GSC, Yoast SEO",
      preset: "seo",
      stats: [
        { val: "+120%", lbl: "Organic Traffic" },
        { val: "+18 Avg", lbl: "Keyword Positions" },
        { val: "92", lbl: "Audit Score" }
      ]
    },
    {
      title: "Social Media Launch Campaign Simulation",
      tag: "SMM Campaign",
      desc: "Created a mock go-to-market strategy for a sustainable energy product. Produced copy briefs, structural wireframes, and simulated budget allocations.",
      tools: "Canva, Meta Ads Manager, Sheets",
      preset: "smm",
      stats: [
        { val: "3.8x", lbl: "Mock ROAS" },
        { val: "4.2%", lbl: "Conversion Rate" },
        { val: "500", lbl: "Target Leads" }
      ]
    },
    {
      title: "Lead Nurturing Newsletter Sequence",
      tag: "Content Marketing",
      desc: "Drafted a 5-step automated email welcome sequence and lead magnet PDF to educate incoming cold contacts and push them to book a phone audit call.",
      tools: "Mailchimp, Google Docs, Canva",
      preset: "content",
      stats: [
        { val: "5 Stages", lbl: "Funnel Steps" },
        { val: "28%", lbl: "Target Open Rate" },
        { val: "PDF", lbl: "Lead Asset" }
      ]
    },
    {
      title: "Shoe Store Google Search Ad Mockup",
      tag: "Paid Search Mockup",
      desc: "Configured keywords, match settings, and negative phrases. Drafted three responsive ad search creatives optimized for conversion.",
      tools: "Google Ads Account, Excel",
      preset: "ads",
      stats: [
        { val: "3 Groups", lbl: "Campaign Setup" },
        { val: "9 Ads", lbl: "Creatives Drafted" },
        { val: "Exact/Phrase", lbl: "Match Types" }
      ]
    }
  ],
  certificates: [
    { name: "Google Digital Marketing & E-commerce", issuer: "Google Professional Certificate", link: "https://coursera.org/verify", year: "2026" },
    { name: "Google Analytics Certification", issuer: "GA4 Individual Qualification", link: "https://skillshop.exceedlms.com", year: "2026" },
    { name: "HubSpot Inbound Marketing", issuer: "Content & Funnel Strategy", link: "https://academy.hubspot.com", year: "2025" },
    { name: "Meta Blueprint Certification", issuer: "Media Buying Fundamentals", link: "https://facebook.com/blueprint", year: "2026" }
  ],
  testimonials: [
    {
      quote: "Mohammed is one of the most proactive learners I've mentored. His final capstone campaign project demonstrated a level of audience research and tool mastery that goes far beyond entry-level expectations. He is ready to bring immediate value to any marketing team.",
      clientName: "Prof. Marcus V",
      clientRole: "Marketing Professor & Coordinator, Calicut University",
      avatar: "MV"
    },
    {
      quote: "Adnan supported our team at Eduvate 2.0 with excellent digital content and social media community engagement. His BBA background translates perfectly into marketing metrics, and his Canva designs are consistently clean and eye-catching.",
      clientName: "Lisa Cole",
      clientRole: "Marketing Lead, Eduvate 2.0 Campaign",
      avatar: "LC"
    }
  ],
  timeline: [
    { duration: "Summer 2026", title: "Digital Marketing Intern", company: "EDUVATE 2.0", desc: "Supported digital marketing initiatives aimed at increasing brand awareness. Developed content for social media platforms. Assisted in content planning, campaign execution, and community engagement. Applied SEO, SMM, and content principles." },
    { duration: "2025 - Present", title: "Freelance Digital Marketer", company: "Self-Employed (Election & Small Business Works)", desc: "Managed social projects for local small businesses. Created and optimized SMM campaigns, assisting clients in improving online visibility and audience engagement." },
    { duration: "2023 - 2026", title: "Bachelor of Business Administration in Finance", company: "Calicut University (CGPA: 4.96)", desc: "Acquired solid knowledge in corporate administration, finance, and marketing dynamics. Learned how to translate financial analysis into growth KPI calculations." }
  ],
  tools: [
    { name: "GA4", desc: "Google Analytics" },
    { name: "Meta", desc: "Business Suite" },
    { name: "Canva", desc: "Creative Suite" },
    { name: "SEMrush", desc: "SEO Keywords" },
    { name: "Ahrefs", desc: "Audit & Analysis" },
    { name: "WP", desc: "WordPress CMS" },
    { name: "AI", desc: "ChatGPT Prompting" },
    { name: "Ps", desc: "Adobe Photoshop" },
    { name: "Ai", desc: "Adobe Illustrator" }
  ]
};

// Designer Theme presets definitions
const THEME_PRESETS = {
  purpleBlue: {
    bgPrimary: "#030008",
    bgSecondary: "#080314",
    accentPurple: "#7C3AED",
    accentBlue: "#00F0FF",
    name: "Cyber Purple & Neon Blue"
  },
  emeraldMint: {
    bgPrimary: "#020617",
    bgSecondary: "#0a0f1d",
    accentPurple: "#10B981",
    accentBlue: "#6EE7B7",
    name: "Emerald Mint & Slate"
  },
  sunsetViolet: {
    bgPrimary: "#07010e",
    bgSecondary: "#120521",
    accentPurple: "#D946EF",
    accentBlue: "#F59E0B",
    name: "Sunset Gold & Violet"
  },
  deepIce: {
    bgPrimary: "#040b19",
    bgSecondary: "#081226",
    accentPurple: "#2563EB",
    accentBlue: "#94A3B8",
    name: "Deep Blue & Ice Silver"
  }
};

// Global state variables
let portfolio = null;
let activeCmsProjectIndex = null; // Track project we are currently editing (null = creating)

// Initialize Portfolio Data
function loadPortfolioData() {
  const localData = localStorage.getItem('adnan_portfolio_data');
  if (localData) {
    try {
      const parsed = JSON.parse(localData);
      // Deep merge saved data with the default schema to prevent property missing errors
      portfolio = mergeWithDefault(parsed, DEFAULT_PORTFOLIO_DATA);
      
      let needsSave = false;

      // Dynamic migration to ensure Photoshop and Illustrator are present in loaded skills
      const hasPhotoshop = portfolio.skills.some(s => s.name.toLowerCase().includes('photoshop'));
      if (!hasPhotoshop) {
        portfolio.skills.push({ name: "Adobe Photoshop", level: 85 });
        needsSave = true;
      }
      const hasIllustrator = portfolio.skills.some(s => s.name.toLowerCase().includes('illustrator'));
      if (!hasIllustrator) {
        portfolio.skills.push({ name: "Adobe Illustrator", level: 78 });
        needsSave = true;
      }
      
      // Dynamic migration to update old title 'Digital Marketing Fresher' to 'Enthusiast'
      if (portfolio.personalInfo.title === "Digital Marketing Fresher") {
        portfolio.personalInfo.title = "Digital Marketing Enthusiast";
        needsSave = true;
      }

      // Dynamic migration to filter out Google Ads skill
      if (portfolio.skills) {
        const originalSkillsLen = portfolio.skills.length;
        portfolio.skills = portfolio.skills.filter(s => !s.name.toLowerCase().includes('google ads'));
        if (portfolio.skills.length !== originalSkillsLen) {
          needsSave = true;
        }
      }

      // Dynamic migration to ensure Photoshop and Illustrator are present in loaded tools
      if (portfolio.tools) {
        const hasPsTool = portfolio.tools.some(t => t.desc.toLowerCase().includes('photoshop'));
        if (!hasPsTool) {
          portfolio.tools.push({ name: "Ps", desc: "Adobe Photoshop" });
          needsSave = true;
        }
        const hasAiTool = portfolio.tools.some(t => t.desc.toLowerCase().includes('illustrator'));
        if (!hasAiTool) {
          portfolio.tools.push({ name: "Ai", desc: "Adobe Illustrator" });
          needsSave = true;
        }
      }

      // Dynamic migration to filter out Google Ads tool
      if (portfolio.tools) {
        const originalToolsLen = portfolio.tools.length;
        portfolio.tools = portfolio.tools.filter(t => !t.desc.toLowerCase().includes('google ads') && !t.name.toLowerCase().includes('ads'));
        if (portfolio.tools.length !== originalToolsLen) {
          needsSave = true;
        }
      }

      // Dynamic migration to ensure stats are present in loaded state
      if (!portfolio.stats || !Array.isArray(portfolio.stats) || portfolio.stats.length === 0) {
        portfolio.stats = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA.stats));
        needsSave = true;
      }

      // Dynamic migration to ensure gallery is present in loaded state
      if (!portfolio.gallery || !Array.isArray(portfolio.gallery) || portfolio.gallery.length === 0) {
        portfolio.gallery = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA.gallery));
        needsSave = true;
      }

      if (needsSave) {
        savePortfolioData();
      }
    } catch (e) {
      console.warn("Local storage state load error. Resetting to defaults.", e);
      portfolio = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }
  } else {
    portfolio = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }
}

// Deep merge helper to prevent missing fields/sections crashes
function mergeWithDefault(target, source) {
  if (typeof target !== 'object' || target === null) {
    return JSON.parse(JSON.stringify(source));
  }
  
  const result = JSON.parse(JSON.stringify(target));
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (target[key] === undefined || target[key] === null) {
        result[key] = JSON.parse(JSON.stringify(source[key]));
      } else if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = mergeWithDefault(target[key], source[key]);
      }
    }
  }
  
  return result;
}

function savePortfolioData() {
  localStorage.setItem('adnan_portfolio_data', JSON.stringify(portfolio));
}

// 2. STYLING INJECTOR
function applyThemeStyles() {
  const root = document.documentElement;
  const theme = portfolio.theme;
  
  root.style.setProperty('--bg-primary', theme.bgPrimary);
  root.style.setProperty('--bg-secondary', theme.bgSecondary);
  root.style.setProperty('--accent-purple', theme.accentPurple);
  root.style.setProperty('--accent-blue', theme.accentBlue);
  root.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${theme.accentPurple} 0%, ${theme.accentBlue} 100%)`);
  
  // Also sync background gradient colors in other elements dynamically
  const glowGold = document.querySelector('.glow-gold');
  const glowBlue = document.querySelector('.glow-blue');
  if (glowGold) glowGold.style.background = theme.accentPurple;
  if (glowBlue) glowBlue.style.background = theme.accentBlue;
}

// 3. SECTIONS DYNAMIC RENDERERS
function renderPortfolioDOM() {
  applyThemeStyles();
  renderHeroSection();
  renderStatsSection();
  renderAboutSection();
  renderSkillsSection();
  renderProjectsSection();
  renderGallerySection();
  renderToolsSection();
  renderResumeSection();
  renderContactSection();
  renderFooterElements();
  
  // Re-run animation observers and listeners
  initAnimationObservers();
  initTestimonialSlider();
  initContactFormHandler();
}

function renderHeroSection() {
  const container = document.getElementById('home');
  if (!container) return;
  
  const info = portfolio.personalInfo;
  const avatarSrc = info.avatar || './profile.png';
  
  container.innerHTML = `
    <div class="container hero-grid">
      <div class="hero-content reveal active">
        <span class="hero-pretitle">${info.heroPretitle}</span>
        <h1 class="hero-name">${info.name}</h1>
        <h2 class="hero-title">${info.title}</h2>
        <p class="hero-description">${info.heroIntro}</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-solid">Hire Me</a>
          <button id="btnHeroPreviewCV" class="btn btn-primary">Download / Preview CV</button>
          <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      
      <div class="hero-image-container reveal active" style="transition-delay: 0.2s;">
        <div class="hero-image-wrapper">
          <img src="${avatarSrc}" alt="${info.name}" class="hero-image">
        </div>
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
      </div>
    </div>
  `;

  // Attach button event listener
  document.getElementById('btnHeroPreviewCV').addEventListener('click', () => {
    openCVPreviewModal();
  });
}

function renderStatsSection() {
  const container = document.getElementById('stats');
  if (!container) return;
  
  let statsHTML = '';
  portfolio.stats.forEach((stat, index) => {
    statsHTML += `
      <div class="stat-box reveal" style="transition-delay: ${index * 0.05}s;">
        <div class="stat-value">${stat.val}</div>
        <div class="stat-label">${stat.lbl}</div>
      </div>
    `;
  });
  
  container.innerHTML = `
    <div class="container stats-container">
      ${statsHTML}
    </div>
  `;
}

function renderAboutSection() {
  const container = document.getElementById('about');
  if (!container) return;
  
  const info = portfolio.personalInfo;
  
  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Biography</span>
        <h2 class="section-title">About Me</h2>
      </div>
      
      <div class="about-content-single reveal">
        <h3>My Career Objective & Background</h3>
        <p class="about-text">${info.aboutBio.replace(/\n/g, '<br>')}</p>
        
        <div class="about-highlights" style="margin-top: 30px;">
          <div class="highlight-item">
            <svg class="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="highlight-text">Graduation: ${info.qualification}</span>
          </div>
          <div class="highlight-item">
            <svg class="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.996.808H10a2 2 0 012 2v.068a2 2 0 01-.194.884l-.315.63a1 1 0 00-.097.836l.548 2.2a1 1 0 01.037.33v3.18a2 2 0 01-2 2H10a8 8 0 01-8-8V5z"></path>
            </svg>
            <span class="highlight-text">Call: +91 ${info.phone}</span>
          </div>
          <div class="highlight-item">
            <svg class="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="highlight-text">${info.email}</span>
          </div>
          <div class="highlight-item">
            <svg class="highlight-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="highlight-text">${info.location}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSkillsSection() {
  const container = document.getElementById('skills');
  if (!container) return;
  
  let skillsHTML = '';
  portfolio.skills.forEach((skill, index) => {
    // Determine icon based on skill name
    let iconPath = 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2z';
    const lowerName = skill.name.toLowerCase();
    
    if (lowerName.includes('seo') || lowerName.includes('search engine')) {
      iconPath = 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z';
    } else if (lowerName.includes('social') || lowerName.includes('smm') || lowerName.includes('media')) {
      iconPath = 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z';
    } else if (lowerName.includes('content') || lowerName.includes('copywriting')) {
      iconPath = 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z';
    } else if (lowerName.includes('google ads') || lowerName.includes('meta ads') || lowerName.includes('paid search')) {
      iconPath = 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777';
    } else if (lowerName.includes('analytics') || lowerName.includes('ga4')) {
      iconPath = 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
    } else if (lowerName.includes('design') || lowerName.includes('canva') || lowerName.includes('photoshop')) {
      iconPath = 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z';
    }
    
    skillsHTML += `
      <div class="reveal" style="transition-delay: ${index * 0.05}s;">
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-title-group">
              <svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}"></path>
              </svg>
              <span class="skill-name">${skill.name}</span>
            </div>
            <span class="skill-percentage">${skill.level}%</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" data-percent="${skill.level}"></div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Core Assets</span>
        <h2 class="section-title">My Marketing Skills</h2>
      </div>
      <div class="skills-grid">
        ${skillsHTML}
      </div>
    </div>
  `;
}

function renderCertificationsSection() {
  const container = document.getElementById('certifications');
  if (!container) return;
  
  let certsHTML = '';
  portfolio.certificates.forEach((cert, index) => {
    certsHTML += `
      <div class="reveal" style="transition-delay: ${index * 0.05}s;">
        <div class="glass-card cert-card">
          <svg class="cert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <h3 class="cert-title-h3">${cert.name}</h3>
          <p class="cert-subtitle">${cert.issuer}</p>
          <span style="font-size: 11px; color: var(--accent-blue); font-weight:700;">Year: ${cert.year}</span>
          <div>
            <a href="${cert.link}" target="_blank" class="cert-link-btn">Verify Credential &rarr;</a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Verified Skills</span>
        <h2 class="section-title">Certifications</h2>
      </div>
      <div class="services-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
        ${certsHTML}
      </div>
    </div>
  `;
}

function renderProjectsSection() {
  const container = document.getElementById('projects');
  if (!container) return;
  
  let projectsHTML = '';
  portfolio.projects.forEach((proj, index) => {
    // Build stats markup
    let statsHTML = '';
    proj.stats.forEach(stat => {
      let positiveClass = (stat.val && typeof stat.val === 'string' && (stat.val.startsWith('+') || stat.val.endsWith('x'))) ? 'positive' : '';
      statsHTML += `
        <div class="portfolio-stat">
          <div class="portfolio-stat-val ${positiveClass}">${stat.val}</div>
          <div class="portfolio-stat-lbl">${stat.lbl}</div>
        </div>
      `;
    });

    // Preset SVG graphics mapping
    let svgGraphicHTML = '';
    if (proj.preset === 'seo') {
      svgGraphicHTML = `
        <svg class="portfolio-img" viewBox="0 0 400 220" style="background: linear-gradient(135deg, #110729, #020617);">
          <circle cx="200" cy="110" r="50" fill="var(--accent-purple)" opacity="0.3"/>
          <path d="M 50 160 L 120 120 L 190 145 L 260 85 L 330 110 L 370 40" fill="none" stroke="var(--accent-blue)" stroke-width="4"/>
          <circle cx="370" cy="40" r="6" fill="#FFFFFF"/>
          <text x="30" y="45" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12" opacity="0.8">SEO & ANALYTICS CAMPAIGN</text>
        </svg>
      `;
    } else if (proj.preset === 'smm') {
      svgGraphicHTML = `
        <svg class="portfolio-img" viewBox="0 0 400 220" style="background: linear-gradient(135deg, #020617, #0d0f1e);">
          <rect x="80" y="60" width="240" height="110" rx="8" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.05)" stroke-width="2"/>
          <circle cx="150" cy="115" r="28" fill="var(--accent-purple)" opacity="0.7"/>
          <circle cx="200" cy="115" r="28" fill="var(--accent-blue)" opacity="0.6"/>
          <circle cx="250" cy="115" r="28" fill="#10B981" opacity="0.5"/>
          <text x="30" y="45" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12" opacity="0.8">SOCIAL MEDIA CONVERTING FLOWS</text>
        </svg>
      `;
    } else if (proj.preset === 'content') {
      svgGraphicHTML = `
        <svg class="portfolio-img" viewBox="0 0 400 220" style="background: linear-gradient(135deg, #050b18, #160729);">
          <rect x="100" y="50" width="200" height="120" rx="6" fill="rgba(255,255,255,0.01)" stroke="var(--border-glass)"/>
          <line x1="120" y1="80" x2="280" y2="80" stroke="var(--accent-blue)" stroke-width="3"/>
          <line x1="120" y1="105" x2="240" y2="105" stroke="var(--color-primary)" stroke-width="2"/>
          <line x1="120" y1="130" x2="200" y2="130" stroke="var(--color-secondary)" stroke-width="2"/>
          <text x="30" y="40" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12" opacity="0.8">CONTENT MAGNIFYING SEQUENCE</text>
        </svg>
      `;
    } else {
      // Ads preset or default
      svgGraphicHTML = `
        <svg class="portfolio-img" viewBox="0 0 400 220" style="background: linear-gradient(135deg, #15082d, #020617);">
          <rect x="60" y="60" width="280" height="110" rx="8" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.04)"/>
          <rect x="80" y="80" width="120" height="22" rx="4" fill="var(--accent-purple)"/>
          <line x1="80" y1="120" x2="320" y2="120" stroke="var(--accent-blue)" stroke-width="3"/>
          <line x1="80" y1="140" x2="220" y2="140" stroke="#FFFFFF" stroke-width="2" opacity="0.5"/>
          <text x="30" y="45" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="12" opacity="0.8">PAID ADS CAMPAIGN SANDBOX</text>
        </svg>
      `;
    }

    projectsHTML += `
      <div class="reveal" style="transition-delay: ${index * 0.08}s;">
        <div class="glass-card portfolio-card">
          <div class="portfolio-img-wrapper">
            <span class="portfolio-tag">${proj.tag}</span>
            ${svgGraphicHTML}
          </div>
          <div class="portfolio-body">
            <h3 class="portfolio-title">${proj.title}</h3>
            <p class="portfolio-desc">${proj.desc}</p>
            <div style="font-size: 12.5px; margin-bottom: 20px; color: var(--color-secondary);">
              <strong>Tools:</strong> ${proj.tools}
            </div>
            <div class="portfolio-stats-grid">
              ${statsHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Case Studies & Experiments</span>
        <h2 class="section-title">Academic & Practice Projects</h2>
      </div>
      <div class="portfolio-grid">
        ${projectsHTML}
      </div>
    </div>
  `;
}

function renderGallerySection() {
  const container = document.getElementById('gallery');
  if (!container) return;
  
  let galleryHTML = '';
  portfolio.gallery.forEach((item, index) => {
    galleryHTML += `
      <div class="reveal" style="transition-delay: ${index * 0.05}s;">
        <div class="gallery-card" data-index="${index}">
          <div class="gallery-img-wrapper">
            <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-card-category">${item.category}</span>
              <h3 class="gallery-card-title">${item.title}</h3>
              <p class="gallery-card-desc">${item.desc}</p>
              <span class="gallery-card-zoom-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Visual Marketing Assets</span>
        <h2 class="section-title">Creative Works Gallery</h2>
      </div>
      <div class="gallery-grid">
        ${galleryHTML}
      </div>
    </div>
  `;

  // Bind lightbox open triggers
  const cards = container.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'));
      openGalleryPreviewModal(idx);
    });
  });
}

function openGalleryPreviewModal(index) {
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('imgModalGallery');
  const modalCaption = document.getElementById('captionModalGallery');
  if (!modal || !modalImg || !modalCaption) return;
  
  const item = portfolio.gallery[index];
  if (!item) return;
  
  modalImg.src = item.image;
  modalCaption.innerHTML = `<strong>${item.category}</strong> - ${item.title}<br><span style="font-size: 13px; opacity:0.8; margin-top:4px; display:inline-block;">${item.desc}</span>`;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeGalleryPreviewModal() {
  const modal = document.getElementById('galleryModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function initGalleryModalTriggers() {
  const closeBtn = document.getElementById('galleryModalClose');
  const modal = document.getElementById('galleryModal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeGalleryPreviewModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeGalleryPreviewModal();
      }
    });
  }
}

function renderToolsSection() {
  const container = document.getElementById('tools');
  if (!container) return;
  
  let toolsHTML = '';
  portfolio.tools.forEach((tool, index) => {
    toolsHTML += `
      <div class="reveal" style="transition-delay: ${index * 0.04}s;">
        <div class="glass-card tool-card">
          <div class="tool-name-val">${tool.name}</div>
          <div class="tool-desc-val">${tool.desc}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Platform Competencies</span>
        <h2 class="section-title">Tools & Software</h2>
      </div>
      <div class="skills-grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); text-align: center; gap: 20px;">
        ${toolsHTML}
      </div>
    </div>
  `;
}

function renderResumeSection() {
  const container = document.getElementById('resume');
  if (!container) return;
  
  const info = portfolio.personalInfo;
  
  // Build timeline items dynamically
  let timelineHTML = '';
  portfolio.timeline.forEach(item => {
    timelineHTML += `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <span class="timeline-duration">${item.duration}</span>
        <h4 class="timeline-title">${item.title}</h4>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
  });



  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Academic & Professional Timeline</span>
        <h2 class="section-title">Education & Experience</h2>
      </div>
      
      <div class="resume-layout">
        <div class="reveal">
          <h3 style="font-family: var(--font-heading); font-size: 20px; color: var(--color-white); margin-bottom: 24px;">Growth Milestones</h3>
          <div class="resume-timeline">
            ${timelineHTML}
          </div>
        </div>
        
        <div class="resume-sidebar reveal" style="transition-delay: 0.15s;">
          <div class="glass-card resume-card" style="text-align: center;">
            <svg style="width: 44px; height: 44px; color: var(--accent-blue); margin: 0 auto 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h4 class="resume-card-title" style="border:none; padding: 0; margin-bottom: 10px;">Curriculum Vitae</h4>
            <p style="font-size: 13px; color: var(--color-secondary); margin-bottom: 20px;">
              View or download my resume outlining digital campaign credentials, tools proficiency, and marketing objectives.
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
              <button id="btnPreviewCV" class="btn btn-secondary" style="width: 100%;">Preview CV</button>
              <button id="btnDownloadCV" class="btn btn-solid" style="width: 100%;">Download Resume</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // Attach button triggers for CV preview and download
  document.getElementById('btnPreviewCV').addEventListener('click', () => {
    openCVPreviewModal();
  });
  document.getElementById('btnDownloadCV').addEventListener('click', () => {
    downloadCVDocument();
  });
}

function renderContactSection() {
  const container = document.getElementById('contact');
  if (!container) return;
  
  const info = portfolio.personalInfo;
  
  container.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Let's Connect</span>
        <h2 class="section-title">Start a Conversation</h2>
      </div>
      
      <div class="contact-grid">
        <div class="reveal">
          <div class="contact-info-list" style="margin-bottom: 30px;">
            <div class="contact-info-card">
              <div class="contact-info-icon-wrapper">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <div class="contact-info-label">Email Address</div>
                <a href="mailto:${info.email}" class="contact-info-value">${info.email}</a>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="contact-info-icon-wrapper">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.996.808H10a2 2 0 012 2v.068a2 2 0 01-.194.884l-.315.63a1 1 0 00-.097.836l.548 2.2a1 1 0 01.037.33v3.18a2 2 0 01-2 2H10a8 8 0 01-8-8V5z"></path>
                </svg>
              </div>
              <div>
                <div class="contact-info-label">Call / Text</div>
                <a href="tel:${info.phone}" class="contact-info-value">+91 ${info.phone}</a>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="contact-info-icon-wrapper">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8h2.8v-4.87c0-.26.05-.52.12-.7a1.11 1.11 0 0 1 1-.76c.77 0 .93.58.93 1.43v4.9h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 0 0 0 0 2.75M8 18.5v-8H5v8h3z"/>
                </svg>
              </div>
              <div>
                <div class="contact-info-label">LinkedIn Connection</div>
                <a href="${info.linkedin}" target="_blank" class="contact-info-value">Connect on LinkedIn</a>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="contact-info-icon-wrapper">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <div class="contact-info-label">Office Location</div>
                <span class="contact-info-value">${info.location}</span>
              </div>
            </div>
          </div>
          
          <div class="glass-card" style="padding: 24px;">
            <h4 style="font-family: var(--font-heading); font-size: 15px; color: var(--color-white); margin-bottom: 8px;">Opportunities Welcomed</h4>
            <p style="font-size: 13px; color: var(--color-secondary); line-height: 1.6;">
              I am actively looking for internship positions, entry-level specialist roles, and freelance partnerships. Let's design something successful together.
            </p>
          </div>
        </div>
        
        <div class="reveal" style="transition-delay: 0.15s;">
          <div class="glass-card">
            <form id="portfolioContactForm" class="contact-form">
              <div>
                <label for="formName" class="form-label">Full Name *</label>
                <input type="text" id="formName" class="form-input" placeholder="e.g. Hiring Manager" required>
              </div>
              
              <div>
                <label for="formEmail" class="form-label">Email Address *</label>
                <input type="email" id="formEmail" class="form-input" placeholder="e.g. contact@agency.com" required>
              </div>
              
              <div>
                <label for="formService" class="form-label">Marketing Subject</label>
                <select id="formService" class="form-select">
                  <option value="SEO Support">SEO Campaign Setup</option>
                  <option value="Social Media Content">Social Content Strategy</option>
                  <option value="Paid Ad Setup">Meta & Google Paid Campaigns</option>
                  <option value="Entry-level Hiring Inquiry">Graduate Job Recruitment</option>
                </select>
              </div>
              
              <div>
                <label for="formBudget" class="form-label">Trial Scope Target</label>
                <select id="formBudget" class="form-select">
                  <option value="Trial Project">Trial Project Audits</option>
                  <option value="Full-Time Hiring">Full-Time Placement</option>
                  <option value="Consulting Setup">One-off Freelance Strategy</option>
                </select>
              </div>
              
              <div class="form-group-full">
                <label for="formMessageText" class="form-label">Message Details *</label>
                <textarea id="formMessageText" class="form-textarea" placeholder="Outline details of the open digital marketing role or campaign requirements..." required></textarea>
              </div>
              
              <div id="formMessage" class="form-message"></div>
              
              <div class="form-btn-wrapper">
                <button type="submit" class="btn btn-solid">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooterSocials() {
  const container = document.getElementById('footerSocials');
  if (!container) return;
  const info = portfolio.personalInfo;
  
  container.innerHTML = `
    <a href="${info.linkedin}" target="_blank" class="footer-social-link" aria-label="LinkedIn Profile">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8h2.8v-4.87c0-.26.05-.52.12-.7a1.11 1.11 0 0 1 1-.76c.77 0 .93.58.93 1.43v4.9h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 0 0 0 0 2.75M8 18.5v-8H5v8h3z"/>
      </svg>
    </a>
    <a href="${info.instagram}" target="_blank" class="footer-social-link" aria-label="Instagram Profile">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    </a>
  `;
}

function renderFooterElements() {
  renderFooterSocials();
  
  // WhatsApp float floating trigger
  const whatsappContainer = document.getElementById('whatsappFloatContainer');
  if (whatsappContainer) {
    whatsappContainer.innerHTML = `
      <a href="${portfolio.personalInfo.whatsapp}" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.023 14.07 1 11.993 1 6.557 1 2.131 5.37 2.128 10.799c-.001 1.77.476 3.498 1.38 5.048l-.995 3.637 3.534-.93zm8.373-3.377c-.253-.127-1.498-.738-1.73-.822-.232-.085-.401-.127-.57.127-.168.254-.652.822-.799.99-.148.169-.296.19-.55.063-.253-.127-1.07-.394-2.037-1.256-.753-.671-1.26-1.502-1.408-1.756-.148-.254-.016-.392.111-.518.114-.114.254-.296.38-.444.127-.148.17-.254.254-.423.085-.169.042-.317-.02-.444-.064-.127-.57-1.373-.78-1.884-.206-.496-.412-.429-.57-.429-.147-.008-.317-.008-.487-.008-.17 0-.444.064-.677.317-.232.254-.887.867-.887 2.112 0 1.246.908 2.449 1.035 2.618.127.169 1.786 2.727 4.327 3.822.604.261 1.077.417 1.444.534.607.193 1.158.165 1.594.1.486-.072 1.498-.612 1.71-1.204.212-.592.212-1.1.149-1.204-.064-.106-.233-.169-.487-.296z"/>
        </svg>
      </a>
    `;
  }
  
  const copyright = document.getElementById('footerCopyright');
  if (copyright) {
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} ${portfolio.personalInfo.name}. All rights reserved. Premium Dynamic Portfolio Brand Architecture by Antigravity.`;
  }
}

// 4. CV MODAL & DOWNLOAD LOGIC
function openCVPreviewModal() {
  const modal = document.getElementById('cvModal');
  const modalImg = document.getElementById('imgModalCV');
  const modalDl = document.getElementById('btnDownloadCVModal');
  if (!modal || !modalImg) return;
  
  const cvSrc = portfolio.personalInfo.cvFile || './cv.jpg';
  
  modalImg.src = cvSrc;
  modalImg.classList.remove('zoomed');
  if (modalDl) {
    modalDl.href = cvSrc;
  }
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeCVPreviewModal() {
  const modal = document.getElementById('cvModal');
  const modalImg = document.getElementById('imgModalCV');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  if (modalImg) {
    modalImg.classList.remove('zoomed');
  }
}

function downloadCVDocument() {
  const cvSrc = portfolio.personalInfo.cvFile || './cv.jpg';
  const link = document.createElement('a');
  link.href = cvSrc;
  link.download = `${portfolio.personalInfo.name.replace(/\s+/g, '_')}_CV.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Bind static modal close events
function initCVModalTriggers() {
  const closeBtn = document.getElementById('cvModalClose');
  const modal = document.getElementById('cvModal');
  const modalImg = document.getElementById('imgModalCV');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCVPreviewModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeCVPreviewModal();
      }
    });
  }
  
  if (modalImg) {
    modalImg.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent backdrop click close when clicking the image
      modalImg.classList.toggle('zoomed');
    });
  }
}

// 5. ANIMATIONS & LISTENERS RE-BINDING
function initAnimationObservers() {
  // Sticky navbar listener
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Navigation Links highlighting on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Reveal elements on scroll observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.05 });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Skill progress bars animating trigger
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const percent = bar.getAttribute('data-percent');
          if (percent) bar.style.width = percent + '%';
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  if (skillsSection && skillBars.length > 0) {
    skillsObserver.observe(skillsSection);
  }

  // Backup scroll reveal fallbacks
  const triggerRevealFallback = () => {
    revealElements.forEach(element => {
      if (!element.classList.contains('active')) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          element.classList.add('active');
        }
      }
    });
    
    // Skills progress fallback
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        skillBars.forEach(bar => {
          if (!bar.style.width || bar.style.width === '0px' || bar.style.width === '0%') {
            const percent = bar.getAttribute('data-percent');
            if (percent) bar.style.width = percent + '%';
          }
        });
      }
    }
  };
  window.addEventListener('scroll', triggerRevealFallback);
  setTimeout(triggerRevealFallback, 600);
}

// 6. TESTIMONIAL SLIDER INTERACTIVE CONTROLS
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
  const prevBtn = document.querySelector('.slider-btn-prev');
  const nextBtn = document.querySelector('.slider-btn-next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (track && slides.length > 0 && dotsContainer) {
    // Clear old dots first
    dotsContainer.innerHTML = '';
    
    let currentIndex = 0;
    let autoSlideInterval;

    // Create dot circles
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.slider-dot'));

    const goToSlide = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
      }
    };

    if (nextBtn) {
      nextBtn.replaceWith(nextBtn.cloneNode(true));
    }
    if (prevBtn) {
      prevBtn.replaceWith(prevBtn.cloneNode(true));
    }
    
    const newNextBtn = document.querySelector('.slider-btn-next');
    const newPrevBtn = document.querySelector('.slider-btn-prev');

    if (newNextBtn) {
      newNextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
      });
    }

    if (newPrevBtn) {
      newPrevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
      });
    }

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 7000);
    };

    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };

    const sliderContainer = document.querySelector('.testimonial-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    startAutoSlide();
  }
}

// 7. CONTACT FORM VALIDATOR
function initContactFormHandler() {
  const contactForm = document.getElementById('portfolioContactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('formName');
      const emailEl = document.getElementById('formEmail');
      const messageEl = document.getElementById('formMessageText');

      if (!nameEl || !emailEl || !messageEl) return;

      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const message = messageEl.value.trim();

      if (!name || !email || !message) {
        showFormMessage('Required fields (Name, Email, Message) must be filled.', 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage('Please input a valid email address.', 'error');
        return;
      }

      showFormMessage('Submitting query...', 'info');

      // Mock submit latency
      setTimeout(() => {
        showFormMessage(`Thank you, ${name}! Your request has been sent. I will get back to you shortly.`, 'success');
        contactForm.reset();
      }, 1500);
    });
  }

  const showFormMessage = (text, type) => {
    if (!formMessage) return;

    formMessage.textContent = text;
    formMessage.className = 'form-message'; // Clear classes

    if (type === 'success') {
      formMessage.classList.add('success');
    } else if (type === 'error') {
      formMessage.classList.add('error');
    } else {
      formMessage.style.display = 'block';
      formMessage.style.background = 'rgba(0, 240, 255, 0.08)';
      formMessage.style.border = '1px solid var(--accent-blue)';
      formMessage.style.color = 'var(--accent-blue)';
    }
  };
}

// 8. MOBILE HEADER MENU
function initMobileMenuTrigger() {
  const toggle = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.nav-link');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }
}

// ==========================================
// 9. ADMIN PANEL CMS ENGINE CONTROLLER
// ==========================================
function initAdminPanelController() {
  const adminLink = document.getElementById('footerAdminLink');
  const authBackdrop = document.getElementById('adminAuthBackdrop');
  const authCancel = document.getElementById('adminAuthCancelBtn');
  const authUnlock = document.getElementById('adminAuthSubmitBtn');
  const passcodeField = document.getElementById('adminPasscodeField');
  const authError = document.getElementById('adminAuthError');
  
  const dashboardPanel = document.getElementById('adminDashboardPanel');
  const dashboardExit = document.getElementById('adminBtnExit');
  const dashboardReset = document.getElementById('adminBtnReset');
  const dashboardSave = document.getElementById('adminBtnSave');
  
  // Tab panes selector triggers
  const menuItems = document.querySelectorAll('.admin-menu-item');
  const tabPanes = document.querySelectorAll('.admin-tab-pane');

  // Trigger login backdrop open
  if (adminLink) {
    adminLink.addEventListener('click', () => {
      passcodeField.value = '';
      authError.style.display = 'none';
      authBackdrop.style.display = 'flex';
      passcodeField.focus();
    });
  }

  // Cancel authorization modal
  if (authCancel) {
    authCancel.addEventListener('click', () => {
      authBackdrop.style.display = 'none';
    });
  }

  // Submit password unlocking
  const handleUnlock = () => {
    // PASSCODE RULE: admin123
    if (passcodeField.value === 'admin123') {
      authError.style.display = 'none';
      authBackdrop.style.display = 'none';
      openAdminDashboard();
    } else {
      authError.style.display = 'block';
      passcodeField.focus();
    }
  };

  if (authUnlock) {
    authUnlock.addEventListener('click', handleUnlock);
  }
  if (passcodeField) {
    passcodeField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUnlock();
    });
  }

  // Switch tabs in sidebar navigation
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      item.classList.add('active');
      const tabId = item.getAttribute('data-tab');
      const targetPane = document.getElementById(tabId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Exit CMS dashboard without saving
  if (dashboardExit) {
    dashboardExit.addEventListener('click', () => {
      if (confirm('Discard any unsaved changes and close the panel?')) {
        dashboardPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reload fresh data to discard any temporary adjustments
        loadPortfolioData();
        applyThemeStyles();
      }
    });
  }

  // Save changes callback
  if (dashboardSave) {
    dashboardSave.addEventListener('click', () => {
      saveCmsDataToState();
      savePortfolioData();
      renderPortfolioDOM();
      
      dashboardPanel.style.display = 'none';
      document.body.style.overflow = 'auto';
      alert('Portfolio modifications saved successfully!');
    });
  }

  // Reset portfolio to developer default presets
  if (dashboardReset) {
    dashboardReset.addEventListener('click', () => {
      if (confirm('Are you sure you want to restore all portfolio items and styling to default settings? This cannot be undone.')) {
        portfolio = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        savePortfolioData();
        renderPortfolioDOM();
        
        dashboardPanel.style.display = 'none';
        document.body.style.overflow = 'auto';
        alert('All portfolio records restored to developer defaults.');
      }
    });
  }

  // Listeners for skill list CMS ranges
  const rangeInput = document.getElementById('newSkillPercent');
  const rangeBubble = document.getElementById('skillPercentBubble');
  if (rangeInput && rangeBubble) {
    rangeInput.addEventListener('input', () => {
      rangeBubble.textContent = rangeInput.value + '%';
    });
  }

  // Add items callbacks
  const addSkillBtn = document.getElementById('btnAddNewSkill');
  if (addSkillBtn) {
    addSkillBtn.addEventListener('click', addCmsSkillToList);
  }

  const addCertBtn = document.getElementById('btnAddNewCert');
  if (addCertBtn) {
    addCertBtn.addEventListener('click', addCmsCertToList);
  }

  const addToolBtn = document.getElementById('btnAddNewTool');
  if (addToolBtn) {
    addToolBtn.addEventListener('click', addCmsToolToList);
  }

  const saveProjBtn = document.getElementById('btnSaveProject');
  if (saveProjBtn) {
    saveProjBtn.addEventListener('click', saveCmsProject);
  }

  const cancelProjEditBtn = document.getElementById('btnCancelEditProject');
  if (cancelProjEditBtn) {
    cancelProjEditBtn.addEventListener('click', cancelCmsProjectEdit);
  }

  // File Upload base64 binding
  initCmsFileUploads();

  const saveGalBtn = document.getElementById('btnSaveGalleryItem');
  if (saveGalBtn) {
    saveGalBtn.addEventListener('click', saveCmsGalleryItem);
  }
  
  const cancelGalEditBtn = document.getElementById('btnCancelEditGalleryItem');
  if (cancelGalEditBtn) {
    cancelGalEditBtn.addEventListener('click', cancelGalleryItemEdit);
  }
  
  initCmsGalleryUploads();
}

function openAdminDashboard() {
  const panel = document.getElementById('adminDashboardPanel');
  if (!panel) return;
  
  // Freeze background scrolling
  document.body.style.overflow = 'hidden';
  panel.style.display = 'flex';
  
  // Fill text fields from current state
  const info = portfolio.personalInfo;
  document.getElementById('admName').value = info.name;
  document.getElementById('admTitle').value = info.title;
  document.getElementById('admHeroIntro').value = info.heroIntro;
  document.getElementById('admAboutBio').value = info.aboutBio;
  document.getElementById('admQualification').value = info.qualification;
  document.getElementById('admLocation').value = info.location;
  document.getElementById('admPhone').value = info.phone;
  document.getElementById('admEmail').value = info.email;
  document.getElementById('admLinkedIn').value = info.linkedin;
  document.getElementById('admInstagram').value = info.instagram;

  // Fill stats fields
  for (let i = 1; i <= 4; i++) {
    const stat = portfolio.stats[i - 1];
    if (stat) {
      document.getElementById(`admStatVal${i}`).value = stat.val;
      document.getElementById(`admStatLbl${i}`).value = stat.lbl;
    }
  }

  // File uploads presets
  const previewAvatar = document.getElementById('previewAvatar');
  const previewCV = document.getElementById('previewCV');
  if (previewAvatar) {
    previewAvatar.src = info.avatar || './profile.png';
    previewAvatar.style.display = 'block';
  }
  if (previewCV) {
    previewCV.src = info.cvFile || './cv.jpg';
    previewCV.style.display = 'block';
  }

  // Sync CMS lists
  renderCmsSkillsList();
  renderCmsCertsList();
  renderCmsProjectsList();
  renderCmsToolsList();
  renderCmsGalleryList();

  // Sync Theme Color customizer inputs
  const theme = portfolio.theme;
  document.getElementById('themeColorBg').value = theme.bgPrimary;
  document.getElementById('themeColorBgHex').textContent = theme.bgPrimary.toUpperCase();
  
  document.getElementById('themeColorBgSec').value = theme.bgSecondary;
  document.getElementById('themeColorBgSecHex').textContent = theme.bgSecondary.toUpperCase();

  document.getElementById('themeColorAccentPurple').value = theme.accentPurple;
  document.getElementById('themeColorAccentPurpleHex').textContent = theme.accentPurple.toUpperCase();

  document.getElementById('themeColorAccentBlue').value = theme.accentBlue;
  document.getElementById('themeColorAccentBlueHex').textContent = theme.accentBlue.toUpperCase();

  // Draw theme presets buttons
  drawCmsThemePresets();
  initCmsThemeColorPickers();
}

function saveCmsDataToState() {
  const info = portfolio.personalInfo;
  info.name = document.getElementById('admName').value.trim();
  info.title = document.getElementById('admTitle').value.trim();
  info.heroIntro = document.getElementById('admHeroIntro').value.trim();
  info.aboutBio = document.getElementById('admAboutBio').value.trim();
  info.qualification = document.getElementById('admQualification').value.trim();
  info.location = document.getElementById('admLocation').value.trim();
  info.phone = document.getElementById('admPhone').value.trim();
  info.email = document.getElementById('admEmail').value.trim();
  info.linkedin = document.getElementById('admLinkedIn').value.trim();
  info.instagram = document.getElementById('admInstagram').value.trim();
  
  // Custom contacts sync triggers
  info.whatsapp = `https://wa.me/91${info.phone.replace(/[^0-9]/g, '')}`;

  // Save metrics stats values
  portfolio.stats = [];
  for (let i = 1; i <= 4; i++) {
    const val = document.getElementById(`admStatVal${i}`).value.trim();
    const lbl = document.getElementById(`admStatLbl${i}`).value.trim();
    portfolio.stats.push({ val, lbl });
  }

  // Theme values
  const theme = portfolio.theme;
  theme.bgPrimary = document.getElementById('themeColorBg').value;
  theme.bgSecondary = document.getElementById('themeColorBgSec').value;
  theme.accentPurple = document.getElementById('themeColorAccentPurple').value;
  theme.accentBlue = document.getElementById('themeColorAccentBlue').value;
}

// CMS FILE UPLOADS TO BASE64
function initCmsFileUploads() {
  const avatarInput = document.getElementById('uploadAvatarInput');
  const cvInput = document.getElementById('uploadCVInput');
  const previewAvatar = document.getElementById('previewAvatar');
  const previewCV = document.getElementById('previewCV');

  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 1024 * 1024) {
          alert('Profile image size should not exceed 1MB.');
          avatarInput.value = '';
          return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
          portfolio.personalInfo.avatar = evt.target.result;
          if (previewAvatar) {
            previewAvatar.src = evt.target.result;
            previewAvatar.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (cvInput) {
    cvInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 1.5 * 1024 * 1024) {
          alert('CV document size should not exceed 1.5MB.');
          cvInput.value = '';
          return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
          portfolio.personalInfo.cvFile = evt.target.result;
          if (previewCV) {
            previewCV.src = evt.target.result;
            previewCV.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

// SKILLS CMS LIST ACTIONS
function renderCmsSkillsList() {
  const listContainer = document.getElementById('admSkillsList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  portfolio.skills.forEach((skill, index) => {
    const row = document.createElement('div');
    row.className = 'cms-item-row';
    row.innerHTML = `
      <div class="cms-item-info">
        <span class="cms-item-name">${skill.name}</span>
        <span class="cms-item-detail">Proficiency: ${skill.level}%</span>
      </div>
      <div class="cms-item-actions">
        <button class="cms-action-btn btn-delete" data-index="${index}">Delete</button>
      </div>
    `;
    
    // Attach deletion trigger
    row.querySelector('.btn-delete').addEventListener('click', () => {
      portfolio.skills.splice(index, 1);
      renderCmsSkillsList();
    });
    
    listContainer.appendChild(row);
  });
}

function addCmsSkillToList() {
  const nameInput = document.getElementById('newSkillName');
  const percentInput = document.getElementById('newSkillPercent');
  if (!nameInput || !percentInput) return;
  
  const name = nameInput.value.trim();
  const level = parseInt(percentInput.value);
  
  if (!name) {
    alert('Please enter a skill name.');
    return;
  }
  
  portfolio.skills.push({ name, level });
  nameInput.value = '';
  percentInput.value = 85;
  document.getElementById('skillPercentBubble').textContent = '85%';
  
  renderCmsSkillsList();
}

// TOOLS CMS LIST ACTIONS
function renderCmsToolsList() {
  const listContainer = document.getElementById('admToolsList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  portfolio.tools.forEach((tool, index) => {
    const row = document.createElement('div');
    row.className = 'cms-item-row';
    row.innerHTML = `
      <div class="cms-item-info">
        <span class="cms-item-name">${tool.name}</span>
        <span class="cms-item-detail">${tool.desc}</span>
      </div>
      <div class="cms-item-actions">
        <button class="cms-action-btn btn-delete" data-index="${index}">Delete</button>
      </div>
    `;
    
    // Attach deletion trigger
    row.querySelector('.btn-delete').addEventListener('click', () => {
      portfolio.tools.splice(index, 1);
      renderCmsToolsList();
    });
    
    listContainer.appendChild(row);
  });
}

function addCmsToolToList() {
  const nameInput = document.getElementById('newToolName');
  const descInput = document.getElementById('newToolDesc');
  if (!nameInput || !descInput) return;
  
  const name = nameInput.value.trim();
  const desc = descInput.value.trim();
  
  if (!name || !desc) {
    alert('Please enter a tool abbreviation and full name.');
    return;
  }
  
  portfolio.tools.push({ name, desc });
  nameInput.value = '';
  descInput.value = '';
  
  renderCmsToolsList();
}

// GALLERY CMS ACTIONS
function renderCmsGalleryList() {
  const listContainer = document.getElementById('admGalleryList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  portfolio.gallery.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'cms-item-row';
    row.innerHTML = `
      <div class="cms-item-info">
        <span class="cms-item-name">${item.title}</span>
        <span class="cms-item-detail">${item.category}</span>
      </div>
      <div class="cms-item-actions">
        <button class="cms-action-btn btn-edit" data-index="${index}">Edit</button>
        <button class="cms-action-btn btn-delete" data-index="${index}">Delete</button>
      </div>
    `;
    
    row.querySelector('.btn-edit').addEventListener('click', () => {
      loadGalleryItemIntoForm(index);
    });
    
    row.querySelector('.btn-delete').addEventListener('click', () => {
      portfolio.gallery.splice(index, 1);
      renderCmsGalleryList();
    });
    
    listContainer.appendChild(row);
  });
}

function loadGalleryItemIntoForm(index) {
  const item = portfolio.gallery[index];
  if (!item) return;
  
  document.getElementById('editGalleryIndex').value = index;
  document.getElementById('galTitle').value = item.title;
  document.getElementById('galCategory').value = item.category;
  document.getElementById('galDesc').value = item.desc;
  document.getElementById('galImageBase64').value = item.image;
  
  const preview = document.getElementById('previewGalImage');
  if (preview) {
    preview.src = item.image;
    preview.style.display = 'block';
  }
  
  document.getElementById('galleryFormHeader').textContent = 'Edit Creative: ' + item.title;
  document.getElementById('btnCancelEditGalleryItem').style.display = 'inline-flex';
}

function cancelGalleryItemEdit() {
  document.getElementById('editGalleryIndex').value = '';
  document.getElementById('galTitle').value = '';
  document.getElementById('galCategory').value = 'Poster';
  document.getElementById('galDesc').value = '';
  document.getElementById('galImageBase64').value = '';
  
  const preview = document.getElementById('previewGalImage');
  if (preview) {
    preview.style.display = 'none';
  }
  
  document.getElementById('galleryFormHeader').textContent = 'Add New Creative Work';
  document.getElementById('btnCancelEditGalleryItem').style.display = 'none';
}

function saveCmsGalleryItem() {
  const title = document.getElementById('galTitle').value.trim();
  const category = document.getElementById('galCategory').value;
  const desc = document.getElementById('galDesc').value.trim();
  const image = document.getElementById('galImageBase64').value;
  
  if (!title || !desc) {
    alert('Please enter a title and description.');
    return;
  }
  
  if (!image) {
    alert('Please upload an image for this creative.');
    return;
  }
  
  const itemObj = { title, category, desc, image };
  const editIndexVal = document.getElementById('editGalleryIndex').value;
  
  if (editIndexVal !== '') {
    // Edit existing
    const index = parseInt(editIndexVal);
    portfolio.gallery[index] = itemObj;
  } else {
    // Add new
    portfolio.gallery.push(itemObj);
  }
  
  cancelGalleryItemEdit();
  renderCmsGalleryList();
}

function initCmsGalleryUploads() {
  const galInput = document.getElementById('uploadGalInput');
  const preview = document.getElementById('previewGalImage');
  const hiddenBase64 = document.getElementById('galImageBase64');
  
  if (galInput) {
    galInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 1.5 * 1024 * 1024) {
          alert('Creative image size should not exceed 1.5MB.');
          galInput.value = '';
          return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
          hiddenBase64.value = evt.target.result;
          if (preview) {
            preview.src = evt.target.result;
            preview.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

// CERTIFICATES CMS ACTIONS
function renderCmsCertsList() {
  const listContainer = document.getElementById('admCertsList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  portfolio.certificates.forEach((cert, index) => {
    const row = document.createElement('div');
    row.className = 'cms-item-row';
    row.innerHTML = `
      <div class="cms-item-info">
        <span class="cms-item-name">${cert.name}</span>
        <span class="cms-item-detail">Issuer: ${cert.issuer} • Year: ${cert.year}</span>
      </div>
      <div class="cms-item-actions">
        <button class="cms-action-btn btn-delete" data-index="${index}">Delete</button>
      </div>
    `;
    
    row.querySelector('.btn-delete').addEventListener('click', () => {
      portfolio.certificates.splice(index, 1);
      renderCmsCertsList();
    });
    
    listContainer.appendChild(row);
  });
}

function addCmsCertToList() {
  const nameInput = document.getElementById('newCertName');
  const issuerInput = document.getElementById('newCertIssuer');
  const linkInput = document.getElementById('newCertLink');
  const yearInput = document.getElementById('newCertYear');
  
  if (!nameInput || !issuerInput || !linkInput || !yearInput) return;
  
  const name = nameInput.value.trim();
  const issuer = issuerInput.value.trim();
  const link = linkInput.value.trim() || 'https://google.com';
  const year = yearInput.value.trim() || new Date().getFullYear().toString();
  
  if (!name || !issuer) {
    alert('Please enter the certificate name and issuer.');
    return;
  }
  
  portfolio.certificates.push({ name, issuer, link, year });
  
  // Clear forms
  nameInput.value = '';
  issuerInput.value = '';
  linkInput.value = '';
  yearInput.value = '';
  
  renderCmsCertsList();
}

// PROJECTS CMS ACTIONS
function renderCmsProjectsList() {
  const listContainer = document.getElementById('admProjectsList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  portfolio.projects.forEach((proj, index) => {
    const row = document.createElement('div');
    row.className = 'cms-item-row';
    row.innerHTML = `
      <div class="cms-item-info">
        <span class="cms-item-name">${proj.title}</span>
        <span class="cms-item-detail">${proj.tag} • Tools: ${proj.tools}</span>
      </div>
      <div class="cms-item-actions">
        <button class="cms-action-btn btn-edit" data-index="${index}">Edit</button>
        <button class="cms-action-btn btn-delete" data-index="${index}">Delete</button>
      </div>
    `;
    
    row.querySelector('.btn-edit').addEventListener('click', () => {
      loadProjectIntoForm(index);
    });
    
    row.querySelector('.btn-delete').addEventListener('click', () => {
      portfolio.projects.splice(index, 1);
      renderCmsProjectsList();
    });
    
    listContainer.appendChild(row);
  });
}

function loadProjectIntoForm(index) {
  const proj = portfolio.projects[index];
  if (!proj) return;
  
  activeCmsProjectIndex = index;
  
  document.getElementById('editProjectIndex').value = index;
  document.getElementById('projTitle').value = proj.title;
  document.getElementById('projTag').value = proj.tag;
  document.getElementById('projDesc').value = proj.desc;
  document.getElementById('projTools').value = proj.tools;
  document.getElementById('projImagePreset').value = proj.preset;
  
  // Stats mapping
  document.getElementById('projStatVal1').value = proj.stats[0] ? proj.stats[0].val : '';
  document.getElementById('projStatLbl1').value = proj.stats[0] ? proj.stats[0].lbl : '';
  
  document.getElementById('projStatVal2').value = proj.stats[1] ? proj.stats[1].val : '';
  document.getElementById('projStatLbl2').value = proj.stats[1] ? proj.stats[1].lbl : '';
  
  document.getElementById('projStatVal3').value = proj.stats[2] ? proj.stats[2].val : '';
  document.getElementById('projStatLbl3').value = proj.stats[2] ? proj.stats[2].lbl : '';
  
  document.getElementById('projectFormHeader').textContent = 'Edit Project: ' + proj.title;
  document.getElementById('btnCancelEditProject').style.display = 'inline-flex';
}

function cancelCmsProjectEdit() {
  activeCmsProjectIndex = null;
  document.getElementById('editProjectIndex').value = '';
  document.getElementById('projTitle').value = '';
  document.getElementById('projTag').value = '';
  document.getElementById('projDesc').value = '';
  document.getElementById('projTools').value = '';
  document.getElementById('projImagePreset').value = 'seo';
  
  document.getElementById('projStatVal1').value = '';
  document.getElementById('projStatLbl1').value = '';
  document.getElementById('projStatVal2').value = '';
  document.getElementById('projStatLbl2').value = '';
  document.getElementById('projStatVal3').value = '';
  document.getElementById('projStatLbl3').value = '';
  
  document.getElementById('projectFormHeader').textContent = 'Create New Project';
  document.getElementById('btnCancelEditProject').style.display = 'none';
}

function saveCmsProject() {
  const title = document.getElementById('projTitle').value.trim();
  const tag = document.getElementById('projTag').value.trim();
  const desc = document.getElementById('projDesc').value.trim();
  const tools = document.getElementById('projTools').value.trim();
  const preset = document.getElementById('projImagePreset').value;
  
  const stats = [
    {
      val: document.getElementById('projStatVal1').value.trim() || 'KPI',
      lbl: document.getElementById('projStatLbl1').value.trim() || 'Result Metric'
    },
    {
      val: document.getElementById('projStatVal2').value.trim() || 'KPI',
      lbl: document.getElementById('projStatLbl2').value.trim() || 'Result Metric'
    },
    {
      val: document.getElementById('projStatVal3').value.trim() || 'KPI',
      lbl: document.getElementById('projStatLbl3').value.trim() || 'Result Metric'
    }
  ];
  
  if (!title || !tag || !desc) {
    alert('Project Title, Category, and Strategy Description are required.');
    return;
  }
  
  const projectObj = { title, tag, desc, tools, preset, stats };
  
  if (activeCmsProjectIndex !== null) {
    // Updating existing
    portfolio.projects[activeCmsProjectIndex] = projectObj;
  } else {
    // Creating new
    portfolio.projects.push(projectObj);
  }
  
  cancelCmsProjectEdit();
  renderCmsProjectsList();
}

// DYNAMIC THEME CMS HANDLERS
function drawCmsThemePresets() {
  const container = document.getElementById('themePresetsGrid');
  if (!container) return;
  
  container.innerHTML = '';
  Object.keys(THEME_PRESETS).forEach(key => {
    const preset = THEME_PRESETS[key];
    const isSelected = portfolio.theme.preset === key;
    
    const card = document.createElement('div');
    card.className = `theme-preset-card ${isSelected ? 'active' : ''}`;
    card.setAttribute('data-preset-key', key);
    card.innerHTML = `
      <span style="font-size:12px; font-weight:600;">${preset.name}</span>
      <div class="preset-colors-preview">
        <div class="color-dot" style="background: ${preset.bgPrimary};"></div>
        <div class="color-dot" style="background: ${preset.accentPurple};"></div>
        <div class="color-dot" style="background: ${preset.accentBlue};"></div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      // Set active preset
      document.querySelectorAll('.theme-preset-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      portfolio.theme.preset = key;
      portfolio.theme.bgPrimary = preset.bgPrimary;
      portfolio.theme.bgSecondary = preset.bgSecondary;
      portfolio.theme.accentPurple = preset.accentPurple;
      portfolio.theme.accentBlue = preset.accentBlue;
      
      // Update custom swatches inputs
      document.getElementById('themeColorBg').value = preset.bgPrimary;
      document.getElementById('themeColorBgHex').textContent = preset.bgPrimary.toUpperCase();
      
      document.getElementById('themeColorBgSec').value = preset.bgSecondary;
      document.getElementById('themeColorBgSecHex').textContent = preset.bgSecondary.toUpperCase();

      document.getElementById('themeColorAccentPurple').value = preset.accentPurple;
      document.getElementById('themeColorAccentPurpleHex').textContent = preset.accentPurple.toUpperCase();

      document.getElementById('themeColorAccentBlue').value = preset.accentBlue;
      document.getElementById('themeColorAccentBlueHex').textContent = preset.accentBlue.toUpperCase();
      
      // Apply theme styles immediately to preview behind
      applyThemeStyles();
    });
    
    container.appendChild(card);
  });
}

function initCmsThemeColorPickers() {
  const pickers = [
    { input: 'themeColorBg', label: 'themeColorBgHex', prop: 'bgPrimary' },
    { input: 'themeColorBgSec', label: 'themeColorBgSecHex', prop: 'bgSecondary' },
    { input: 'themeColorAccentPurple', label: 'themeColorAccentPurpleHex', prop: 'accentPurple' },
    { input: 'themeColorAccentBlue', label: 'themeColorAccentBlueHex', prop: 'accentBlue' }
  ];

  pickers.forEach(p => {
    const el = document.getElementById(p.input);
    const lbl = document.getElementById(p.label);
    
    if (el && lbl) {
      el.addEventListener('input', () => {
        const hex = el.value.toUpperCase();
        lbl.textContent = hex;
        portfolio.theme[p.prop] = el.value;
        portfolio.theme.preset = 'custom';
        
        // Remove active preset card triggers
        document.querySelectorAll('.theme-preset-card').forEach(c => c.classList.remove('active'));
        
        // Apply theme styles in real-time
        applyThemeStyles();
      });
    }
  });
}

// 10. ENTRY WRAPPER AND BOOTSTRAPPING
function initPortfolioApp() {
  loadPortfolioData();
  renderPortfolioDOM();
  initCVModalTriggers();
  initGalleryModalTriggers();
  initMobileMenuTrigger();
  initAdminPanelController();
  
  // Flag indicating app initialized successfully
  window.portfolioInitialized = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
  initPortfolioApp();
}
