import React from "react";

export default function CategoryIcon({ children, text }) {
  return (
    <div className="category-icon">
      {children}
      {text}
    </div>
  );
}
