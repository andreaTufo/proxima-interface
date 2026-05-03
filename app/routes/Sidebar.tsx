import { Link, useLocation } from "react-router";

const PARTICLES = [
  { w: 5, h: 5, color: "#4AABF0", dx: "-22px", dy: "-20px", delay: "0s" },
  { w: 4, h: 4, color: "#82E2C0", dx: "22px",  dy: "-18px", delay: ".05s" },
  { w: 3, h: 3, color: "#F4A835", dx: "-18px", dy: "20px",  delay: ".08s" },
  { w: 3, h: 3, color: "#4AABF0", dx: "20px",  dy: "22px",  delay: ".03s" },
  { w: 2, h: 2, color: "#82E2C0", dx: "0px",   dy: "-26px", delay: ".06s" },
  { w: 2, h: 2, color: "#4AABF0", dx: "24px",  dy: "2px",   delay: ".04s" },
];

const NAV_ITEMS = [
  {
    id: "Dashboard",
    path: "/",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ overflow: "visible" }}>
        <circle cx="10" cy="10" r="4.5" fill="rgba(74,171,240,.2)" stroke="#4AABF0" strokeWidth="1.2"/>
        <circle cx="10" cy="10" r="2" fill="#4AABF0" fillOpacity=".6"/>
        <ellipse cx="10" cy="10" rx="8" ry="2.8" stroke="rgba(130,226,192,.25)" strokeWidth=".8" fill="none"/>
        <g className="ob-moon-orbit" style={{ transformOrigin: "10px 10px" }}>
          <circle cx="18" cy="10" r="1.5" fill="#82E2C0" fillOpacity=".9"/>
        </g>
        <g className="ob-moon-orbit2" style={{ transformOrigin: "10px 10px" }}>
          <circle cx="2" cy="10" r="1" fill="#F4A835" fillOpacity=".8"/>
        </g>
      </svg>
    ),
  },
  {
    id: "Analytics",
    path: "/analytics",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ overflow: "visible" }}>
        <line x1="1" y1="10" x2="19" y2="10" stroke="rgba(74,171,240,.2)" strokeWidth=".8"/>
        <path
          className="ob-wave-main"
          d="M1,10 C2.5,10 2.5,4 4,4 C5.5,4 5.5,16 7,16 C8.5,16 8.5,4 10,4 C11.5,4 11.5,16 13,16 C14.5,16 14.5,4 16,4 C17.5,4 17.5,10 19,10"
          stroke="#4AABF0" strokeWidth="1.4" fill="none" strokeLinecap="round"
        />
        <path
          className="ob-wave-echo"
          d="M1,10 C2,10 2,6 3.5,6 C5,6 5,14 6.5,14 C8,14 8,6 9.5,6 C11,6 11,14 12.5,14 C14,14 14,6 15.5,6 C17,6 17,10 19,10"
          stroke="#82E2C0" strokeWidth=".8" fill="none" strokeLinecap="round"
        />
        <circle cx="1" cy="10" r="1.5" fill="#4AABF0" fillOpacity=".8"/>
        <circle cx="19" cy="10" r="1.5" fill="#82E2C0" fillOpacity=".6"/>
      </svg>
    ),
  },
  {
    id: "Offers",
    path: "/offers",
    badge: true,
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ overflow: "visible" }}>
        <g className="ob-sat-body" style={{ transformOrigin: "10px 10px" }}>
          <rect x="8.5" y="8.5" width="3" height="3" rx=".5" fill="rgba(74,171,240,.3)" stroke="#4AABF0" strokeWidth="1.1"/>
          <rect x="4" y="9.2" width="4" height="1.6" rx=".4" fill="rgba(130,226,192,.5)" stroke="#82E2C0" strokeWidth=".8"/>
          <rect x="12" y="9.2" width="4" height="1.6" rx=".4" fill="rgba(130,226,192,.5)" stroke="#82E2C0" strokeWidth=".8"/>
          <line x1="10" y1="8.5" x2="10" y2="6" stroke="#4AABF0" strokeWidth=".8"/>
          <circle cx="10" cy="5.5" r="1" fill="#F4A835" fillOpacity=".9"/>
        </g>
        <path className="ob-signal-arc" d="M13 4 Q17 7 16 12" stroke="#82E2C0" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path className="ob-signal-arc2" d="M14.5 2.5 Q19.5 6.5 18 13" stroke="#4AABF0" strokeWidth=".7" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "Profile",
    path: "/profile",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <g className="ob-alien-face">
          <ellipse cx="10" cy="9" rx="5" ry="5.5" fill="rgba(74,171,240,.15)" stroke="#4AABF0" strokeWidth="1.1"/>
          <ellipse cx="10" cy="9" rx="3.5" ry="4" fill="rgba(74,171,240,.1)" stroke="#82E2C0" strokeWidth=".6"/>
          <ellipse className="ob-alien-eye" cx="8" cy="8.5" rx="1.2" ry="1.4" fill="#4AABF0" fillOpacity=".9"/>
          <ellipse className="ob-alien-eye" cx="12" cy="8.5" rx="1.2" ry="1.4" fill="#4AABF0" fillOpacity=".9"/>
          <circle cx="8" cy="8.2" r=".4" fill="#fff" fillOpacity=".8"/>
          <circle cx="12" cy="8.2" r=".4" fill="#fff" fillOpacity=".8"/>
          <path d="M8.5 11.5 Q10 12.5 11.5 11.5" stroke="#82E2C0" strokeWidth=".8" fill="none" strokeLinecap="round"/>
        </g>
        <path d="M6.5 14 Q10 16.5 13.5 14 L13 13 Q10 15 7 13Z" fill="rgba(74,171,240,.2)" stroke="#4AABF0" strokeWidth=".9"/>
        <line x1="7" y1="13.5" x2="5.5" y2="17" stroke="#4AABF0" strokeWidth=".8"/>
        <line x1="13" y1="13.5" x2="14.5" y2="17" stroke="#4AABF0" strokeWidth=".8"/>
      </svg>
    ),
  },
  {
  id: "Utilities",
  path: "/utilities",
  icon: (
    <svg viewBox="0 0 20 20" fill="none" style={{ overflow: "visible" }}>
      {/* schermo display */}
      <rect x="3" y="3" width="14" height="9" rx="1.5" fill="rgba(74,171,240,.1)" stroke="#4AABF0" strokeWidth="1.1"/>
      <rect x="5" y="5" width="10" height="5" rx=".8" fill="rgba(74,171,240,.08)" stroke="rgba(74,171,240,.3)" strokeWidth=".6"/>
      {/* linea scanner sul display */}
      <line className="ob-scan-line" x1="5.5" y1="7.5" x2="14.5" y2="7.5" stroke="#82E2C0" strokeWidth=".8" strokeLinecap="round"/>
      {/* 3 LED in basso */}
      <circle className="ob-led ob-led--1" cx="6"  cy="15" r="1.2" fill="#4AABF0" fillOpacity=".3" stroke="#4AABF0" strokeWidth=".7"/>
      <circle className="ob-led ob-led--2" cx="10" cy="15" r="1.2" fill="#82E2C0" fillOpacity=".3" stroke="#82E2C0" strokeWidth=".7"/>
      <circle className="ob-led ob-led--3" cx="14" cy="15" r="1.2" fill="#F4A835" fillOpacity=".3" stroke="#F4A835" strokeWidth=".7"/>
      {/* connettore sotto il display */}
      <line x1="10" y1="12" x2="10" y2="13.5" stroke="rgba(74,171,240,.4)" strokeWidth=".8"/>
    </svg>
  ),
},
  {
    id: "Settings",
    path: "/settings",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <g className="ob-gear-g" style={{ transformOrigin: "10px 10px" }}>
          <circle cx="10" cy="10" r="4" fill="rgba(74,171,240,.15)" stroke="#4AABF0" strokeWidth="1.1"/>
          <circle cx="10" cy="10" r="1.8" fill="rgba(74,171,240,.3)" stroke="#82E2C0" strokeWidth=".8"/>
          <rect x="9.2" y="4.5" width="1.6" height="2" rx=".4" fill="#4AABF0"/>
          <rect x="9.2" y="13.5" width="1.6" height="2" rx=".4" fill="#4AABF0"/>
          <rect x="4.5" y="9.2" width="2" height="1.6" rx=".4" fill="#4AABF0"/>
          <rect x="13.5" y="9.2" width="2" height="1.6" rx=".4" fill="#4AABF0"/>
          <rect x="5.8" y="5.8" width="1.6" height="1.6" rx=".3" fill="#4AABF0" transform="rotate(45 6.6 6.6)"/>
          <rect x="12.6" y="5.8" width="1.6" height="1.6" rx=".3" fill="#4AABF0" transform="rotate(45 13.4 6.6)"/>
          <rect x="5.8" y="12.6" width="1.6" height="1.6" rx=".3" fill="#4AABF0" transform="rotate(45 6.6 13.4)"/>
          <rect x="12.6" y="12.6" width="1.6" height="1.6" rx=".3" fill="#4AABF0" transform="rotate(45 13.4 13.4)"/>
        </g>
        <circle cx="3.5" cy="3.5" r="1" fill="#F4A835" fillOpacity=".8" className="ob-star-twinkle"/>
        <circle cx="16.5" cy="4" r=".7" fill="#82E2C0" fillOpacity=".7" className="ob-star-twinkle ob-star-twinkle--2"/>
        <circle cx="4" cy="16" r=".7" fill="#4AABF0" fillOpacity=".6" className="ob-star-twinkle ob-star-twinkle--3"/>
      </svg>
    ),
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside style={{
      width: 60,
      position: "fixed",
      top: "50%",
      left: 20,
      transform: "translateY(-50%)",
      background: "rgba(15,15,15,0.55)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 0 14px",
      boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 0 0 0.5px rgba(255,255,255,0.04)",
      zIndex: 50,
    }}>

      {/* Logo */}
      <div style={{ marginBottom: 20 }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="2.8" fill="#4AABF0" />
          <ellipse cx="11" cy="11" rx="8.5" ry="4" stroke="#4AABF0" strokeWidth="1" fill="none" strokeOpacity=".5" />
          <ellipse cx="11" cy="11" rx="8.5" ry="4" stroke="#4AABF0" strokeWidth="1" fill="none" strokeOpacity=".25"
            transform="rotate(60 11 11)" />
        </svg>
      </div>

      {/* Divider */}
      <div style={{ width: 20, height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 10 }} />

      {/* Nav items */}
      <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flex: 1, width: "100%" }}>
        {NAV_ITEMS.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={active ? "ob-nav-link active" : "ob-nav-link"}
              style={{
                cursor: "none",
                position: "relative",
                width: 42, height: 42,
                borderRadius: 11,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `1px solid ${active ? "rgba(74,171,240,0.28)" : "transparent"}`,
                background: active ? "rgba(74,171,240,0.14)" : "transparent",
                transition: "background .2s, border-color .2s",
                textDecoration: "none",
                animation: active ? "ob-activeGlow 2.5s ease-in-out infinite" : "none",
                outline: "none",
                overflow: "visible",
              }}
            >
              {/* Indicatore laterale attivo */}
             
          

              {/* Ring burst 1 */}
              <span className="ob-ring1" style={{
                position: "absolute", left: "50%", top: "50%",
                width: 42, height: 42, borderRadius: "50%",
                border: "1.5px solid rgba(74,171,240,.8)",
                opacity: 0, pointerEvents: "none",
              }} />

              {/* Ring burst 2 */}
              <span className="ob-ring2" style={{
                position: "absolute", left: "50%", top: "50%",
                width: 38, height: 38, borderRadius: "50%",
                border: "1px solid rgba(130,226,192,.6)",
                opacity: 0, pointerEvents: "none",
              }} />

              {/* Particelle */}
              <span className="ob-particles" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible", zIndex: 1 }}>
                {PARTICLES.map((p, i) => (
                  <span key={i} className="ob-particle" style={{
                    position: "absolute", left: "50%", top: "50%",
                    width: p.w, height: p.h, borderRadius: "50%",
                    background: p.color, opacity: 0,
                    "--dx": p.dx, "--dy": p.dy,
                    animationDelay: p.delay,
                  }} />
                ))}
              </span>

              {/* Badge */}
              {item.badge && (
                <span style={{
                  position: "absolute", top: 7, right: 7,
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#82E2C0",
                  boxShadow: "0 0 0 1.5px rgba(15,15,15,0.6)",
                  zIndex: 3,
                }} />
              )}

              {/* Icon */}
              <span className="ob-icon" style={{
                width: 20, height: 20, display: "flex",
                position: "relative", zIndex: 2,
              }}>
                {item.icon}
              </span>

              {/* Tooltip */}
              <span className="ob-tooltip" style={{
                pointerEvents: "none",
                position: "absolute",
                left: "calc(100% + 14px)",
                top: "50%", transform: "translateY(-50%) translateX(-10px)",
                background: "rgba(12,12,12,.95)",
                border: "1px solid rgba(74,171,240,.2)",
                borderRadius: 7,
                padding: "5px 12px",
                whiteSpace: "nowrap",
                fontFamily: "'Syne', sans-serif",
                fontSize: 10, fontWeight: 500, letterSpacing: "1.5px",
                color: "#F0F0F0",
                opacity: 0,
                zIndex: 99,
                boxShadow: "0 0 12px rgba(74,171,240,.15)",
              }}>
                {item.id}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div style={{ width: 20, height: 1, background: "rgba(255,255,255,0.08)", margin: "10px 0" }} />

      {/* AI pulse dot */}
      <div style={{
        width: 6, height: 6, borderRadius: "50%",
        background: "#82E2C0",
        marginBottom: 10,
        animation: "obpulse 2s ease-in-out infinite",
      }} />

      {/* Avatar */}
      <div style={{
        width: 30, height: 30, borderRadius: "50%",
        background: "linear-gradient(135deg, #4AABF0, #82E2C0)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 800, color: "#000",
        fontFamily: "'DM Mono', monospace",
        border: "1px solid rgba(255,255,255,0.12)",
      }}>J</div>

    </aside>
  );
}