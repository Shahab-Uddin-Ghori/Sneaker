import { useState } from "react";

import "./App.css";
import React from "react";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import HeroText from "./components/HeroText";
import PrimaryBtn from "./components/PrimaryBtn";
import SecBtn from "./components/SecBtn";
import ForwardBtn from "./components/ForwardBtn";
import BackBtn from "./components/BackBtn";

function App() {
  return (
    <main>
      <Nav />
      <ForwardBtn />
      <BackBtn />
    </main>
  );
}

export default App;
