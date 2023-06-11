import React from "react";

import ArrowLeftIcon from "../assets/arrow_left_icon.svg";
import SprintIcon from "../assets/sprint_icon.svg";
import CategoryIcon from "../components/CategoryIcon";
import TeamFilledIcon from "../assets/team_filled_icon.svg";
import TeamIcon from "../assets/team_icon.svg";
import CalendarIcon from "../assets/calendar_icon.svg";
import TaskKanbanIcon from "../assets/task_kanban_icon.svg";
import TaskListIcon from "../assets/task_list_icon.svg";
import IconButton from "./IconButton";

export default function MainContentHeader() {
  return (
    <div className="main-content-header">
      <div className="main-content-header-section-1">
        <ArrowLeftIcon />
        <div className="divider-vertical" />
        <CategoryIcon text="SPR-06">
          <SprintIcon />
        </CategoryIcon>
        <div className="divider-vertical" />

        <CategoryIcon text="TEAM-10">
          <TeamFilledIcon />
        </CategoryIcon>
        <div className="divider-vertical" />

        <div className="sprint-name">New Sprint Name</div>
        <CalendarIcon />
        <TeamIcon />
        <button className="sprint-button">Complete Sprint</button>
      </div>
      <div className="main-content-header-section-2">
        <IconButton className="icon-small">
          <TaskListIcon />
        </IconButton>
        <IconButton className="selected icon-small">
          <TaskKanbanIcon />
        </IconButton>
      </div>
    </div>
  );
}
