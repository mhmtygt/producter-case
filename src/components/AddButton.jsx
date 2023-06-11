import React from "react";

export default function AddButton({ children, handleAddClick }) {
  return (
    <button onClick={handleAddClick} className="icon-plus-button">
      {children}
    </button>
  );
}
