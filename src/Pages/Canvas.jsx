import React from "react";
import { Layer, Stage, Line } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { addPoint, startDrawing, stopDrawing } from "../store/canvasSlice";

const Canvas = () => {
  const dispatch = useDispatch();
  const { lines, isDrawing } = useSelector((state) => state.canvas);

  //logged lines
  // [
  //     {
  //       tool: 'pencil',
  //       color: '#000000',
  //       points: [ 581.9253886957964, 39.185316511178925 ]
  //     }
  // ]

  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();
    dispatch(startDrawing(pos));
  };

  const handleMouseMove = (e)=>{
    if(!isDrawing) return;
    const pos = e.target.getStage().getPointerPosition();
    dispatch(addPoint(pos));
  }

  const handleMouseUp = (e)=>{
    dispatch(stopDrawing());
  }

  return (
    <>
      <Stage
        width={window.innerWidth * 0.8}
        height={window.innerHeight * 0.8}
        onMouseDown={handleMouseDown}
        onMouseMove = {handleMouseMove}
        onMouseUp = {handleMouseUp}
        className="border border-gray-300 shadow-lg rounded-lg bg-white"
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={line.tool === "eraser" ? 20 : 5}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default Canvas;
