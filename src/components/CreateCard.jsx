import React from "react";
import Entry from "./Entry";

function CreateCard(card) {
  return (
    <Entry
      key={card.id}
      emoji={card.emoji}
      term={card.name}
      meaning={card.meaning}
    />
  );
}

export default CreateCard;
