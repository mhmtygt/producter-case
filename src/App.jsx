import React, { useState } from "react";

import Board from "./components/Board";
import Dialog from "./components/Dialog";
import Form from "./components/Form";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleAddClick = () => {
    setOpen(true);
  };

  return (
    <div className="layout">
      <div className="app-grid">
        <div className="add-task-area">
          <Form handleAddClick={handleAddClick} />
        </div>
        <Board />
      </div>
      <Dialog open={open} setOpen={setOpen} />
    </div>
  );
}
