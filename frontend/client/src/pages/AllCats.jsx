import { useContext } from "react";
import { MatchContext } from "../MatchContext";
import PetCard from "../components/PetCard";

function AllCats() {
  const { pets } = useContext(MatchContext);

  const catList = pets.filter((pet) => pet.species.toLowerCase() === "cat");

  return (
    <div className="results-grid">
      {catList.map((cat) => (
        <PetCard key={cat.id} pet={cat} />
      ))}
    </div>
  );
}

export default AllCats;