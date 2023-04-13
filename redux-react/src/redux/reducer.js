import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const ADD = "ADD";

export const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

export const messagerSlice = createSlice({
  name: "messager",
  initialState,

  reducers: {
    myMsgReducer: (state, action) => {
      switch (action.type) {
        case ADD:
          return [...state, action.message];
        default:
          return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { myMsgReducer, extraReducers } = messagerSlice.actions;

export default messagerSlice.reducer
