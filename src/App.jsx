import React from "react";
import { MarksContext } from "./MarksContext";
import MarkList from "./MarksList";
import AddMarks from "./AddMarks";
import "./App.css";

function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to the KL UNIVERSITY Marks Portal</h1>
      <AddMarks />
      <MarkList/>
    </div>
  );
}

export default App;