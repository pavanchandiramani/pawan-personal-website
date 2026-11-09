import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    slug: "android-applications",
    number: "01",
    category: "APPLICATION DEVELOPMENT",
    title: "Android Applications",
    description: "A collection of Android app experiments and builds, with a focus on practical features and user experience.",
    status: "Add app details",
    tags: ["Android", "APK", "Product thinking"],
    detail: "This project space is for Android applications and prototypes. Add the app name, the problem it solves, screenshots, supported Android versions and a verified APK download link before publishing."
  },
  {
    slug: "mumbai-tax-rush",
    number: "02",
    category: "GAME DEVELOPMENT",
    title: "Mumbai Tax Rush",
    description: "A mobile game project exploring gameplay, interface design and the process of packaging an application for Android.",
    status: "Project showcase",
    tags: ["Game project", "UI", "Android"],
    detail: "Use this page to explain the game's concept, core gameplay loop, controls, screenshots and what you learned while building and testing the Android version. Add a download link only after checking the APK is safe and ready to share."
  },
  {
    slug: "data-and-business-analysis",
    number: "03",
    category: "ANALYSIS & RESEARCH",
    title: "Data & Business Analysis",
    description: "A space for analytical work, data exploration and business-focused projects.",
    status: "Add case studies",
    tags: ["Excel", "R", "Business research"],
    detail: "Add selected analytical projects here. For each one, explain the question, dataset or source, method, key findings and limitations. Avoid publishing private or confidential business information."
  }
];

function Icon({ children }) { return <span className="icon" aria-hidden="true">{children}</span>; }

function Header() {
  const [open, setOpen] = React.useState(false);
  return <header className="header">
    <a className="brand" href="/" aria-label="Pawan Chandiramani home"><span className="brand-mark">P.</span><span>PAWAN CHANDIRAMANI</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "✕" : "☰"}</button>
    <nav className={open ? "nav nav-open" : "nav"} onClick={() => setOpen(false)}>
      <a href="/#about">About</a><a href="/#work">Work</a><a href="/#experience">Experience</a><a href="/#contact">Contact</a>
      <a className="nav-cta" href="/#contact">Let's connect <span>↗</span></a>
    </nav>
  </header>;
}

function Eyebrow({ children }) { return <div className="eyebrow"><span className="eyebrow-dot"></span>{children}</div>; }

function Portrait() {
  return <div className="portrait-wrap">
    <div className="portrait-frame">
      <img src="/images/profile.jpg" alt="Portrait of Pawan Chandiramani" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.classList.add("portrait-placeholder"); }} />
      <div className="portrait-fallback"><span>PC</span><small>ADD YOUR PHOTO</small></div>
    </div>
    <div className="portrait-note"><span className="note-line"></span><span>Curious by nature. Driven by ideas.</span></div>
  </div>;
}

function Hero() {
  return <section className="hero section-shell">
    <div className="hero-copy">
      <Eyebrow>ENTREPRENEURSHIP · BUSINESS · IDEAS</Eyebrow>
      <h1>Building ideas.<br/><em>Exploring business.</em><br/>Creating impact.</h1>
      <p className="hero-intro">I'm <strong>Pawan Chandiramani</strong> — an entrepreneur and business enthusiast interested in strategy, innovation, technology and turning ideas into meaningful projects.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↗</span></a><a className="button button-quiet" href="#about">A little about me <span>↓</span></a></div>
      <div className="hero-meta"><span><i></i> BASED IN NAGPUR, INDIA</span><span>OPEN TO LEARNING & COLLABORATION</span></div>
    </div>
    <Portrait />
    <div className="hero-index">01 <span>/</span> PERSONAL PORTFOLIO</div>
  </section>;
}

function SectionHeading({ kicker, title, text }) {
  return <div className="section-heading"><Eyebrow>{kicker}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function About() {
  return <section id="about" className="section section-shell">
    <div className="about-grid">
      <SectionHeading kicker="A LITTLE ABOUT ME" title={<>Curiosity is where<br/><em>good work begins.</em></>} />
      <div className="about-copy">
        <p className="lead">I'm currently pursuing a Bachelor of Computer Applications (BCA), while exploring my interests in entrepreneurship, business management and technology.</p>
        <p>I enjoy understanding how businesses work, exploring new ideas, participating in initiatives and building digital projects. I'm especially interested in the space where business thinking, data and technology meet.</p>
        <p>This website is a growing record of the projects, experiences and lessons that shape my journey.</p>
        <a className="text-link" href="#experience">More about my journey <span>↗</span></a>
      </div>
    </div>
    <div className="interest-strip">
      <div><span>01</span><strong>Entrepreneurship</strong><small>Ideas, initiative & value creation</small></div>
      <div><span>02</span><strong>Business</strong><small>Strategy, operations & markets</small></div>
      <div><span>03</span><strong>Technology</strong><small>Digital products & experimentation</small></div>
      <div><span>04</span><strong>Learning</strong><small>Curiosity & continuous growth</small></div>
    </div>
  </section>;
}

function Work() {
  return <section id="work" className="section section-muted">
    <div className="section-shell">
      <div className="work-heading"><SectionHeading kicker="SELECTED WORK" title={<>Ideas made<br/><em>tangible.</em></>} text="A selection of projects and experiments. Each project page can grow with screenshots, learnings and verified demos."/><span className="section-count">03 <small>PROJECT SPACES</small></span></div>
      <div className="project-grid">
        {projects.map((p) => <a className="project-card" href={`/projects/${p.slug}`} key={p.slug}>
          <div className="project-top"><span>{p.number} / {p.category}</span><span className="arrow-circle">↗</span></div>
          <div className="project-art"><div className="art-orbit"></div><div className="art-label">{p.number}</div><div className="art-caption">{p.category}</div></div>
          <div className="project-info"><div className="project-status">{p.status}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-link">View project <span>↗</span></div></div>
        </a>)}
      </div>
    </div>
  </section>;
}

function Experience() {
  return <section id="experience" className="section section-shell">
    <SectionHeading kicker="EXPERIENCE & INITIATIVES" title={<>Learning by<br/><em>getting involved.</em></>} text="Experiences that have helped me learn through people, projects and practical involvement." />
    <div className="timeline">
      <div className="timeline-item"><div className="timeline-date">BUSINESS EXPOSURE</div><div><h3>Retail business experience</h3><p>Learning about day-to-day business operations, customer interaction and the practical realities of running a retail business.</p></div><span className="timeline-mark">↗</span></div>
      <div className="timeline-item"><div className="timeline-date">VOLUNTEERING</div><div><h3>Make A Difference (MAD)</h3><p>Volunteering in educational activities with children, supporting learning through regular teaching sessions.</p></div><span className="timeline-mark">↗</span></div>
      <div className="timeline-item"><div className="timeline-date">STUDENT INITIATIVES</div><div><h3>Competitions & public speaking</h3><p>Participating in student events, presentations, data-focused activities and discussions around business and public issues.</p></div><span className="timeline-mark">↗</span></div>
    </div>
  </section>;
}

function Skills() {
  const groups = [
    ["BUSINESS & MANAGEMENT", "Entrepreneurship", "Business strategy", "Problem solving", "Communication"],
    ["ANALYTICAL INTERESTS", "Excel", "Data analysis", "Market research", "Business research"],
    ["DIGITAL & TECHNOLOGY", "HTML & CSS", "JavaScript", "R", "Tableau"]
  ];
  return <section className="section section-dark"><div className="section-shell">
    <SectionHeading kicker="SKILLS & INTERESTS" title={<>A toolkit in<br/><em>progress.</em></>} text="A snapshot of areas I'm learning, practising and exploring. This list will evolve as I gain more experience."/>
    <div className="skills-grid">{groups.map((g,i)=><div className="skill-group" key={g[0]}><span className="skill-number">0{i+1}</span><h3>{g[0]}</h3><div className="skill-list">{g.slice(1).map(s=><span key={s}>{s}</span>)}</div></div>)}</div>
  </div></section>;
}

function Highlights() {
  return <section className="section section-shell">
    <div className="highlight-grid">
      <div><SectionHeading kicker="BEYOND THE SCREEN" title={<>Ideas grow through<br/><em>experience.</em></>} text="I value experiences that challenge how I think, help me collaborate and expose me to different perspectives."/></div>
      <div className="highlight-list">
        <div><span>01</span><p><strong>Student events</strong><small>Business, technology and analytical competitions</small></p></div>
        <div><span>02</span><p><strong>Public speaking</strong><small>Discussion, presentation and communication</small></p></div>
        <div><span>03</span><p><strong>Community involvement</strong><small>Volunteering and supporting education</small></p></div>
      </div>
    </div>
  </section>;
}

function Contact() {
  return <section id="contact" className="contact-section"><div className="section-shell contact-inner">
    <Eyebrow>HAVE AN IDEA OR OPPORTUNITY?</Eyebrow>
    <h2>Let's make<br/><em>something meaningful.</em></h2>
    <p>I'm always interested in learning, exchanging ideas and connecting with people working on interesting things.</p>
    <div className="contact-actions"><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">Email me <span>↗</span></a><a className="button button-outline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
    <small className="contact-reminder">Before launch: replace the placeholder email and LinkedIn link with your real professional profiles.</small>
  </div></section>;
}

function Footer() {
  return <footer className="footer section-shell"><a className="brand" href="/"><span className="brand-mark">P.</span><span>PAWAN CHANDIRAMANI</span></a><span>© {new Date().getFullYear()} Pawan Chandiramani. Built with curiosity.</span><a href="#top">BACK TO TOP ↑</a></footer>;
}

function Home() {
  React.useEffect(() => { document.title = "Pawan Chandiramani | Entrepreneur & Business Enthusiast"; }, []);
  return <><div id="top"><Header/><main><Hero/><div className="hero-rule"></div><About/><Work/><Experience/><Skills/><Highlights/><Contact/></main><Footer/></div></>;
}

function ProjectPage() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const project = projects.find(p => p.slug === slug);
  React.useEffect(() => { document.title = project ? `${project.title} | Pawan Chandiramani` : "Project not found | Pawan Chandiramani"; }, [project]);
  if (!project) return <><Header/><main className="not-found section-shell"><Eyebrow>404 / NOT FOUND</Eyebrow><h1>This page isn't here <em>yet.</em></h1><a className="button button-primary" href="/">Back to homepage ↗</a></main><Footer/></>;
  return <><Header/><main className="project-detail section-shell">
    <a className="back-link" href="/#work">← Back to selected work</a>
    <Eyebrow>{project.category}</Eyebrow><div className="detail-number">{project.number}</div>
    <h1>{project.title}<em>.</em></h1><p className="detail-lead">{project.description}</p>
    <div className="detail-panel"><div className="detail-art"><span>{project.number}</span><small>PROJECT OVERVIEW</small></div><div className="detail-copy"><span className="project-status">{project.status}</span><h2>Overview</h2><p>{project.detail}</p><h3>Areas involved</h3><div className="tag-row">{project.tags.map(t=><span key={t}>{t}</span>)}</div><div className="detail-note">Project details, screenshots and download links will be added once the project materials are finalized.</div></div></div>
    <div className="detail-bottom"><a className="text-link" href="/#contact">Discuss a project <span>↗</span></a><a className="text-link" href="/#work">Explore other work <span>↗</span></a></div>
  </main><Footer/></>;
}

function App() {
  return window.location.pathname.startsWith("/projects/") ? <ProjectPage/> : <Home/>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
