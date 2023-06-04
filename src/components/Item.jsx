import React from "react";

export default function Item({ provided, item, ...rest }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      {...rest}
    >
      {item.title}
    </div>
  );
}
