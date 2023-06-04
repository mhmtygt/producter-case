import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  newTask: {},
  todoItems: [],
  doneItems: [],
  sections: [
    {
      id: 1,
      name: "TO DO",
    },
    {
      id: 2,
      name: "DONE",
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
      state.todoItems = action.payload[state.sections[0].name];
      state.doneItems = action.payload[state.sections[1].name];
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
  if (sectionName === "TO DO") return [...state.todoItems];
  if (sectionName === "DONE") return [...state.doneItems];
};

export const { addTask, setBoardData } = itemSlice.actions;

export default itemSlice.reducer;
