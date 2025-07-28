import { useContext } from "react";
import { MatchContext } from "../MatchContext";
import PetCard from "../components/PetCard";
import "./AllPets.css";

function AllDogs() {
  const { pets } = useContext(MatchContext);

  const dogs = pets.filter((pet) => pet.species.toLowerCase() === "dog");

  return (
    <div className="all-pets-page">
      <h2>🐶 Dogs Available for Adoption</h2>
      <div className="results-grid">
        {dogs.length > 0 ? (
          dogs.map((dog) => <PetCard key={dog.id} pet={dog} />)
        ) : (
          <p>No dogs available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default AllDogs;