import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  newTask: {},
  todoItems: [],
  doneItems: [],
  backlogItems: [],
  inProgressItems: [],
  sections: [
    {
      id: 1,
      name: "Backlog",
    },
    {
      id: 2,
      name: "To Do",
    },
    {
      id: 3,
      name: "In Progress",
    },
    {
      id: 4,
      name: "Done",
    },
  ],
  boardData: {},
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.newTask = action.payload;
      const newTask = action.payload;
      const currentTodoItems = current(state.todoItems).slice();
      currentTodoItems.splice(0, 0, newTask);

      state.todoItems = [...currentTodoItems];
    },

    setBoardData: (state, action) => {
      state.boardData = action.payload;
      state.backlogItems = action.payload[state.sections[0].name];
      state.todoItems = action.payload[state.sections[1].name];
      state.inProgressItems = action.payload[state.sections[2].name];
      state.doneItems = action.payload[state.sections[3].name];
    },
  },
});

export const createItemsByEachSection = (state) => {
  return state.sections.reduce((previous, section) => {
    return {
      ...previous,
      [section.name]: getItemListBySection(section.name, state),
    };
  }, {});
};

const getItemListBySection = (sectionName, state) => {
  if (sectionName === "To Do") return [...state.todoItems];
  if (sectionName === "Done") return [...state.doneItems];
  if (sectionName === "In Progress") return [...state.inProgressItems];
  if (sectionName === "Backlog") return [...state.backlogItems];
};

export const { addTask, setBoardData } = itemSlice.actions;

export default itemSlice.reducer;
