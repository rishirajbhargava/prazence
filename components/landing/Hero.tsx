import { Scissors, Utensils, Hospital, Dumbbell, Shirt, BookOpen, Camera, Receipt } from "@/components/Ui/Icons";

const businessTypes = [
  { label: "Salon", icon: <Scissors size={15} style={{ color: "#888888" }} /> },
  { label: "Restaurant", icon: <Utensils size={15} style={{ color: "#888888" }} /> },
  { label: "Clinic", icon: <Hospital size={15} style={{ color: "#888888" }} /> },
  { label: "Gym", icon: <Dumbbell size={15} style={{ color: "#888888" }} /> },
  { label: "Boutique", icon: <Shirt size={15} style={{ color: "#888888" }} /> },
  { label: "Tutor", icon: <BookOpen size={15} style={{ color: "#888888" }} /> },
  { label: "Photographer", icon: <Camera size={15} style={{ color: "#888888" }} /> },
  { label: "CA Firm", icon: <Receipt size={15} style={{ color: "#888888" }} /> },
];

const stats = [
  { value: "7 days", label: "Avg. delivery" },
  { value: "₹14,999", label: "Starting price" },
  { value: "100%", label: "Done for you" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "120px 24px 80px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,77,0,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "820px" }}>
        {/* Eyebrow */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,77,0,0.1)",
            border: "1px solid rgba(255,77,0,0.25)",
            borderRadius: "99px",
            padding: "6px 16px",
            marginBottom: "28px",
          }}
        >
          <span style={{ width: "7px", height: "7px", background: "#FF4D00", borderRadius: "50%", display: "inline-block" }} className="animate-glow" />
          <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#FF6B35", letterSpacing: "0.04em" }}>
            Managed web presence for Indian SMBs
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#F5F5F5",
            marginBottom: "24px",
          }}
        >
          Your business,{" "}
          <span className="text-gradient">seen online.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#BBBBBB",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          We build your website, set up your Google Business profile, and handle your SEO - start to finish.{" "}
          <strong style={{ color: "#F5F5F5", fontWeight: 600 }}>You do nothing technical.</strong>
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <a
            href="#contact"
            id="hero-cta-primary"
            className="btn-brand"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Get a free consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            id="hero-cta-secondary"
            className="btn-ghost"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            View packages
          </a>
        </div>

        {/* Stats row */}
        <div
          className="stats-row animate-fade-up delay-400"
          style={{
            border: "1px solid #2E2E2E",
            borderRadius: "14px",
            background: "#1A1A1A",
            overflow: "hidden",
            marginBottom: "56px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stats-col"
              style={{
                flex: "1 1 120px",
                padding: "20px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F5F5F5", marginBottom: "4px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#666", letterSpacing: "0.04em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Business type badges */}
        <div className="animate-fade-up delay-500">
          <p style={{ fontSize: "0.8rem", color: "#666", marginBottom: "14px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            We work with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
            {businessTypes.map((type, i) => (
              <span
                key={type.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  background: "#1A1A1A",
                  border: "1px solid #2E2E2E",
                  borderRadius: "99px",
                  fontSize: "0.82rem",
                  color: "#BBBBBB",
                  animation: `float ${3 + (i % 3) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {type.icon}
                {type.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
