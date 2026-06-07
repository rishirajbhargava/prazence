"use client";

import { useState } from "react";
import Select from "@/components/Ui/Select";

import { Mail, MessageCircle, Sparkles } from "@/components/Ui/Icons";

const businessTypes = [
  "Salon / Spa",
  "Restaurant / Cafe",
  "Clinic / Doctor",
  "Coaching / Tutor",
  "Boutique / Shop",
  "Gym / Fitness",
  "Photographer",
  "CA / Accountant",
  "Other",
];

const packages = ["Prazence Starter - ₹14,999", "Prazence Business - ₹24,999", "Prazence Growth - ₹34,999", "Not sure yet"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    packageInterest: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | { target: { name: string; value: string } }
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to Firebase Firestore
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "#0A0A0A",
        borderTop: "1px solid #1E1E1E",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Left - copy */}
        <div>
          <p className="section-label" style={{ marginBottom: "16px" }}>Get started</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#F5F5F5",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Let&apos;s put your business{" "}
            <span className="text-gradient">online</span>
          </h2>
          <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "32px" }}>
            Free consultation. No commitment. We&apos;ll discuss your business and recommend the right package.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              {
                icon: <Mail size={22} style={{ color: "#FF4D00" }} />,
                label: "Email us",
                value: "hello@prazence.in",
                href: "mailto:hello@prazence.in",
              },
              {
                icon: <MessageCircle size={22} style={{ color: "#FF4D00" }} />,
                label: "Mobile",
                value: "+91 9452509351",
                href: "https://wa.me/919452509351?text=Hi%2C%20I'm%20interested%20in%20getting%20my%20business%20online%20with%20Prazence.",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  background: "#141414",
                  border: "1px solid #2E2E2E",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "#FF4D00")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "#2E2E2E")
                }
              >
                {item.icon}
                <div>
                  <p style={{ fontSize: "0.78rem", color: "#666", marginBottom: "2px" }}>{item.label}</p>
                  <p style={{ fontSize: "0.9rem", color: "#F5F5F5", fontWeight: 500 }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919452509351?text=Hi%2C%20I'm%20interested%20in%20getting%20my%20business%20online%20with%20Prazence."
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px 24px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "background 0.2s, transform 0.15s",
              border: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1ebe5d";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#25D366";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.523 5.836L.057 23.086a.75.75 0 00.92.879l5.4-1.417A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.627-.5-5.142-1.375L3 21.75l1.14-4.756A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Right - form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: "#141414",
                border: "1px solid rgba(255,77,0,0.3)",
                borderRadius: "16px",
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <Sparkles size={48} style={{ color: "#FF4D00" }} />
              </div>
              <h3 style={{ color: "#F5F5F5", fontSize: "1.3rem", fontWeight: 600, marginBottom: "10px" }}>
                We got your message!
              </h3>
              <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.6 }}>
                We&apos;ll reach out within 24 hours via WhatsApp or email to schedule your free consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#141414",
                border: "1px solid #2E2E2E",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Row */}
              <div className="form-row">
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                    Your name *
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ramesh Kumar"
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>Email</label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                  Business name *
                </label>
                <input
                  id="form-business"
                  name="businessName"
                  required
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Sharma Salon"
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                    Business type *
                  </label>
                  <Select
                    id="form-type"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    options={businessTypes}
                    placeholder="Select type"
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                    Package interest
                  </label>
                  <Select
                    id="form-package"
                    name="packageInterest"
                    value={form.packageInterest}
                    onChange={handleChange}
                    options={packages}
                    placeholder="Select package"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.78rem", color: "#666", display: "block", marginBottom: "6px" }}>
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your business..."
                  rows={3}
                  className="form-input"
                  style={{ resize: "vertical", minHeight: "80px" }}
                />
              </div>

              <button
                id="form-submit"
                type="submit"
                disabled={loading}
                className="btn-brand"
                style={{
                  padding: "14px 24px",
                  borderRadius: "9px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <>
                    <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send enquiry
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
              <p style={{ fontSize: "0.75rem", color: "#444", textAlign: "center" }}>
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
