import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Drawing properties
  tool: "pencil",
  color: "#000000",
  lines: [],
  isDrawing: false,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    // Drawing properties
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    startDrawing: (state, action) => {
      state.isDrawing = true;
      state.lines.push({
        tool: state.tool,
        color: state.tool === "eraser" ? "#ffffff" : state.color,
        points: [action.payload.x, action.payload.y],
      });
    },
    addPoint: (state, action) => {
      const currentLine = state.lines[state.lines.length - 1];
      currentLine.points.push(action.payload.x, action.payload.y);
    },
    stopDrawing: (state) => {
      state.isDrawing = false;
    },
    clearCanvas: (state) => {
      state.lines = [];
    },
  },
});

export const {
  setTool,
  setColor,
  startDrawing,
  addPoint,
  stopDrawing,
  clearCanvas,
} = canvasSlice.actions;

export default canvasSlice.reducer;
