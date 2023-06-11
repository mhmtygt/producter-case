import React from "react";

import { Draggable, Droppable } from "react-beautiful-dnd";

import Item from "./Item";

export default function KanbanColumn({
  header,
  items,
  droppableId,
  icon,
  taskCount,
}) {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <div className="header-icon">{icon}</div>
        <div className="header-text">{header}</div>
        <div className="task-count">{taskCount}</div>
      </div>
      <div className="wrapper"></div>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className="kanban-column-cards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items?.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <Item
                    provided={provided}
                    item={item}
                    className="draggable-item"
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
