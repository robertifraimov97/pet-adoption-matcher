import { useContext } from "react";
import { MatchContext } from "../MatchContext";
import PetCard from "../components/PetCard";

function AllOtherPets() {
  const { pets } = useContext(MatchContext);

  const otherAnimals = pets.filter(
    (pet) =>
      pet.species.toLowerCase() !== "dog" &&
      pet.species.toLowerCase() !== "cat"
  );

  return (
    <div className="results-grid">
      {otherAnimals.length > 0 ? (
        otherAnimals.map((pet) => <PetCard key={pet.id} pet={pet} />)
      ) : (
        <p>No other animals available right now.</p>
      )}
    </div>
  );
}

export default AllOtherPets;