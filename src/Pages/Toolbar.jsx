import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCanvas, setTool } from "../store/canvasSlice";
import { TbPencilDiscount } from "react-icons/tb";
import { BiEraser } from "react-icons/bi";
import { BsEraser } from "react-icons/bs";

const Toolbar = () => {
  const dispatch = useDispatch();
  const { tool } = useSelector((state) => state.canvas);

  const handleToolChange = (newTool) => {
    dispatch(setTool(newTool));
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
          className={`px-4 py-2 rounded ${
            tool === "pencil" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          //   onClick={() => dispatch(setTool("pencil"))}
          onClick={() => handleToolChange("pencil")}
          title="Pencil"
        >
          <TbPencilDiscount className="w-4 h-4" />
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tool === "eraser" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          //   onClick={() => dispatch(setTool("eraser"))}
          onClick={() => handleToolChange("eraser")}
          title="eraser"
        >
          <BsEraser className="w-4 h-4" />
        </button>
        <button
          className={`px-4 py-1 rounded bg-red-500 text-white`}
          onClick={() => dispatch(clearCanvas())}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Toolbar;
