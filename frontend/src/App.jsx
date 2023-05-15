import { useState } from "react";

import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      Hello InceptionU!
    </div>
  );
}

export default App;
