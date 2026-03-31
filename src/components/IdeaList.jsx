import IdeaCard from "./IdeaCard";

function IdeaList({ ideas, saveGift }) {
  
  //  Conditional Rendering
  if (ideas.length === 0) return null;

  return (
    <div className="card">
      <h3>💡 Gift Ideas</h3>

      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} saveGift={saveGift} />
      ))}
    </div>
  );
}

export default IdeaList;