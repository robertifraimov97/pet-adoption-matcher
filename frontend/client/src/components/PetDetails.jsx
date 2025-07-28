import { useParams, useNavigate } from "react-router-dom";
import "./PetDetails.css";
import pets from "../data/pets.json";

function PetDetails() {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!pet) {
    return <div>Pet not found.</div>;
  }

  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} />
      <p><strong>Species:</strong> {pet.species}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Good with kids:</strong> {pet.goodWithKids ? "Yes" : "No"}</p>
      <p><strong>Needs yard:</strong> {pet.needsYard ? "Yes" : "No"}</p>
      <p><strong>Energy level:</strong> {pet.energyLevel}</p>
      <p><strong>Hypoallergenic:</strong> {pet.hypoallergenic ? "Yes" : "No"}</p>
      <p><strong>Experience required:</strong> {pet.experienceRequired ? "Yes" : "No"}</p>

      <button onClick={() => navigate("/results")}>
        ← Back to results
      </button>
    </div>
  );
}

export default PetDetails;