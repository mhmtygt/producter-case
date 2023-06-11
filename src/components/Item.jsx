import React from "react";

import TaskIcon from "../assets/task_icon.svg";
import CategoryIcon from "./CategoryIcon";

export default function Item({ provided, item, ...rest }) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      {...rest}
    >
      <div className="item-content">{item.title}</div>
      <div className="item-footer">
        <div className="footer-section-1">
          <CategoryIcon text={`TSK-${item.id}`}>
            <TaskIcon />
          </CategoryIcon>
        </div>
        <div className="footer-section-2">
          {item.priority}
          <div className="comment">{item.commentCount}</div>
          {item.profile}
        </div>
      </div>
    </div>
  );
}
