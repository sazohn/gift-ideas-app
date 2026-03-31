import Button from "./Button";

function IdeaCard({ idea, saveGift }) {
  return (
    <div className="idea">
      <h4>{idea.title}</h4>
      <p>{idea.desc}</p>

      <Button onClick={() => saveGift(idea)}>Save Gift</Button>
    </div>
  );
}

export default IdeaCard;