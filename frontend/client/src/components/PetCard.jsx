import { useNavigate } from "react-router-dom";
import "./PetCard.css";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pet/${pet.id}`);
  };

  return (
    <div className="pet-card" onClick={handleClick}>
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>Species: {pet.species}</p>
      <p>Age: {pet.age}</p>
      <p className="match-score">Match Score: {pet.matchScore}%</p>
    </div>
  );
}

export default PetCard;