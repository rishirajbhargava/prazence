import { Sparkles } from "@/components/Ui/Icons";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="#888888" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Fill the form",
    desc: "Tell us about your business - what you do, who your customers are, your brand colors and goals. Takes 5 minutes.",
    detail: "Free consultation. No commitment needed.",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#888888" strokeWidth="1.5" />
        <path d="M4 10h20" stroke="#888888" strokeWidth="1.5" />
        <path d="M8 14h4M8 18h8" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "We build everything",
    desc: "We create your website, set up your Google Business profile, and handle your SEO. No input needed from you.",
    detail: "Website + Google Business + SEO - done for you.",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6 12-12" stroke="#888888" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "You review & approve",
    desc: "Log into your private client portal. See your project progress live. Request changes - we handle them fast.",
    detail: "Real-time updates in your portal.",
  },
  {
    number: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 14l10 10 10-10L14 4z" stroke="#888888" strokeWidth="1.5" />
        <path d="M14 9v5M14 17v1" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Go live",
    hasSparkles: true,
    desc: "Your business is live on your domain. Customers can find you on Google, Maps, and Search. You're online.",
    detail: "Average delivery: 5–7 business days.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        background: "#0A0A0A",
        borderTop: "1px solid #1E1E1E",
        borderBottom: "1px solid #1E1E1E",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>How it works</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#F5F5F5",
              marginBottom: "16px",
            }}
          >
            From contact to live{" "}
            <span className="text-gradient">in days</span>
          </h2>
          <p style={{ color: "#BBBBBB", fontSize: "1.05rem", maxWidth: "440px", margin: "0 auto" }}>
            A simple 4-step process. We handle the complexity so you don&apos;t have to.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="step-card"
              style={{
                padding: "32px 28px",
                position: "relative",
              }}
            >
              {/* Connecting line above (desktop) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "52px",
                    right: "-1px",
                    width: "0",
                    height: "0",
                  }}
                />
              )}

              {/* Number badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#FF4D00",
                    letterSpacing: "0.06em",
                    background: "rgba(255,77,0,0.1)",
                    border: "1px solid rgba(255,77,0,0.2)",
                    borderRadius: "6px",
                    padding: "3px 8px",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div style={{ marginBottom: "16px" }}>{step.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#F5F5F5",
                  marginBottom: "10px",
                  letterSpacing: "-0.02em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {step.title}
                {step.hasSparkles && <Sparkles size={16} style={{ color: "#FF4D00" }} />}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#888",
                  lineHeight: 1.65,
                  marginBottom: "12px",
                }}
              >
                {step.desc}
              </p>

              {/* Detail */}
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#FF6B35",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "64px",
            textAlign: "center",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(255,77,0,0.06) 0%, rgba(255,77,0,0.02) 100%)",
            border: "1px solid rgba(255,77,0,0.15)",
            borderRadius: "16px",
          }}
        >
          <p style={{ color: "#BBBBBB", marginBottom: "20px", fontSize: "1.05rem" }}>
            Ready to get your business online?
          </p>
          <a
            href="#contact"
            id="hiw-cta"
            className="btn-brand"
            style={{
              padding: "13px 28px",
              borderRadius: "9px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Start for free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
