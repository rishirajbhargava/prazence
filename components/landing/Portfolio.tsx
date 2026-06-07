"use client";

import { useState } from "react";
import { Scissors, Utensils, Hospital, BookOpen, Shirt, Camera } from "@/components/Ui/Icons";

const filters = ["All", "Salon", "Restaurant", "Clinic", "Shop", "Education"];

const portfolio = [
  {
    name: "Sharma Salon",
    type: "Salon",
    city: "Mumbai",
    gradient: "linear-gradient(135deg, #141414 0%, #262626 100%)",
    result: "3× more Google calls",
    package: "Business",
    icon: <Scissors size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
  {
    name: "Spice Route",
    type: "Restaurant",
    city: "Pune",
    gradient: "linear-gradient(135deg, #2A0F03 0%, #591D02 100%)",
    result: "Listed on Google Maps",
    package: "Starter",
    icon: <Utensils size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
  {
    name: "Dr. Mehta Clinic",
    type: "Clinic",
    city: "Hyderabad",
    gradient: "linear-gradient(135deg, #1F1F1F 0%, #3D3D3D 100%)",
    result: "Top 3 local search",
    package: "Business",
    icon: <Hospital size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
  {
    name: "Bright Minds Coaching",
    type: "Education",
    city: "Delhi",
    gradient: "linear-gradient(135deg, #3D1400 0%, #802B00 100%)",
    result: "Admissions form live",
    package: "Growth",
    icon: <BookOpen size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
  {
    name: "The Boutique Studio",
    type: "Shop",
    city: "Bangalore",
    gradient: "linear-gradient(135deg, #111111 0%, #1A1A1A 100%)",
    result: "Instagram + website",
    package: "Growth",
    icon: <Shirt size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
  {
    name: "Raj Photography",
    type: "Salon",
    city: "Chennai",
    gradient: "linear-gradient(135deg, #4D1A00 0%, #B33C00 100%)",
    result: "Portfolio live in 5 days",
    package: "Business",
    icon: <Camera size={44} style={{ color: "rgba(255,255,255,0.95)" }} />,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((p) => p.type === active);

  return (
    <section
      id="portfolio"
      style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>Our work</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#F5F5F5",
            marginBottom: "16px",
          }}
        >
          Built for real businesses
        </h2>
        <p style={{ color: "#BBBBBB", fontSize: "1.05rem", maxWidth: "440px", margin: "0 auto" }}>
          From salons in Mumbai to clinics in Hyderabad - real businesses, real results.
        </p>
      </div>

      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            id={`filter-${f.toLowerCase()}`}
            onClick={() => setActive(f)}
            style={{
              padding: "8px 18px",
              borderRadius: "99px",
              fontSize: "0.85rem",
              fontWeight: 500,
              border: "1px solid",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: active === f ? "#F5F5F5" : "transparent",
              borderColor: active === f ? "#F5F5F5" : "#2E2E2E",
              color: active === f ? "#0D0D0D" : "#888",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.name}
            className="card-hover"
            style={{
              background: "#141414",
              border: "1px solid #2E2E2E",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {/* Gradient "screenshot" */}
            <div
              style={{
                height: "180px",
                background: item.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {item.icon}
              {/* Mock browser chrome */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  display: "flex",
                  gap: "5px",
                }}
              >
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                  <div key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c, opacity: 0.7 }} />
                ))}
              </div>
              {/* Package badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "99px",
                  padding: "3px 10px",
                  fontSize: "0.72rem",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                {item.package}
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#F5F5F5", marginBottom: "4px" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "#666" }}>
                    {item.type} · {item.city}
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid #2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#FF4D00",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#FF4D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item.result}
                </span>
                <a
                  href="#contact"
                  style={{
                    fontSize: "0.8rem",
                    color: "#FF4D00",
                    textDecoration: "none",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Like this? →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
