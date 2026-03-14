//@ts-ignore

import { useEffect, useRef, useState } from "react";



function StarField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 120; i++) {
      stars.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, r: Math.random() * 1.2 + 0.3, op: Math.random() * 0.6 + 0.1, sp: Math.random() * 2 + 1.5, t: Math.random() * Math.PI * 2 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.t += 0.008;
        const o = s.op * (0.6 + 0.4 * Math.sin(s.t * s.sp));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,223,255,${o})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas id="starfield" ref={canvasRef} />;
}

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, animId;
    const move = e => { mx = e.clientX; my = e.clientY; if (cursorRef.current) { cursorRef.current.style.left = mx + "px"; cursorRef.current.style.top = my + "px"; } };
    const anim = () => { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; } animId = requestAnimationFrame(anim); };
    document.addEventListener("mousemove", move);
    anim();
    const over = () => { if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(2.5)"; cursorRef.current.style.background = "#F4A835"; } };
    const out  = () => { if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";   cursorRef.current.style.background = "var(--cyan)"; } };
    const els = document.querySelectorAll("button,a,.step,.feat-card");
    els.forEach(el => { el.addEventListener("mouseenter", over); el.addEventListener("mouseleave", out); });
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(animId); };
  }, []);
  return (<><div className="cursor" ref={cursorRef} /><div className="cursor-ring" ref={ringRef} /></>);
}

function LogoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="14" rx="10" ry="3.8" fill="none" stroke="#4AABF0" strokeWidth="1.3" transform="rotate(-8 14 14)" />
      <ellipse cx="14" cy="14" rx="7"  ry="2.5" fill="none" stroke="#F4A835" strokeWidth="1"   transform="rotate(20 14 14)" />
      <circle cx="14" cy="14" r="4.5" fill="#141414" stroke="#4AABF0" strokeWidth="1.4" />
      <circle cx="22.8" cy="11.8" r="2"   fill="#F4A835" />
      <circle cx="6.2"  cy="16.5" r="1.5" fill="#4AABF0" />
    </svg>
  );
}

function Globe() {
  return (
    <div className="hero-globe">
      <div className="globe-wrap">
        <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyanGrad" x1="20" y1="130" x2="240" y2="130">
              <stop offset="0%"   stopColor="#4AABF0" stopOpacity="0.1" />
              <stop offset="30%"  stopColor="#4AABF0" stopOpacity="0.8" />
              <stop offset="70%"  stopColor="#4AABF0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4AABF0" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="amberGrad" x1="45" y1="108" x2="215" y2="152">
              <stop offset="0%"   stopColor="#F4A835" stopOpacity="0.1" />
              <stop offset="40%"  stopColor="#F4A835" stopOpacity="0.7" />
              <stop offset="60%"  stopColor="#F4A835" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#F4A835" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="130" cy="130" r="125" stroke="rgba(74,171,240,0.06)" strokeWidth="1" />
          <g className="ring-1">
            <ellipse cx="130" cy="130" rx="110" ry="30" stroke="url(#cyanGrad)" strokeWidth="1.5" />
            <circle cx="240" cy="130" r="6" fill="#4AABF0" />
          </g>
          <g className="ring-2">
            <ellipse cx="130" cy="130" rx="85" ry="22" stroke="url(#amberGrad)" strokeWidth="1.2" transform="rotate(20 130 130)" />
            <circle cx="208" cy="102" r="4.5" fill="#F4A835" />
          </g>
          <circle cx="130" cy="130" r="52" fill="#0F0F0F" stroke="#4AABF0" strokeWidth="1.8" />
          <ellipse cx="130" cy="130" rx="52" ry="13" fill="none" stroke="rgba(74,171,240,0.2)" strokeWidth="1" />
          <ellipse cx="114" cy="122" rx="14" ry="9" fill="rgba(74,171,240,0.08)" transform="rotate(-15 114 122)" />
          <ellipse cx="142" cy="136" rx="10" ry="6"  fill="rgba(130,226,192,0.08)" transform="rotate(10 142 136)" />
          <circle cx="68" cy="148" r="3.5" fill="#82E2C0" />
        </svg>
        <div className="orbit-label l1">94% match</div>
        <div className="orbit-label l2">Live scraping</div>
      </div>
    </div>
  );
}

export default function OrbitHomepage() {
  const [email, setEmail] = useState("");

  return (
    <div id="orbit-root">
      
      <Cursor />
      <StarField />

      {/* NAV */}
      <nav className="orbit-nav">
        <div className="nav-logo">
          <LogoIcon />
          <span className="nav-logo-text">ORBIT</span>
        </div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#platforms">Platforms</a>
        </div>
        <button className="nav-cta">Get early access</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow"><span className="eyebrow-dot" /> AI-powered job matching</div>
        <h1 className="hero-title">Your career,<br /><em>precisely</em> mapped.</h1>
        <p className="hero-title-sub">Every orbit finds its star.</p>
        <p className="hero-sub">Upload your CV. Orbit scrapes thousands of job listings across every major platform and surfaces only what actually fits — with a match score, skill gap analysis, and real-time stats.</p>
        <div className="hero-actions">
          <button className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload your CV
          </button>
          <button className="btn-secondary">See how it works</button>
        </div>
        <Globe />
        <div className="stats-bar">
          <div className="stat-block"><div className="stat-num">12<span>K+</span></div><div className="stat-desc">Jobs scanned daily</div></div>
          <div className="stat-block"><div className="stat-num">8</div><div className="stat-desc">Platforms covered</div></div>
          <div className="stat-block"><div className="stat-num">94<span>%</span></div><div className="stat-desc">Avg top match score</div></div>
          <div className="stat-block"><div className="stat-num">2<span>min</span></div><div className="stat-desc">From CV to matches</div></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="orbit-section" id="how">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Three steps to your <em>next role.</em></h2>
        <div className="steps">
          {[
            { num:"01", color:"var(--cyan)",  icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4AABF0" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>, title:"Upload your CV", desc:"Drop your PDF. Our AI parses your experience, skills, seniority level, and preferred sectors in seconds." },
            { num:"02", color:"var(--amber)", icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4A835" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>, title:"Orbit scans the web", desc:"We scrape LinkedIn, Indeed, Glassdoor and 5 more platforms in real-time, matching every listing against your profile." },
            { num:"03", color:"var(--green)", icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#82E2C0" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title:"Get your match score", desc:"Every job gets a % match score, a skill gap breakdown, and salary insights. Apply with one click, directly from the dashboard." },
          ].map(s => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num} —</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-name">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              <div className="step-accent" style={{ background: s.color }} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="orbit-section" id="features" style={{ paddingTop: 0 }}>
        <div className="section-label">Features</div>
        <h2 className="section-title">Everything you need<br /><em>nothing you don't.</em></h2>
        <div className="features">
          <div className="feat-card">
            <span className="feat-tag c">Smart matching</span>
            <div className="feat-title">Real-time job matching</div>
            <div className="feat-desc">Every listing scored against your CV. Updated every 4 minutes across all platforms.</div>
            <div className="mini-matches">
              {[{co:"#F4A835",role:"Senior Product Designer",company:"Spotify · Milano · Remote",score:"94%",sc:"#F4A835"},{co:"#4AABF0",role:"UX Designer Lead",company:"Aruba · Roma · Hybrid",score:"88%",sc:"#4AABF0"},{co:"#4AABF0",role:"Product Designer",company:"Satispay · Milano",score:"82%",sc:"#4AABF0"}].map((m,i) => (
                <div className="mini-match" key={i}>
                  <div className="mm-dot" style={{ background: m.co }} />
                  <div><div className="mm-role">{m.role}</div><div className="mm-co">{m.company}</div></div>
                  <div className="mm-score" style={{ color: m.sc }}>{m.score}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="feat-card">
            <span className="feat-tag a">Skill analysis</span>
            <div className="feat-title">Know your gaps before you apply</div>
            <div className="feat-desc">See which skills are most requested in your target roles and how your profile stacks up.</div>
            <div className="skill-preview">
              {[{name:"Figma",pct:92,color:"#4AABF0"},{name:"Prototyping",pct:78,color:"#4AABF0"},{name:"React",pct:55,color:"#F4A835"},{name:"Motion",pct:40,color:"#82E2C0"}].map((s,i) => (
                <div className="sp-row" key={i}>
                  <span className="sp-name">{s.name}</span>
                  <div className="sp-track"><div className="sp-fill" style={{ width: s.pct+"%", background: s.color }} /></div>
                  <span className="sp-pct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="feat-card wide" id="platforms">
            <span className="feat-tag g">Coverage</span>
            <div className="feat-title">8 platforms. One dashboard.</div>
            <div className="feat-desc">Stop checking 8 different websites every morning. Orbit does it for you, continuously.</div>
            <div className="platforms">
              {[{name:"LinkedIn",c:"#4AABF0"},{name:"Indeed",c:"#F4A835"},{name:"Glassdoor",c:"#82E2C0"},{name:"InfoJobs",c:"#4AABF0"},{name:"Monster",c:"#F4A835"},{name:"Otta",c:"#82E2C0"},{name:"Welcome to the Jungle",c:"#4AABF0"},{name:"Jobteaser",c:"#F4A835"}].map((p,i) => (
                <div className="platform-pill" key={i}><div className="platform-dot" style={{ background: p.c }} />{p.name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to find your <em>orbit?</em></h2>
        <p className="cta-sub">Join the waitlist. Be first to launch when we go live.</p>
        <div className="cta-input-row">
          <input className="cta-input" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <button className="cta-btn">Join waitlist</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="orbit-footer">
        <span className="footer-logo">ORBIT</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        <span className="footer-copy">© 2026 Orbit. All rights reserved.</span>
      </footer>
    </div>
  );
}