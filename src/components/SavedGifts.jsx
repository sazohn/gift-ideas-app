import Button from "./Button";

function SavedGifts({ gifts, deleteGift }) {
  return (
    <div className="card">
      <h3>💾 Saved Gifts ({gifts.length})</h3>

      {/* Conditional Rendering */}
      {gifts.length === 0 ? (
        <p>No saved gifts yet.</p>
      ) : (
        gifts.map((gift) => (
          <div key={gift.id} className="idea">
            <h4>{gift.title}</h4>
            <p>{gift.desc}</p>

            <Button variant="danger" onClick={() => deleteGift(gift.id)}>
              Delete
            </Button>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedGifts;