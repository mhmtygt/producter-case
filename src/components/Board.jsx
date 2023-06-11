import React, { useEffect } from "react";
import { customAlphabet } from "nanoid";

import { useSelector, useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import KanbanColumn from "./KanbanColumn";
import {
  createItemsByEachSection,
  setBoardData,
} from "../redux/slices/itemSlice";

import ToDoColumnIcon from "../assets/todo_column_icon.svg";
import DoneColumnIcon from "../assets/done_column_icon.svg";
import BacklogColumnIcon from "../assets/backlog_column_icon.svg";
import InProgressColumnIcon from "../assets/inprogress_column_icon.svg";

const sectionIcons = [
  <BacklogColumnIcon />,
  <ToDoColumnIcon />,
  <InProgressColumnIcon />,
  <DoneColumnIcon />,
];

export default function Board() {
  const itemState = useSelector((state) => state.itemState);
  const dispatch = useDispatch();
  const taskCount = customAlphabet("123456789", 2);

  useEffect(() => {
    dispatch(setBoardData(createItemsByEachSection(itemState)));
  }, [itemState.newTask]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const data = reorderBoardData({
      map: itemState.boardData,
      source,
      destination,
    });

    dispatch(setBoardData(data.map));
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {Object.keys(itemState.boardData).map((value, index) => (
        <KanbanColumn
          key={index}
          header={value}
          items={itemState.boardData[value]}
          droppableId={value}
          icon={sectionIcons[index]}
          taskCount={taskCount()}
        />
      ))}
    </DragDropContext>
  );
}

const reorderBoardData = ({ map, source, destination }) => {
  const currentBoardData = [...map[source.droppableId]];
  const destinationBoardData = [...map[destination.droppableId]];
  const draggedItem = currentBoardData[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorderArray(
      currentBoardData,
      source.index,
      destination.index
    );
    const result = {
      ...map,
      [source.droppableId]: reordered,
    };
    return {
      map: result,
    };
  }

  // moving to different list
  currentBoardData.splice(source.index, 1);
  destinationBoardData.splice(destination.index, 0, draggedItem);

  const result = {
    ...map,
    [source.droppableId]: currentBoardData,
    [destination.droppableId]: destinationBoardData,
  };

  return {
    map: result,
  };
};

const reorderArray = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
