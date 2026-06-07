import { Lock, Smartphone, Receipt, Check } from "@/components/Ui/Icons";

const testimonials = [
  {
    quote:
      "Getting our salon on Google was something we'd put off for 2 years. Prazence handled everything in a week. Now we get 15–20 extra calls a month from people who found us online.",
    name: "Priya Sharma",
    role: "Owner, Sharma Salon",
    location: "Mumbai",
    stars: 5,
    avatar: "PS",
    avatarColor: "#1A1A1A",
  },
  {
    quote:
      "Our restaurant had zero online presence. Now we're on Google Maps and our website takes reservations. The portal kept us updated throughout - I knew exactly what was happening.",
    name: "Arjun Nair",
    role: "Co-founder, Spice Route",
    location: "Pune",
    stars: 5,
    avatar: "AN",
    avatarColor: "#4D1D08",
  },
  {
    quote:
      "Very professional and delivered exactly what they promised. My clinic website went live in 6 days. Patients can now find me on Search and book appointments.",
    name: "Dr. Reena Mehta",
    role: "Physician",
    location: "Hyderabad",
    stars: 5,
    avatar: "RM",
    avatarColor: "#2E2E2E",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FF4D00">
          <path d="M8 1l1.8 3.6L14 5.5l-3 2.9.7 4.1L8 10.5 4.3 12.5l.7-4.1L2 5.5l4.2-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        background: "#0A0A0A",
        borderTop: "1px solid #1E1E1E",
        borderBottom: "1px solid #1E1E1E",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>Testimonials</p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#F5F5F5",
            }}
          >
            Trusted by local businesses
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#141414",
                border: "1px solid #2E2E2E",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: "0.93rem",
                  color: "#BBBBBB",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid #2E2E2E" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: t.avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F5F5F5", marginBottom: "2px" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#666" }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          style={{
            marginTop: "56px",
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "24px",
            background: "#141414",
            border: "1px solid #2E2E2E",
            borderRadius: "12px",
          }}
        >
          {[
            { icon: <Lock size={16} style={{ color: "#FF4D00" }} />, text: "Secure payments via Razorpay" },
            { icon: <Smartphone size={16} style={{ color: "#FF4D00" }} />, text: "WhatsApp support always" },
            { icon: <Receipt size={16} style={{ color: "#FF4D00" }} />, text: "GST invoice provided" },
            { icon: <Check size={16} style={{ color: "#FF4D00" }} />, text: "No tech skills needed" },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                color: "#888",
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
