import { useState } from "react";
import GiftForm from "./GiftForm";
import IdeaList from "./IdeaList";
import SavedGifts from "./SavedGifts";

function GiftContainer({ savedGifts, setSavedGifts }) {
  const [ideas, setIdeas] = useState([]);

  // Custom handler
  const generateIdeas = (age, preference) => {
    let result = [];

    if (preference === "tech") {
      result = [
        { id: 1, title: "Smart Speaker",emoji: "🔊", desc: "Voice assistant for home." },
        { id: 2, title: "Mechanical Keyboard", emoji: "⌨️", desc: "Great for typing." }
      ];
    } else if (preference === "sports") {
      result = [
        { id: 3, title: "Football", emoji: "⚽", desc: "Outdoor fun." },
        { id: 4, title: "Cricket Bat", emoji: "🏏", desc: "Play with friends." }
      ];
    } else {
      result = [
        { id: 5, title: "Books", emoji: "📚", desc: "Knowledge gift." },
         { id: 6, title: "Popular Novel", emoji: "📖", desc: "A gripping story they can't put down." }
      ];
    }

    setIdeas(result);
  };

  // Save Gift (CREATE)
  const saveGift = (gift) => {
    setSavedGifts([...savedGifts, gift]);
  };

  // Delete Gift (DELETE)
  const deleteGift = (id) => {
    setSavedGifts(savedGifts.filter(g => g.id !== id));
  };

  return (
    <>
      <GiftForm generateIdeas={generateIdeas} />

      <IdeaList ideas={ideas} saveGift={saveGift} />

      <SavedGifts gifts={savedGifts} deleteGift={deleteGift} />
    </>
  );
}

export default GiftContainer;