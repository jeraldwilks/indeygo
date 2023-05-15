import { useState } from "react";
import { Outlet } from 'react-router-dom'
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <>
      <Outlet/>
      Hello InceptionU!
    </>
  );
}

export default App;
