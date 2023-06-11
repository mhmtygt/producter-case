import React from "react";

import TaskIcon from "../assets/task_icon.svg";
import CategoryIcon from "./CategoryIcon";

import ProfileIcon1 from "../assets/profile_icon_1.svg";
import ProfileIcon2 from "../assets/profile_icon_2.svg";
import ProfileIcon3 from "../assets/profile_icon_3.svg";

import UrgentTaskIcon from "../assets/urgent_task_icon.svg";
import MediumTaskIcon from "../assets/medium_task_icon.svg";
import LowTaskIcon from "../assets/low_task_icon.svg";

function generateProfile(random) {
  if (random % 2 === 0) return <ProfileIcon1 />;
  else if (random % 3 === 0) return <ProfileIcon2 />;
  else return <ProfileIcon3 />;
}

function generateUrgentStatus(random) {
  if (random % 2 === 0) return <UrgentTaskIcon />;
  else if (random % 3 === 0) return <MediumTaskIcon />;
  else return <LowTaskIcon />;
}

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
          {generateUrgentStatus(item.priority)}
          <div className="comment">{item.commentCount}</div>
          {generateProfile(item.profile)}
        </div>
      </div>
    </div>
  );
}
