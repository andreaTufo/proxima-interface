import { useState, useEffect, useRef } from "react";
import {motion} from "framer-motion";
import Sidebar from "./Sidebar";
import {LuSparkle} from "react-icons/lu";
import { FaConnectdevelop } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

export function ProximaLogo({
  size = 48,
  showWordmark = false,
  theme = "dark",
}) {
  const bg = theme === "dark" ? "#0F0F0F" : "#F5F5F5";
  const cyan = "#4AABF0";
  const amber = "#F4A835";

  const r = size / 2;
  const cx = r;
  const cy = r;

  // mezzaluna: cerchio grande - cerchio offset a sinistra
  const moonR = r * 0.64;
  const holeR = r * 0.49;
  const holeOffsetX = r * 0.24;
  const starR = r * 0.18;
  const starCx = cx - holeOffsetX;
  const starCy = cy;

  const maskId = `proxima-mask-${size}`;

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.22,
        fontFamily: "'Syne', 'DM Sans', ui-sans-serif, sans-serif",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Proxima logo"
      >
        {/* Background circle */}
        <circle cx={cx} cy={cy} r={r} fill={bg} />

        <defs>
          <mask id={maskId}>
            <rect width={size} height={size} fill="white" />
            {/* Hole that creates the crescent */}
            <circle cx={starCx} cy={starCy} r={holeR} fill="black" />
          </mask>
        </defs>

        {/* Crescent moon — cyan */}
        <circle
          cx={cx}
          cy={cy}
          r={moonR}
          fill={cyan}
          mask={`url(#${maskId})`}
        />

        {/* Star — amber dot in the crescent opening */}
        <circle cx={starCx} cy={starCy} r={starR} fill={amber} />
      </svg>

      {showWordmark && (
        <span
          style={{
            fontSize: size * 0.28,
            fontWeight: 300,
            letterSpacing: size * 0.06,
            color: theme === "dark" ? "#F0F0F4" : "#1A1A2E",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Proxima
        </span>
      )}
    </div>
  );
}

export function OrbitLogo({ size = 70 }: { size?: number }) {
  const centralPlanetSize = size * 0.3;
  const orbitWidth1 = size * 0.7;
  const orbitHeight1 = size * 0.18;
  const orbitWidth2 = size * 0.85;
  const orbitHeight2 = size * 0.22;
  const orbitWidth3 = size * 0.95;
  const orbitHeight3 = size * 0.25;
  const miniPlanetSize = size * 0.08;

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: size, 
        height: size,
        perspective: '1200px',
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute"
        style={{
          width: size,
          height: size,
        }}
      >
        <defs>
          <linearGradient id="orbit1Grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--bg4)" stopOpacity="0.2" />
            <stop offset="30%" stopColor="var(--bg4)" stopOpacity="1" />
            <stop offset="70%" stopColor="var(--bg4)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--bg4)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbit2Grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--bg4)" stopOpacity="0.2" />
            <stop offset="35%" stopColor="var(--bg4)" stopOpacity="0.9" />
            <stop offset="65%" stopColor="var(--bg4)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--bg4)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Orbit 1 */}
        <ellipse
          cx={size / 2}
          cy={size / 2}
          rx={orbitWidth1 / 2}
          ry={orbitHeight1 / 2}
          fill="none"
          stroke="url(#orbit1Grad)"
          strokeWidth="2"
          transform={`rotate(-25, ${size / 2}, ${size / 2})`}
        />



      </svg>

      {/* 3D space for planets */}
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
          transform: 'rotateZ(-25deg)',
        }}
      >
        {/* Mini planet 1 - Cyan - orbit 1 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: miniPlanetSize*0.8,
            height: miniPlanetSize*0.8,
            left: '50%',
            top: '50%',
            marginLeft: -miniPlanetSize / 2,
            marginTop: -miniPlanetSize / 2,
            backgroundColor: 'var(--cyan)',
            boxShadow: '0 0 20px rgba(74, 171, 240, 0.8), inset -3px -3px 6px rgba(0, 0, 0, 0.4)',
          }}
          animate={{
            x: Array.from({ length: 61 }, (_, i) => {
              const angle = (i / 60) * Math.PI * 2;
              return Math.cos(angle) * (orbitWidth1 / 2);
            }),
            y: Array.from({ length: 61 }, (_, i) => {
              const angle = (i / 60) * Math.PI * 2;
              return Math.sin(angle) * (orbitHeight1 / 2);
            }),
            translateZ: Array.from({ length: 61 }, (_, i) => {
              const angle = (i / 60) * Math.PI * 2;
              return Math.sin(angle) * (orbitWidth1 / 2) * 0.6;
            })
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Mini planet 2 - Amber - orbit 2 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: miniPlanetSize * 1.6,
            height: miniPlanetSize * 1.6,
            left: '50%',
            top: '50%',
            marginLeft: -(miniPlanetSize * 0.9) / 2,
            marginTop: -(miniPlanetSize * 0.9) / 2,
            backgroundColor: 'var(--amber)',
            boxShadow: '0 0 18px rgba(244, 168, 53, 0.8), inset -3px -3px 6px rgba(0, 0, 0, 0.4)',
          }}
          animate={{
            x: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI;
              return Math.cos(angle) * (orbitWidth2 / 2);
            }),
            y: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI;
              return Math.sin(angle) * (orbitHeight2 / 2);
            }),
            translateZ: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI;
              return Math.sin(angle) * (orbitWidth2 / 2) * 0.6;
            })
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Mini planet 3 - Green - orbit 3 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: miniPlanetSize * 0.9,
            height: miniPlanetSize * 0.9,
            left: '50%',
            top: '50%',
            marginLeft: -(miniPlanetSize * 0.85) / 2,
            marginTop: -(miniPlanetSize * 0.85) / 2,
            backgroundColor: 'var(--muted2)',
            transform: 'rotateZ(45deg)',
            boxShadow: '0 0 18px #a9adab, inset -3px -3px 6px rgba(0, 0, 0, 0.4)',
          }}
          animate={{
            x: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI / 2;
              return Math.cos(angle) * (orbitWidth3 / 2);
            }),
            y: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI / 2;
              return Math.sin(angle) * (orbitHeight3 / 2);
            }),
            translateZ: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + Math.PI / 2;
              return Math.sin(angle) * (orbitWidth3 / 2) * 0.6;
            })
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Mini planet 4 - Cyan/Green - orbit 1 opposite */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: miniPlanetSize * 1.5,
            height: miniPlanetSize * 1.5,
            left: '50%',
            top: '50%',
            marginLeft: -(miniPlanetSize * 0.75) / 2,
            marginTop: -(miniPlanetSize * 0.75) / 2,
            background: 'linear-gradient(135deg, var(--cyan), var(--green))',
            boxShadow: '0 0 16px rgba(74, 171, 240, 0.7), inset -3px -3px 6px rgba(0, 0, 0, 0.4)',
          }}
          animate={{
            x: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + (Math.PI * 1.5);
              return Math.cos(angle) * (orbitWidth2 / 2);
            }),
            y: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + (Math.PI * 1.5);
              return Math.sin(angle) * (orbitHeight2 / 2);
            }),
            translateZ: Array.from({ length: 61 }, (_, i) => {
              const angle = ((i / 60) * Math.PI * 2) + (Math.PI * 1.5);
              return Math.sin(angle) * (orbitWidth2 / 2) * 0.6;
            })
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Central planet - STATIC */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: centralPlanetSize,
            height: centralPlanetSize,
            left: '50%',
            top: '50%',
            marginLeft: -centralPlanetSize / 2,
            marginTop: -centralPlanetSize / 2,
            border: "3px",
            borderColor: "#4AABF0",
            background: 'radial-gradient(circle at 30% 30%, #4aabf0)',
            zIndex: 5,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5
          }}
        />
      </div>
    </div>
  );
}
function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    // stelle fisse
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 0.9 + 0.2,
      a: Math.random(),
      s: Math.random() * 0.003 + 0.001,
    }));

    // stelle cadenti
    type Shooting = {
      x: number; y: number;
      vx: number; vy: number;
      len: number;
      alpha: number;
      life: number;      // 0→1 progress
      speed: number;
    };

    const shootingStars: Shooting[] = [];

    const spawnShooting = () => {
      // parte da un punto random sul bordo superiore / lato sinistro
      const fromTop = Math.random() > 0.1;
      shootingStars.push({
        x: fromTop ? Math.random() * w : 0,
        y: fromTop ? 0 : Math.random() * h * 0.5,
        vx: 4 + Math.random() * 5,
        vy: 2 + Math.random() * 3,
        len: 80 + Math.random() * 120,
        alpha: 0,
        life: 0,
        speed: 0.012 + Math.random() * 0.01,
      });
    };

    // spawna ogni 2.5–5s
    let spawnTimer = 0;
    let nextSpawn = 2500 + Math.random() * 2500;

    let last = performance.now();
    let raf: number;

    const draw = (now: number) => {
      const dt = now - last;
      last = now;
      spawnTimer += dt;
      if (spawnTimer >= nextSpawn) {
        spawnShooting();
        spawnTimer = 0;
        nextSpawn = 2500 + Math.random() * 2500;
      }

      ctx.clearRect(0, 0, w, h);

      // disegna stelle fisse
      stars.forEach(s => {
        s.a += s.s;
        if (s.a > 1 || s.a < 0) s.s *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250,250,250,${s.a * 0.5})`;
        ctx.fill();
      });

      // disegna & aggiorna stelle cadenti
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life += s.speed;

        // fade in primi 20%, fade out ultimi 20%
        if (s.life < 0.2)       s.alpha = s.life / 0.2;
        else if (s.life > 0.8)  s.alpha = 1 - (s.life - 0.8) / 0.2;
        else                    s.alpha = 1;

        s.x += s.vx;
        s.y += s.vy;

        const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.len;
        const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.len;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(74,171,240,0)`);
        grad.addColorStop(0.6, `rgba(74,171,240,${s.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.lineCap = "round";
        ctx.stroke();

        // piccolo punto luminoso alla testa
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();

        // rimuovi se fuori schermo o ciclo finito
        if (s.life >= 1 || s.x > w + 50 || s.y > h + 50) {
          shootingStars.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}

// ── Custom cursor ─────────────────────────────────────────────────────────────
function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, animId;
    const move = e => { mx = e.clientX; my = e.clientY; if (cursorRef.current) { cursorRef.current.style.left = mx + "px"; cursorRef.current.style.top = my + "px"; } };
    const anim = () => { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; } animId = requestAnimationFrame(anim); };
    document.addEventListener("mousemove", move);
    anim();
    const over = () => { if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(1.3)"; cursorRef.current.style.background = "#F4A835"; } };
    const out  = () => { if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";   cursorRef.current.style.background = "var(--cyan)"; } };
    const els = document.querySelectorAll("button,a,.step,.feat-card");
    els.forEach(el => { el.addEventListener("mouseenter", over); el.addEventListener("mouseleave", out); });
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(animId); };
  }, []);
  return (<><div className="cursor" ref={cursorRef} /><div className="cursor-ring" ref={ringRef} /></>);
}

// ── Tiny sparkline SVG ────────────────────────────────────────────────────────
function Sparkline({ data, color }) {
  const max = Math.max(...data); const min = Math.min(...data);
  const w = 120; const h = 40;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts.split(" ").pop().split(",")[0]} cy={pts.split(" ").pop().split(",")[1]} r="3" fill={color} />
    </svg>
  );
}

// ── Mini bar chart ────────────────────────────────────────────────────────────
function BarChart({ data, color }) {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1, borderRadius: 2,
          background: i === data.length - 1 ? color : "rgba(255,255,255,0.08)",
          height: `${(v / max) * 100}%`,
          transition: "height .4s ease",
        }} />
      ))}
    </div>
  );
}

// ── Skill bar row ─────────────────────────────────────────────────────────────
function SkillBar({ name, pct, color }) {
  return (
    <div className="sp-row">
      <span className="sp-name">{name}</span>
      <div className="sp-track"><div className="sp-fill" style={{ width: `${pct}%`, background: color }} /></div>
      <span className="sp-pct">{pct}%</span>
    </div>
  );
}

// ── Status badge ──────────────────────────────────────────────────────────────
const statusColors = { Applied: "#4AABF0", Interview: "#82E2C0", Rejected: "rgba(240,240,240,0.3)", Offer: "#F4A835" };
function StatusBadge({ status }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
      padding: "3px 10px", borderRadius: 3,
      background: `${statusColors[status]}18`, color: statusColors[status],
      fontFamily: "'DM Mono', monospace",
    }}>{status}</span>
  );
}

// ── DATA ──────────────────────────────────────────────────────────────────────
const TRENDS = [42, 58, 51, 67, 72, 65, 80, 88, 76, 93, 85, 97];
const SKILL_DEMAND = [
  { name: "React", pct: 87, color: "#4AABF0" },
  { name: "Python", pct: 74, color: "#82E2C0" },
  { name: "TypeScript", pct: 69, color: "#4AABF0" },
  { name: "AWS", pct: 62, color: "#F4A835" },
  { name: "LLM/AI", pct: 91, color: "#82E2C0" },
];
const WEEKLY_POSTS = [320, 410, 380, 520, 490, 560, 610];
const FRESH_OFFERS = [
  { role: "Senior Frontend Engineer", company: "Stripe", location: "Remote", match: 96, tag: "New", tagColor: "#82E2C0" },
  { role: "AI Product Engineer", company: "Mistral AI", location: "Paris", match: 91, tag: "Hot", tagColor: "#F4A835" },
  { role: "Full Stack Developer", company: "Linear", location: "Remote", match: 88, tag: "New", tagColor: "#82E2C0" },
  { role: "ML Engineer", company: "Hugging Face", location: "Remote", match: 84, tag: "New", tagColor: "#82E2C0" },
];
const APPLICATIONS = [
  { role: "Staff Engineer", company: "Vercel", date: "12 Mar", status: "Interview" },
  { role: "Frontend Architect", company: "Figma", date: "08 Mar", status: "Applied" },
  { role: "React Engineer", company: "Shopify", date: "04 Mar", status: "Offer" },
  { role: "Software Engineer", company: "Notion", date: "28 Feb", status: "Rejected" },
  { role: "Senior Dev", company: "Loom", date: "22 Feb", status: "Applied" },
];

// ── MAIN DASHBOARD ────────────────────────────────────────────────────────────
export default function OrbitDashboard() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [sidebarActive, setSidebarActive] = useState("Dashboard");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

 const [isScrolled, setIsScrolled] = useState(false);

  

  // Monitora lo scroll per rimpicciolire il titolo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeStr = now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" });

  const NAV_ITEMS = ["Dashboard", "Analytics", "Offers", "Settings"];

  return (
    <div id="orbit-root" style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Starfield />
      <Cursor />
      <Sidebar/>
<nav className={`orbit-nav transition-all duration-500 border-b border-white/10 backdrop-blur-md bg-black/40 px-8 py-4 flex items-center justify-between
          ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr" }}>

  {/* sinistra */}
  <div className="nav-logo">
    <ProximaLogo />
    <span className="nav-logo-text">PROXIMA</span>
  </div>

  {/* centro — sempre centrato perché nella colonna centrale */}
  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#82E2C0", boxShadow: "0 0 6px #82E2C0" }} />
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", color: "#82E2C0", fontFamily: "'DM Mono',monospace" }}>AI ACTIVE</span>
    </div>
    <span style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'DM Mono',monospace", letterSpacing: "1px" }}>
      {timeStr} · {dateStr}
    </span>
  </div>

  {/* destra — allineata a dx */}
  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #4AABF0, #82E2C0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#000" }}>J</div>
  </div>

</nav>
      {/* ── TOP NAV ── */}
  

      {/* ── HERO ── */}
      <section  className={`hero h-fit justify-center transition-all duration-700 ${isScrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          AI SCRAPING ENGINE · LIVE
        </div>
        <h1 className="hero-title-sub">Hello, <em>JobNaut.</em></h1>
        <p className="hero-title">Ready for your <em>proxima</em> opportunity</p>
        <p className="hero-sub">
          Orbit scans every major job platform in real time, matches listings to your profile with AI precision, and surfaces only what truly fits.
        </p>

        <div className="stats-bar" style={{ width: "100%", maxWidth: 600, margin: "40px auto 0" }}>
          {[
            { num: "12.4K", label: "Offers Scanned Today" },
            { num: "96%", label: "Match Accuracy" },
            { num: "3", label: "Interviews Pending" },
          ].map(s => (
            <div className="stat-block w-fit items-center align-center justify-center" key={s.label}>
              <div className="stat-num">{s.num.replace(/\d/, m => `<span>${m}</span>`)
                .split(/(<span>.*?<\/span>)/).map((part, i) =>
                  part.startsWith("<span>") ? <span key={i} style={{ color: "var(--cyan)" }}>{part.replace(/<\/?span>/g, "")}</span> : part
                )}</div>
              <div className="stat-desc">{s.label}</div>
            </div>
          ))}
        </div>

        {/* scroll hint */}
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
          <span style={{ fontSize: 9, letterSpacing: "3px", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>SCROLL</span>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
        </div>
        </motion.div>
      </section>

      {/* ── LAYOUT: main ── */}
      <div style={{ display: "flex", minHeight: "100vh", paddingLeft: 10 }}>
  {/* paddingLeft: 80 = 60px sidebar + 20px margine left */}

          <main style={{
            flex: 1,
            padding: "48px 48px 80px",
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}>
          {/* page header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <div className="section-label">Overview</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, fontWeight: 400, color: "var(--white)", lineHeight: 1.1 }}>
                Your orbit, <em style={{ fontStyle: "italic", color: "var(--muted)" }}>at a glance.</em>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, color: "var(--muted)", fontFamily: "'DM Mono',monospace", letterSpacing: "1px" }}>
              <span>{timeStr}</span>
              <span style={{ opacity: .4 }}>·</span>
              <span>{dateStr}</span>
            </div>
          </div>

          {/* ── SECTION 1: MARKET OVERVIEW ── */}
          <div style={{ marginBottom: 48 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Market Overview</div>

            {/* KPI row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
              {[
                { label: "New Offers Today", val: "1,247", delta: "+12%", color: "#4AABF0", spark: [30,45,38,55,60,52,70,65,80,75,90,85] },
                { label: "Avg. Match Score", val: "78%", delta: "+3pt", color: "#82E2C0", spark: [60,62,65,63,70,72,74,71,76,78,80,78] },
                { label: "Active Platforms", val: "9", delta: "Live", color: "#F4A835", spark: [7,7,8,8,9,8,9,9,9,9,9,9] },
                { label: "Your Profile Views", val: "34", delta: "+8 today", color: "#4AABF0", spark: [2,4,3,6,5,8,7,10,9,12,11,15] },
              ].map(k => (
                <div key={k.label} style={{ background: "var(--bg2)", padding: "20px 20px 16px" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{k.label}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 26, fontWeight: 500, color: "var(--white)", lineHeight: 1, marginBottom: 10 }}>{k.val}</div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 9, fontFamily: "'DM Mono',monospace", color: k.color }}>{k.delta}</span>
                    <Sparkline data={k.spark} color={k.color} />
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

              {/* Trend chart */}
              <div className="feat-card">
                <div className="feat-tag c">Trend</div>
                <div className="feat-title" style={{ fontSize: 16, marginBottom: 4 }}>Nuove Offerte Pubblicate</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 20 }}>Ultimi 12 mesi · tutte le piattaforme</div>
                <svg width="100%" height="90" viewBox="0 0 340 90" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4AABF0" stopOpacity=".25" />
                      <stop offset="100%" stopColor="#4AABF0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {(() => {
                    const max = Math.max(...TRENDS), min = Math.min(...TRENDS);
                    const pts = TRENDS.map((v, i) => {
                      const x = (i / (TRENDS.length - 1)) * 340;
                      const y = 90 - ((v - min) / (max - min)) * 76 - 4;
                      return [x, y];
                    });
                    const line = pts.map(p => p.join(",")).join(" ");
                    const area = `0,90 ${line} 340,90`;
                    return (<>
                      <polygon points={area} fill="url(#trendGrad)" />
                      <polyline points={line} fill="none" stroke="#4AABF0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      {pts.map(([x, y], i) => i === pts.length - 1 && (
                        <circle key={i} cx={x} cy={y} r="3.5" fill="#4AABF0" />
                      ))}
                    </>);
                  })()}
                </svg>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  {["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"].map(m => (
                    <span key={m} style={{ fontSize: 8, color: "var(--muted)", fontFamily: "'DM Mono',monospace" }}>{m}</span>
                  ))}
                </div>
              </div>

              {/* Skills demand */}
              <div className="feat-card">
                <div className="feat-tag g">Skill Demand</div>
                <div className="feat-title" style={{ fontSize: 16, marginBottom: 4 }}>Skill più richieste</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 20 }}>Basato su 12.4K offerte · aggiornato ora</div>
                <div className="skill-preview">
                  {SKILL_DEMAND.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
              </div>

              {/* Weekly posts bar */}
              <div className="feat-card">
                <div className="feat-tag a">Weekly</div>
                <div className="feat-title" style={{ fontSize: 16, marginBottom: 4 }}>Offerte per giorno</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 16 }}>Ultima settimana</div>
                <BarChart data={WEEKLY_POSTS} color="var(--amber)" />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  {["Lun","Mar","Mer","Gio","Ven","Sab","Dom"].map(d => (
                    <span key={d} style={{ flex: 1, fontSize: 8, color: "var(--muted)", fontFamily: "'DM Mono',monospace", textAlign: "center" }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Platform coverage */}
              <div className="feat-card">
                <div className="feat-tag c">Platforms</div>
                <div className="feat-title" style={{ fontSize: 16, marginBottom: 4 }}>Copertura piattaforme</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 16 }}>9 piattaforme attive</div>
                <div className="platforms" style={{ flexWrap: "wrap" }}>
                  {[
                    { name: "LinkedIn", color: "#4AABF0" },
                    { name: "Indeed", color: "#82E2C0" },
                    { name: "Glassdoor", color: "#F4A835" },
                    { name: "WeWorkRemotely", color: "#4AABF0" },
                    { name: "Lever", color: "#82E2C0" },
                    { name: "Greenhouse", color: "#F4A835" },
                    { name: "Otta", color: "#4AABF0" },
                    { name: "Remotive", color: "#82E2C0" },
                    { name: "YC Jobs", color: "#F4A835" },
                  ].map(p => (
                    <div key={p.name} className="platform-pill">
                      <div className="platform-dot" style={{ background: p.color, boxShadow: `0 0 4px ${p.color}` }} />
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: AI FRESH OFFERS ── */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 20 }}>
              <div>
                <div className="section-label">AI Picks · Just In</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, color: "var(--white)" }}>
                  Novità <em style={{ fontStyle: "italic", color: "var(--cyan)" }}>selezionate per te</em>
                </h3>
              </div>
              <button style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                padding: "8px 18px", borderRadius: 4, border: "1px solid var(--border2)",
                background: "transparent", color: "var(--muted2)", fontFamily: "'Syne',sans-serif", cursor: "none",
                transition: "all .2s",
              }}>View All →</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {FRESH_OFFERS.map((o, i) => (
                <div key={i} className="feat-card" style={{ padding: "24px 26px", display: "flex", alignItems: "center", gap: 16 }}>
                  {/* company initial */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: "var(--bg3)", border: "1px solid var(--border2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 800, color: "var(--cyan)",
                    fontFamily: "'DM Mono',monospace",
                  }}>{o.company[0]}</div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--white)" }}>{o.role}</span>
                      <span style={{
                        fontSize: 8, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
                        padding: "2px 7px", borderRadius: 2,
                        background: `${o.tagColor}15`, color: o.tagColor,
                      }}>{o.tag}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", gap: 8 }}>
                      <span>{o.company}</span><span style={{ opacity: .4 }}>·</span><span>{o.location}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 22, fontWeight: 500, color: o.match >= 90 ? "#82E2C0" : "var(--cyan)" }}>{o.match}<span style={{ fontSize: 11, color: "var(--muted)" }}>%</span></div>
                    <div style={{ fontSize: 8, letterSpacing: "1px", color: "var(--muted)", textTransform: "uppercase", fontWeight: 700 }}>Match</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: APPLICATIONS ── */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 20 }}>
              <div className="section-label">Applications</div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, color: "var(--white)" }}>
                Domande <em style={{ fontStyle: "italic", color: "var(--muted)" }}>presentate</em>
              </h3>
            </div>

            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
              {/* table header */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 140px 100px 100px",
                padding: "12px 24px", borderBottom: "1px solid var(--border)",
                fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                color: "var(--muted)", fontFamily: "'DM Mono',monospace",
              }}>
                <span>Role / Company</span><span>Date</span><span>Status</span><span style={{ textAlign: "right" }}>Action</span>
              </div>

              {APPLICATIONS.map((a, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 140px 100px 100px",
                  padding: "16px 24px", alignItems: "center",
                  borderBottom: i < APPLICATIONS.length - 1 ? "1px solid var(--border)" : "none",
                  transition: "background .15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--bg3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--white)", marginBottom: 2 }}>{a.role}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>{a.company}</div>
                  </div>
                  <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'DM Mono',monospace" }}>{a.date}</span>
                  <StatusBadge status={a.status} />
                  <div style={{ textAlign: "right" }}>
                    <button style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
                      padding: "5px 12px", borderRadius: 3, border: "1px solid var(--border2)",
                      background: "transparent", color: "var(--muted2)", fontFamily: "'Syne',sans-serif",
                      cursor: "none", transition: "all .15s",
                    }}>View →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER ── */}
          <footer style={{
            borderTop: "1px solid var(--border)", paddingTop: 32, marginTop: 24,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div className="footer-logo">PROXIMA</div>
            <div className="footer-links">
              {["Privacy", "Terms", "Docs", "Status"].map(l => (
                <a key={l} href="#" className="footer-links"
                  style={{ fontSize: 11, color: "var(--muted)", textDecoration: "none", letterSpacing: "1px", fontWeight: 600, transition: "color .2s" }}
                  
                >{l}</a>
              ))}
            </div>
            <div className="footer-copy">© 2025 Proxima · All systems nominal</div>
          </footer>

        </main>
      </div>
    </div>
  );
}