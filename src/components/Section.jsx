import React from "react";

import { Draggable, Droppable } from "react-beautiful-dnd";

import Item from "./Item";

export default function Section({ header, items, droppableId }) {
  return (
    <>
      <div className="kanban-column-header">{header}</div>
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
    </>
  );
}
