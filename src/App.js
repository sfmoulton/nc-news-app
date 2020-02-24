import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main>
      <Header />
      <Router>
        <HomePage path="/" />
      </Router>
    </main>
  );
}

export default App;
