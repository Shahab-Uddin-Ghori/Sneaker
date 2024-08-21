import { useState } from "react";

import "./App.css";
import React from "react";
import HeroSec from "./HeroSec";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";

function App() {
  return (
    <main className="main">
      <HeroSec />
      <Sec2 />
      <Sec3 />
    </main>
  );
}

export default App;
