import React from "react";

import Board from "./Board";
import Dialog from "./Dialog";
import MainContentHeader from "./MainContentHeader";

export default function MainContent({ open, setOpen }) {
  return (
    <div className="main-content">
      <MainContentHeader />
      <div className="main-content-kanban">
        <Board />
        <Dialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
