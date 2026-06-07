"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most projects are delivered within 5–7 business days. Complex projects may take up to 10 days. You'll see live progress updates in your client portal throughout.",
  },
  {
    q: "Do I need to provide content and photos?",
    a: "Not necessarily. If you have photos and content ready, great - we'll use them. If not, we'll write basic content for you based on what you share in the onboarding form. You can always upgrade later.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Every package includes a free support period (1–2 months). During this time, you can request changes and we'll handle them. After that, you can book our Growth retainer for ongoing updates.",
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Domain + hosting setup is available as an add-on for ₹2,999. We recommend reliable providers and handle the technical setup. Annual renewal is your cost (~₹1,000–2,000/year).",
  },
  {
    q: "How do I make the payment?",
    a: "We use Razorpay - you can pay via UPI, credit/debit card, or net banking. You'll receive a secure payment link. GST invoice is issued after payment.",
  },
  {
    q: "Can I see my project progress?",
    a: "Yes! After you pay, you get access to a private client portal where you can track your project stage in real time, view updates from our team, upload files, and approve your final website.",
  },
  {
    q: "Do you work with businesses outside your city?",
    a: "Yes - we work with businesses across India. Everything is done remotely via your client portal, email, and WhatsApp. Location doesn't matter.",
  },
  {
    q: "Will my website appear on Google?",
    a: "Yes. We set up your Google Business profile and submit your site to Google Search Console as part of every package. Ranking takes 2–8 weeks depending on competition in your area.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>FAQ</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#F5F5F5",
            marginBottom: "12px",
          }}
        >
          Common questions
        </h2>
        <p style={{ color: "#BBBBBB" }}>
          Still have questions?{" "}
          <a href="#contact" style={{ color: "#FF4D00", textDecoration: "none" }}>
            Ask us on WhatsApp →
          </a>
        </p>
      </div>

      {/* Accordion */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: "#141414",
              border: "1px solid",
              borderColor: open === i ? "rgba(255,77,0,0.3)" : "#2E2E2E",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              id={`faq-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                padding: "20px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: open === i ? "#F5F5F5" : "#BBBBBB",
                  transition: "color 0.2s",
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: open === i ? "#FF4D00" : "#2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s ease, transform 0.2s ease",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2v8M2 6h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {open === i && (
              <div
                style={{
                  padding: "0 24px 20px",
                  fontSize: "0.9rem",
                  color: "#888",
                  lineHeight: 1.7,
                  borderTop: "1px solid #2E2E2E",
                  paddingTop: "16px",
                  marginTop: 0,
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
