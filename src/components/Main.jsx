import React, { useState } from "react";

import MainHeader from "./MainHeader";
import MainContent from "./MainContent";

export default function Main() {
  const [open, setOpen] = useState(false);

  const handleAddClick = () => {
    setOpen(true);
  };

  return (
    <div className="second-column">
      <MainHeader handleAddClick={handleAddClick} />
      <MainContent open={open} setOpen={setOpen} />
    </div>
  );
}
