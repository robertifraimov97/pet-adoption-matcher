import { useContext } from "react";
import { MatchContext } from "../MatchContext";
import PetCard from "./PetCard";
import "./PetResults.css";

function PetResults() {
  const { matchedPets } = useContext(MatchContext);

  if (!matchedPets.length) {
    return <p>No matched pets found.</p>;
  }

  return (
    <div className="results-grid">
      {matchedPets.map((pet, index) => (
        <PetCard key={index} pet={pet} />
      ))}
    </div>
  );
}

export default PetResults;