import React from "react";
import { Provider } from "react-redux";
import Canvas from "./Pages/Canvas";
import { store } from "./store/store";
import Toolbar from "./Pages/Toolbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <Toolbar />

          <div className="mt-8 flex justify-center">
            <Canvas />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
