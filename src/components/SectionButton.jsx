import React from "react";

export default function SectionButton({ children, text }) {
  return (
    <button className={`section-button ${text === "Task" && "selected"}`}>
      {children}
      {text}
    </button>
  );
}
