import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

    // bugResolved: (bugs, action) => {
    //   const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    //   bugs[index].resolved = true;
    // },

    // bugRemoved: (bugs, action) => {
    //   const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    //   delete bugs[index];
    // },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
