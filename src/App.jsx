import { useState, useEffect } from "react";
import GiftContainer from "./components/GiftContainer";
import "./App.css";

function App() {
  const [savedGifts, setSavedGifts] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedGifts"));
    if (data) setSavedGifts(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("savedGifts", JSON.stringify(savedGifts));
  }, [savedGifts]);

  return (
    <div className="app">
      <h1>🎁 Gift Ideas App</h1>

      <GiftContainer
        savedGifts={savedGifts}
        setSavedGifts={setSavedGifts}
      />
    </div>
  );
}

export default App;