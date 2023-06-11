import React from "react";

export default function CompanySection({ company }) {
  return (
    <div className="company-section">
      <div className="company-icon">{getFirstCharacter(company)}</div>
      {company}
    </div>
  );
}

function getFirstCharacter(company) {
  return company.charAt(0).toUpperCase();
}
