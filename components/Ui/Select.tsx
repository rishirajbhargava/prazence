"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  options: (string | Option)[];
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export default function Select({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  style,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to Option objects
  const normalizedOptions: Option[] = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue,
      },
    });
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        ...style,
      }}
    >
      {/* Hidden input for HTML form submission validation */}
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={() => {}}
        style={{
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          bottom: 0,
        }}
        tabIndex={-1}
      />

      {/* Select Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#1A1A1A",
          border: isOpen ? "1px solid #FF4D00" : "1px solid #2E2E2E",
          color: selectedOption ? "#F5F5F5" : "#666",
          borderRadius: "8px",
          padding: "12px 16px",
          width: "100%",
          fontSize: "0.9375rem",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: isOpen ? "0 0 0 3px rgba(255,77,0,0.12)" : "none",
        }}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "#FF4D00" : "#666",
          }}
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Options Dropdown */}
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 50,
            background: "#242424",
            border: "1px solid #3A3A3A",
            borderRadius: "8px",
            maxHeight: "220px",
            overflowY: "auto",
            margin: 0,
            padding: "6px",
            listStyle: "none",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
          }}
        >
          {normalizedOptions.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                    textAlign: "left",
                    background: isSelected ? "var(--color-brand-muted-bg)" : "transparent",
                    color: isSelected ? "#FF4D00" : "#BBBBBB",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background 0.15s, color 0.15s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "rgba(255, 77, 0, 0.04)";
                      e.currentTarget.style.color = "#F5F5F5";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#BBBBBB";
                    }
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="#FF4D00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
