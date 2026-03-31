import { useState } from "react";
import Button from "./Button";

function GiftForm({ generateIdeas }) {
  const [age, setAge] = useState("");
  const [preference, setPreference] = useState("");

  const handleSubmit = () => {
    // Validation
    if (!age || !preference) {
      alert("Fill all fields");
      return;
    }

    generateIdeas(age, preference);
  };

  return (
    <div className="card">
      <h2>Find a Gift</h2>

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)} 
      />

      <label>Preference:</label>
      <select
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
      >
        <option value="">Select</option>
        <option value="tech">Tech & Gadgets</option>
        <option value="sports">Sports</option>
        <option value="study">Study</option>
      </select>

      <Button onClick={handleSubmit}>🔍 Generate Ideas</Button>
    </div>
  );
}

export default GiftForm;