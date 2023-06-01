import React from "react";
import "./KanbanBoard.scss";

const KanbanBoard = () => {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="kanban-column-header">To Do</div>
        <div className="kanban-column-cards">
          {/* Cards in the "To Do" column */}
        </div>
      </div>
      <div className="kanban-column">
        <div className="kanban-column-header">In Progress</div>
        <div className="kanban-column-cards">
          {/* Cards in the "In Progress" column */}
        </div>
      </div>
      <div className="kanban-column">
        <div className="kanban-column-header">Done</div>
        <div className="kanban-column-cards">
          {/* Cards in the "Done" column */}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
