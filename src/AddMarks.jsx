import React, {useContext, useState} from "react";
import { MarksContext } from "./MarksContext";

export default function AddMarks() {
  const { addMarks } = useContext(MarksContext);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const handleAdd = () => {
    if (name && score) {
      addMarks({ name, score });
      setName("");
      setScore("");
    }
  };
  return (
    <div>
      <h3>Add Student Marks</h3>
      <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
      <button onClick={handleAdd}>Add Marks</button>

    </div>
  );
}