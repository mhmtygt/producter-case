import React from "react";

export default function ProfileSection({ children, name }) {
  return (
    <div className="profile-section">
      {children}
      {name}
    </div>
  );
}
