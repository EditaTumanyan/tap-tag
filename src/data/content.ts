export type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  long: string;
  points: string[];
};

export const businessServices: ServiceItem[] = [
  { num: "01", title: "Marketing Strategy & Growth Planning",
    desc: "Roadmaps and campaign planning for scalable business growth.",
    long: "TapTag develops custom digital marketing strategies tailored to your business goals. Our multi-channel approach combines Armenian innovation with US market insights, covering Facebook, Instagram, TikTok, LinkedIn, Google Ads, YouTube, email, and app marketing channels. We analyze the market, competitors, and audience behaviors to design step-by-step growth roadmaps with measurable KPIs, ensuring campaigns are strategic, targeted, and results-driven.",
    points: ["Multi-channel digital strategy", "Market & competitor audits", "Campaign planning and forecasting", "KPI setup & monitoring"] },
  { num: "02", title: "Targeting & PPC Advertising",
    desc: "High-performance campaigns that turn clicks into customers with measurable ROI.",
    long: "We deliver precision-targeted advertising campaigns across Facebook, Instagram, TikTok, LinkedIn, Google Search & Display, YouTube, and App Store Ads. TapTag manages creative design, audience targeting, budget allocation, and optimization to maximize conversions. We also handle App Store Optimization (ASO) and app campaign targeting, helping your mobile apps gain visibility and downloads.",
    points: ["Facebook & Instagram Ads", "TikTok & LinkedIn campaigns", "Google Search, Display & YouTube Ads", "App Store Ads & ASO", "Retargeting & audience segmentation"] },
  { num: "03", title: "Social Media Management",
    desc: "Strategy, content, and community management to keep your brand relevant and engaging.",
    long: "TapTag provides full-service social media management on Facebook, Instagram, TikTok, LinkedIn, and YouTube. We create, schedule, and manage content while engaging your audience to build loyal communities and strengthen your brand voice. Our strategies combine creativity with analytics, helping your social presence grow sustainably.",
    points: ["Daily posting & content scheduling", "Community management & engagement", "Platform-specific growth strategies", "Social media KPI tracking and analytics"] },
  { num: "04", title: "Content Creation",
    desc: "Visuals, video, and storytelling that drive engagement and virality.",
    long: "We produce high-quality content for social and digital platforms, including video, photography, graphics, and copywriting. Our content is designed to stop the scroll, engage audiences, and achieve viral reach, with proven success on Instagram Reels, TikTok, and YouTube. Each campaign is aligned with your marketing strategy to maximize visibility, shares, and platform recommendations.",
    points: ["Video production & motion graphics", "Photography & visual storytelling", "Copywriting & brand messaging", "Viral content & recommendation-focused creatives"] },
  { num: "05", title: "Influencer Marketing",
    desc: "Connecting your business with the right creators to boost visibility and trust.",
    long: "TapTag identifies and collaborates with influencers who align with your brand values, whether on Instagram, TikTok, or YouTube. We handle selection, outreach, campaign coordination, and performance tracking, ensuring your message reaches the right audience with credibility and impact. This service amplifies your brand, drives engagement, and helps convert social influence into measurable business results.",
    points: ["Influencer research & selection", "Campaign planning & coordination", "Performance tracking & reporting", "Cross-platform influencer strategy"] },
  { num: "06", title: "SEO & Search Strategy",
    desc: "Optimizing your digital presence so the right customers find you at the right time.",
    long: "TapTag implements full-service SEO strategies, including on-page, off-page, and technical SEO to increase visibility in Google and Bing. We target the right keywords to attract qualified traffic and boost conversions, tailoring strategies for both local Armenian and US/global markets.",
    points: ["Keyword research & strategy", "On-page & technical SEO", "Content optimization for search", "SEO performance tracking"] },
  { num: "07", title: "Market Research & Audits",
    desc: "Data-driven insights to understand competitors and sharpen your positioning.",
    long: "Our market research goes beyond demographics. We analyze competitors’ strategies, digital presence, performance metrics, and positioning to identify opportunities and threats. TapTag shows you where your business stands, who your main competitors are, and how to outperform them. These insights inform strategy, campaigns, content, and overall brand positioning in both Armenian and US markets.",
    points: ["Competitor benchmarking & positioning", "Audience segmentation & personas", "Market trend analysis", "SWOT & GAP audits"] },
  { num: "08", title: "Analytics & Conversion Optimization",
    desc: "Tracking performance, improving funnels, and maximizing ROI.",
    long: "We implement advanced analytics and conversion tracking across social media, Google Ads, TikTok, LinkedIn, and your website. Using real-time data, we optimize campaigns, landing pages, and funnels to improve performance. Our insights help you make informed decisions and continuously increase ROI.",
    points: ["Funnel & conversion optimization", "KPI tracking & dashboard setup", "A/B testing for campaigns & landing pages", "Monthly performance reporting"] },
  { num: "09", title: "Web & Digital Development",
    desc: "Fast, scalable websites and digital platforms built to support your business goals.",
    long: "TapTag builds high-performance websites, landing pages, and mobile apps designed for speed, usability, and conversion. Platforms are fully integrated with social media, paid ads, email marketing, analytics, and app stores. From UI/UX design to development, we ensure your digital presence is fast, engaging, and scalable.",
    points: ["Website & landing page development", "Mobile app development", "UI/UX design & optimization", "E-commerce & platform integration", "Performance & scalability optimization"] },
];

export const artistServices: ServiceItem[] = [
  { num: "01", title: "Artist Branding & Positioning Strategy",
    desc: "Building powerful personal brands for musicians and public figures.",
    long: "TapTag develops artist branding strategies that define your image, sound, and message. We position you clearly in the market so fans, labels, and partners instantly understand who you are and what you represent. This foundation drives your music marketing, PR, and content success.",
    points: ["Brand identity & positioning", "Messaging & storytelling", "Visual direction & consistency", "Long-term brand strategy"] },
  { num: "02", title: "Social Media Management for Artists & Creators",
    desc: "Professional social media growth for artists and public figures.",
    long: "We manage your presence on Instagram, TikTok, YouTube, and Facebook with strategies built for artists. From daily content planning to audience engagement and analytics, we help musicians grow real fanbases, increase visibility, and stay culturally relevant.",
    points: ["Content planning & scheduling", "Audience engagement & moderation", "Growth strategy & analytics", "Platform-specific optimization"] },
  { num: "03", title: "YouTube Growth & Monetization",
    desc: "Turning music videos into views, fans, and income.",
    long: "We optimize your YouTube channel for music discovery, watch time, and monetization. TapTag sets up YouTube monetization, improves your titles, thumbnails, and channel structure, and helps your videos reach recommendation pages and new audiences worldwide.",
    points: ["Channel setup & optimization", "Titles, thumbnails & structure", "YouTube monetization setup", "Audience growth strategy"] },
  { num: "04", title: "Creative Direction & Content Production",
    desc: "High-impact visuals and storytelling for artists.",
    long: "TapTag directs and produces content for music and creator platforms including reels, TikToks, YouTube videos, and visual campaigns. Our creative team aligns your artistic identity with digital trends so your content both looks cinematic and performs algorithmically.",
    points: ["Creative concepts & storytelling", "Video direction & production", "Reels, TikToks & YouTube formats", "Campaign-based visual content"] },
  { num: "05", title: "Music Marketing, Distribution & Paid Promotion",
    desc: "Launching your music globally with strategy and scale.",
    long: "We support your releases across Spotify, Apple Music, YouTube Music, and other platforms. From pre-release campaigns to paid promotion, TapTag helps your songs reach the right listeners and build real streaming momentum.",
    points: ["Full release strategy & rollout planning (pre-release, release day, post-release)", "Professional distribution support", "Smart audience targeting & paid promotion", "Coordinated cross-platform growth campaigns"] },
  { num: "06", title: "Influencer & Creator Collaborations",
    desc: "Boosting songs through the right voices.",
    long: "TapTag runs creator campaigns on TikTok and Instagram, connecting your tracks with relevant influencers to spark organic reach and trend potential. We manage selection, coordination, and performance tracking.",
    points: ["Influencer research & selection", "Collaboration planning", "Campaign coordination", "Performance tracking"] },
  { num: "07", title: "Artist Platform Verification & Profile Setup",
    desc: "Claiming and verifying your presence.",
    long: "We help artists get verified and fully set up on major platforms including YouTube Official Artist Channel, TikTok Artist Tab, Spotify for Artists, and Apple Music for Artists. This gives you access to analytics, audience data, and performance insights.",
    points: ["YouTube Official Artist Channel setup", "TikTok Artist Tab & verification", "Spotify for Artists & Apple Music setup", "Platform analytics access"] },
  { num: "08", title: "Rights, Royalties & Revenue Protection",
    desc: "Protecting your music and maximizing your income.",
    long: "TapTag helps artists register their works globally and collect performance royalties. We support publishing setup, rights management, and royalty tracking so your music earns from radio, TV, clubs, and digital platforms worldwide. Artists keep 100% of their revenue from monetization and distribution.",
    points: ["Publishing & rights registration", "Royalty collection & tracking", "Revenue protection strategy", "Global performance rights setup"] },
];

export const consultingItems = [
  "Business & Brand Diagnostics", "Market & Positioning Strategy", "Growth & Monetization Planning",
  "Campaign & Budget Architecture", "Personal / Artist Brand Advisory", "Global Market Entry Strategy",
];

export const featureBoxes = [
  { icon: "chart", title: "Strategic Brand Growth", desc: "We build long-term value through precious targeting and market analysis, scaling your brand across Armenian and US market" },
  { icon: "pen", title: "Data-Driven Content", desc: "We engineer digital narratives and visionary content that command attention and transform your digital presence into a powerhouse" },
  { icon: "target", title: "Targeted Advertising", desc: "Maximize your reach with high-performance ad campaigns designed to convert. We focus on measurable ROI and surgical precision in every market." },
  { icon: "gear", title: "Full-Service Management", desc: "From Social Media Marketing to daily operations, we provide a comprehensive digital presence so you can focus on running your business." },
  { icon: "code", title: "Digital Development & Innovation", desc: "We build high-performance websites and digital tools that don’t just look good — they convert. Our development team ensures your platform is fast, scalable, and ready for the global market." },
  { icon: "search", title: "Performance Analytics", desc: "Get real results backed by transparent data. We provide deep-dive analytics to track your growth and optimize for constant improvement." },
];

export const stats = [
  { value: "10+", raw: 10, unit: "Years", label: "Digital marketing & media experience" },
  { value: "70+", raw: 70, unit: "Celebrities", label: "Artists & public figures managed" },
  { value: "300+", raw: 300, unit: "Businesses", label: "Brands & companies grown" },
  { value: "50+", raw: 50, unit: "Students", label: "Every year" },
];

export const reviews = [1, 2, 3, 4, 5].map((n) => ({
  slot: `review-${n}`, quote: "Add client quote here.", name: "Client name", role: "Role, Company",
}));

export type CourseLevel = {
  title: string;
  goal: string;
  bullets: string[];
};

export type Course = {
  num: string;
  audience: string;
  price: string;
  duration: string;
  name: string;
  desc: string;
  cta: string;
  levels: CourseLevel[];
};

export const courses: Course[] = [
  { num: "01", audience: "For Career Seekers", price: "$349", duration: "12 weeks", name: "The Professional Path", desc: "Get the skills you need to start a new career. We teach you exactly how to become a Social Media Marketer and work with top brands.", cta: "Explore Career Levels",
    levels: [
      { title: "Level 1: Social Media Marketing (Beginner / Foundation)", goal: "The Goal: Learn organic growth, content creation, engagement, basic ads, and analytics on Facebook, Instagram, and TikTok.", bullets: [
        "Introduction to Platforms & Algorithms: Understand how Facebook, Instagram, and TikTok show content to the right audience and how organic reach works.",
        "Social Media Setup & Management: Learn to set up optimized profiles, create posting schedules, and manage accounts efficiently across Facebook, Instagram, and TikTok.",
        "Content Creation: Hands-on creation of engaging Instagram Reels, Stories, and TikTok videos that capture attention and build audience engagement.",
        "Content Creation Tools: Use Canva, CapCut, and AI tools to design professional posts and videos without advanced technical skills.",
        "Basic Advertising: Introduction to boosted posts and simple ad account setup to understand the basics of paid social media campaigns.",
        "Audience Engagement & Community Building: Learn how to interact with followers, respond to comments, and create polls and interactive stories to grow a loyal community.",
        "Intro to Analytics & Insights: Get familiar with Instagram Insights, TikTok Analytics, and Facebook Insights to understand which posts are performing and why.",
        "Intro to Influencer Marketing: Learn what influencer marketing is, why it matters, and how brands and artists use it for growth.",
      ] },
      { title: "Level 2: Complete Digital Marketing Course", goal: "The Goal: Build on your social media foundation to become a full-stack digital marketer capable of managing campaigns across multiple platforms, analyzing performance, and executing professional-level marketing strategies.", bullets: [
        "Advanced Social Media Advertising: Facebook, Instagram, TikTok — advanced campaign setup, funnels, targeting, optimization, and scaling, plus ad performance monitoring and ROI tracking.",
        "YouTube Marketing & Monetization: Channel optimization, content strategy, and YouTube monetization setup — driving views, subscribers, and audience engagement for business or creative growth.",
        "Google Ecosystem: Google My Business optimization for local visibility, Google Ads fundamentals (search, display, remarketing), and introduction-level App Store Optimization (ASO).",
        "SEO & Search Strategy: Basics of on-page SEO, keyword research, and search engine visibility, and how search marketing integrates with content strategy.",
        "Affiliate, Influencer & Product Marketing: Leveraging influencer collaborations on Instagram, TikTok, and YouTube, plus affiliate marketing and product placement strategies that drive measurable conversions.",
        "Marketing Analytics & Performance Measurement: Reading KPIs, conversion tracking, and analytics dashboards, and using data to optimize campaigns across social media, YouTube, and Google Ads.",
        "Integrated Marketing Strategy: Planning campaigns that combine social media, paid ads, search, SEO, and influencer marketing into a consistent omnichannel strategy.",
        "Career & Professional Prep: Portfolio building with real campaign case studies, client management, reporting, pricing services, and freelancing guidance.",
      ] },
      { title: "Level 3: The Full-Stack Marketer (Advanced + Strategy)", goal: "The Goal: Become the “Lead” who can handle everything and manage clients.", bullets: [
        "Integrated Strategy: How to make SMM and Ads work together for a big launch.",
        "Client Communication: How to onboard a new client, send reports, and keep them happy.",
        "Portfolio & Personal Brand: Building your own professional website/portfolio to get hired.",
        "The Business of Freelancing: Pricing your services, contracts, and finding international clients.",
      ] },
    ] },
  { num: "02", audience: "For Business Owners", price: "$279", duration: "8 weeks", name: "The Entrepreneur Path", desc: "Take your business to the next level with a hands-on digital marketing course for entrepreneurs. Learn the strategies, tools, and tactics TapTag uses to attract customers, grow your brand, and scale your business online. This course is designed for both small businesses and large enterprises looking to expand their digital presence and drive measurable results.", cta: "View Business Modules",
    levels: [
      { title: "Level 1: The Small Business Starter (Foundation)", goal: "The Goal: Professionalize your digital presence and start selling.", bullets: [
        "Page Infrastructure: Setting up Instagram, Facebook, and TikTok for a business (not a personal) look.",
        "Daily Management: How to create a content calendar and post consistently without getting overwhelmed.",
        "Lite Advertising: Introduction to “Boost Post” and basic targeting to get local customers.",
        "Customer Care: Managing DMs and comments to close sales.",
      ] },
      { title: "Level 2: The Corporate Growth Expert (Advanced)", goal: "The Goal: Build a high-performance sales machine with deep technical data.", bullets: [
        "The “Commerce” Setup: Activating Facebook/Instagram Shopping and catalog management.",
        "Deep Advertising: Full Ads Manager structure — campaigns, sets, and creative testing.",
        "Technical Mastery: Implementation of Meta Pixel, Conversion API (CAPI), and SDK to track every dram spent.",
        "Data & Policy: Deep analytics and navigating Meta’s strict policies to avoid ad account bans.",
        "Analytics & Campaign Optimization: Track KPIs such as engagement, conversions, reach, and ROI; analyze social media, ads, and Google My Business data to make informed decisions; and optimize campaigns and content for maximum results.",
      ] },
    ] },
  { num: "03", audience: "For Artists & Managers", price: "$399", duration: "10 weeks", name: "The Industry Path", desc: "Grow your music career or manage artists professionally with TapTag’s hands-on digital marketing training for the music industry. Learn how to build a fanbase, promote releases, and create a global presence using Instagram, TikTok, YouTube, Spotify, Apple Music, and more.", cta: "Access Artist Training",
    levels: [
      { title: "Core Training Modules", goal: "The six areas every artist and manager trains on.", bullets: [
        "Artist Branding & Positioning: Define your identity, visual style, and message to stand out in the music industry.",
        "Social Media Growth & Content Strategy: Build fanbases using Instagram, TikTok, and Facebook with engaging content, trends, and tools.",
        "YouTube Optimization & Monetization: Turn videos into views, fans, and revenue with smart channel and content strategy.",
        "Music Marketing, Distribution & Paid Promotion: Plan and execute pre-release, release, and post-release campaigns for singles, EPs, and albums.",
        "Influencer & Creator Collaborations: Use TikTok, Instagram, and YouTube creators to boost reach and trend potential.",
        "Analytics & Performance Tracking: Use data to understand your audience and grow smarter with every release.",
      ] },
      { title: "Section 1: Artist Brand & Presence (The Foundation)", goal: "The Goal: Build a professional digital image and a loyal community before the music even drops.", bullets: [
        "Social Media Brand Architecture: Training on setting up Instagram, TikTok, and Facebook with a “Celebrity-level” aesthetic and professional structure.",
        "YouTube Channel Mastery: Learning essential SEO tools and management settings to turn your channel into a discovery machine.",
        "Community & Fanbase Management: Mastering the psychology of digital loyalty — learning how to move people from “Casual Listeners” to “Superfans.”",
        "Engagement Strategies: The exact “How-to” on talking to your audience, managing the hype, and maintaining a consistent persona.",
        "The Artist’s Toolkit: A guide to the best design and AI tools for artists to create high-end content without a massive production team.",
      ] },
      { title: "Section 2: Music Marketing & Distribution (The Professional)", goal: "The Goal: Master the business of a release — from claiming official profiles to collecting royalties.", bullets: [
        "Artist Page Ownership: Step-by-step training on claiming and verifying Spotify for Artists, Apple Music, and TikTok Artist accounts.",
        "Digital Distribution & Revenue: Education on how music gets on stores and how to track and collect royalties and monetization.",
        "The 3-Phase Release Strategy: Pre-Release teasers and pre-save campaigns, Release Day algorithm spikes, and Post-Release momentum.",
        "The Viral Blueprint: Learning proven tactics for creating viral “hooks” and challenges that force the algorithm to take notice.",
        "Music-Specific Advertising: Mastering high-performance ads specifically designed to drive streams and monthly listeners.",
      ] },
      { title: "Section 3: Strategic Consulting & Analytics (The Executive)", goal: "The Goal: Direct guidance from TapTag experts to manage a high-profile career using data and proven results.", bullets: [
        "Deep Business Analytics: We provide a professional audit of your career level and teach you how to compare your data to global industry benchmarks.",
        "The Strategic Roadmap: A custom-built 6-12 month growth plan developed through 1-on-1 sessions with TapTag’s lead experts.",
        "Proven Agency Insights: We share our internal “Success Formulas” and guide you through the exact strategies we use for our celebrity clients.",
        "Team & Management Training: We train your personal management team or PR staff to execute elite marketing strategies independently.",
        "Business Research: Detailed analysis of your current market position to move your brand from local success to international recognition.",
      ] },
    ] },
];

export const courseAccents: Record<string, { accent: string; panel: string; shadow: string }> = {
  "01": { accent: "#f97316", panel: "#fff7ed", shadow: "rgba(249,115,22,0.5)" },
  "02": { accent: "#f97316", panel: "#fff7ed", shadow: "rgba(249,115,22,0.5)" },
  "03": { accent: "#f97316", panel: "#fff7ed", shadow: "rgba(249,115,22,0.5)" },
};

export const standards = [
  { label: "Online & Offline", detail: "Join live from anywhere, or in person in Yerevan." },
  { label: "Flexible Custom Schedule", detail: "We build the days and times around your life." },
  { label: "EN / ARM", detail: "Every level taught in English or Armenian." },
  { label: "TapTag Certificate", detail: "Issued on completion, backed by our agency work." },
];

export const addons = [
  { title: "Agency-Ready Audit", desc: "Bring your own project, song, or business. We will personally review it and give you a professional audit before you graduate." },
  { title: "Lifetime Resource Vault", desc: "Get exclusive access to our internal agency templates: ad checklists, content calendars, and contract samples that we use at TapTag." },
  { title: "The TapTag Community", desc: "Join our private network of students and pros. Network, share jobs, and grow together even after the training ends." },
];

export const faqs = [
  { q: "Do I need any previous experience?", a: "Not at all. We have levels designed specifically for absolute beginners to help you start from zero." },
  { q: "How does the flexible schedule work?", a: "Once you choose a path, our team contacts you within 24 hours to find the best days and times that work for your life." },
  { q: "Is the training online or in person?", a: "Both! You can choose the comfort of Online sessions (Live) or the energy of Offline, face-to-face learning." },
];

export type PortfolioProject = {
  slot: string;
  cat: string;
  tag: string;
  name: string;
  desc: string;
  metrics: { v: string; l: string }[];
};

export const pfCategories = ["All", "Performance Ads", "Social & Content", "Artist Campaigns", "Web & Product"];

export const pfProjects: PortfolioProject[] = [
  { slot: "pf-1", cat: "Performance Ads", tag: "Retail · Yerevan", name: "Nairi Home Store",
    desc: "Rebuilt the Meta ads account around catalog sales and cut wasted spend across three campaign tiers.",
    metrics: [{ v: "4.8x", l: "ROAS" }, { v: "−38%", l: "Cost per sale" }, { v: "12k", l: "Orders" }] },
  { slot: "pf-2", cat: "Artist Campaigns", tag: "Music · US / AM", name: "ANNI Release Rollout",
    desc: "Three-phase single launch: pre-save push, release-day algorithm spike, then sustained playlist pitching.",
    metrics: [{ v: "2.1M", l: "Streams" }, { v: "+64%", l: "Monthly listeners" }, { v: "18", l: "Playlists" }] },
  { slot: "pf-3", cat: "Social & Content", tag: "Hospitality · Yerevan", name: "Kond Coffee Roasters",
    desc: "Monthly content system with in-house shoots, a fixed grid rhythm and community management in two languages.",
    metrics: [{ v: "+210%", l: "Engagement" }, { v: "31k", l: "New followers" }, { v: "4.2%", l: "Save rate" }] },
  { slot: "pf-4", cat: "Web & Product", tag: "B2B SaaS · US", name: "Loopwise Dashboard",
    desc: "Designed and shipped the marketing site and onboarding flow, then instrumented the funnel end to end.",
    metrics: [{ v: "1.4s", l: "Load time" }, { v: "+27%", l: "Trial signups" }, { v: "92", l: "Lighthouse" }] },
  { slot: "pf-5", cat: "Performance Ads", tag: "E-commerce · US", name: "Verta Skincare",
    desc: "Full-funnel prospecting and retargeting with creative testing cycles run every two weeks.",
    metrics: [{ v: "6.2x", l: "ROAS" }, { v: "$14", l: "CPA" }, { v: "+83%", l: "Repeat rate" }] },
  { slot: "pf-6", cat: "Artist Campaigns", tag: "Music · Global", name: "Davit K. YouTube Growth",
    desc: "Channel restructure, SEO on the full back catalogue, and a shorts strategy feeding the long-form uploads.",
    metrics: [{ v: "480k", l: "Subscribers" }, { v: "9.7M", l: "Views" }, { v: "+141%", l: "Watch time" }] },
];

export const team = [
  { slot: "team-1", name: "Tatev Khachatryan", role: "CEO, Founder", photo: "/assets/team-tatev-khachatryan.jpg" },
  { slot: "team-2", name: "David Miroyan", role: "LA Partner, Creative Director", photo: "/assets/team-david-miroyan.jpg" },
  { slot: "team-3", name: "Mariam Gyozalian", role: "Digital Marketing Specialist", photo: "/assets/team-mariam-gyozalian.jpg" },
  { slot: "team-4", name: "Aza Martoyan", role: "Digital Marketing Specialist", photo: "/assets/team-aza-martoyan.jpg" },
  { slot: "team-5", name: "Mane Sargsyan", role: "Graphic Designer", photo: "/assets/team-mane-sargsyan.jpg" },
  { slot: "team-6", name: "Edita Tumanyan", role: "Lead Developer", photo: "/assets/edita-tumanyan.jpg" },
];

export const certs = [
  { name: "Meta Certified Media Buying Professional", img: "media-buying", available: true },
  { name: "Meta Certified Media Planning Professional", img: "media-planning", available: true },
  { name: "Meta Certified AI and Performance Marketing Specialist", img: "ai-performance", available: true },
  { name: "Meta Certified Creative Strategy Professional", img: "creative-strategy", available: true },
].map((c) => ({ ...c, src: `/assets/cert-${c.img}.png`, issuer: "Meta" }));

export const coreValues = [
  { title: "Precision", desc: "Every campaign, every asset, and every dollar is measured against real performance data." },
  { title: "Global Reach", desc: "We operate at the intersection of the Armenian and US markets, built for growth beyond borders." },
  { title: "Creative Rigor", desc: "Bold ideas, backed by strategy — content that performs as well as it looks." },
  { title: "Transparency", desc: "Clear reporting and honest guidance, from strategy to execution." },
];

export const audienceOptions = [
  { label: "Business", value: "business" },
  { label: "Artist / Celebrity", value: "artist" },
  { label: "Prospective Student", value: "student" },
];

export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "courses", label: "Courses", href: "/courses" },
  { key: "about", label: "About Us", href: "/about" },
];

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
