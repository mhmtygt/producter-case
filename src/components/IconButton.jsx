import React from "react";

export default function IconButton({ children, className }) {
  return <button className={`icon-button ${className}`}>{children}</button>;
}
