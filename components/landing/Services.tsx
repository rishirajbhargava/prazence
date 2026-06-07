const packages = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    price: "₹14,999",
    period: "one-time",
    tagline: "Get found on Google.",
    features: [
      "1-page responsive website",
      "Google Business Profile setup",
      "WhatsApp chat button",
      "Basic on-page SEO",
      "1 month free support",
      "Mobile-optimised design",
    ],
    cta: "Get Starter",
    featured: false,
  },
  {
    id: "business",
    name: "Business",
    badge: "Most Popular",
    price: "₹24,999",
    period: "one-time",
    tagline: "A complete web presence.",
    features: [
      "Up to 5-page website",
      "Google Business Profile + reviews setup",
      "WhatsApp integration",
      "Contact form with email alerts",
      "On-page SEO + Search Console",
      "2 months free support",
      "Fast-load, mobile-first design",
    ],
    cta: "Get Business",
    featured: true,
  },
  {
    id: "growth",
    name: "Growth",
    badge: null,
    price: "₹34,999",
    period: "one-time + ₹7,999/mo",
    tagline: "Grow with monthly support.",
    features: [
      "Everything in Business",
      "Monthly SEO reporting",
      "Google Ads basic setup",
      "Instagram + Facebook setup",
      "2 content updates per month",
      "Priority WhatsApp support",
    ],
    cta: "Get Growth",
    featured: false,
  },
];

const addons = [
  { name: "Logo design", price: "₹3,999" },
  { name: "Extra page", price: "₹1,999/page" },
  { name: "Domain + hosting setup", price: "₹2,999" },
  { name: "WhatsApp Business API", price: "₹4,999" },
  { name: "GST invoice setup", price: "₹1,999" },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>Packages</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#F5F5F5",
            marginBottom: "16px",
          }}
        >
          Pick your plan
        </h2>
        <p style={{ color: "#BBBBBB", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
          Transparent pricing. No hidden fees. Pay once, go online.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-${pkg.id}`}
            className="card-hover"
            style={{
              background: pkg.featured ? "#1A1A1A" : "#141414",
              border: pkg.featured ? "1px solid #FF4D00" : "1px solid #2E2E2E",
              borderRadius: "16px",
              padding: "32px",
              position: "relative",
              boxShadow: pkg.featured ? "0 0 40px rgba(255,77,0,0.12)" : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Badge */}
            {pkg.badge && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#FF4D00",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: "99px",
                  whiteSpace: "nowrap",
                }}
              >
                {pkg.badge}
              </div>
            )}

            {/* Package name */}
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: pkg.featured ? "#FF4D00" : "#666",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              {pkg.name}
            </p>

            {/* Price */}
            <div style={{ marginBottom: "6px" }}>
              <span style={{ fontSize: "2.4rem", fontWeight: 700, color: "#F5F5F5", letterSpacing: "-0.04em" }}>
                {pkg.price}
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "#666", marginBottom: "12px" }}>{pkg.period}</p>

            {/* Tagline */}
            <p style={{ fontSize: "0.95rem", color: "#BBBBBB", marginBottom: "28px", borderBottom: "1px solid #2E2E2E", paddingBottom: "20px" }}>
              {pkg.tagline}
            </p>

            {/* Features */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {pkg.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#BBBBBB" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                    <circle cx="8" cy="8" r="7.5" stroke={pkg.featured ? "#FF4D00" : "#3A3A3A"} />
                    <path d="M5 8l2 2 4-4" stroke={pkg.featured ? "#FF4D00" : "#666"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              id={`cta-${pkg.id}`}
              className={pkg.featured ? "btn-brand" : "btn-ghost"}
              style={{
                display: "block",
                width: "100%",
                padding: "13px 20px",
                borderRadius: "9px",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              {pkg.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div
        style={{
          background: "#141414",
          border: "1px solid #2E2E2E",
          borderRadius: "14px",
          padding: "32px",
        }}
      >
        <p className="section-label" style={{ marginBottom: "16px" }}>Add-ons</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {addons.map((addon) => (
            <div
              key={addon.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                background: "#1A1A1A",
                borderRadius: "8px",
                border: "1px solid #2E2E2E",
              }}
            >
              <span style={{ fontSize: "0.88rem", color: "#BBBBBB" }}>{addon.name}</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#FF4D00" }}>{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
