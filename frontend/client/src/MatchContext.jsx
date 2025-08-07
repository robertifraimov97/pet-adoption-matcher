import { createContext, useState } from "react";
import petsData from "./data/pets.json";

export const MatchContext = createContext();

export function MatchProvider({ children }) {
  const [matchedPets, setMatchedPets] = useState([]);
  const [pets, setPets] = useState(petsData);

  return (
    <MatchContext.Provider value={{ matchedPets, setMatchedPets, pets, setPets }}>
      {children}
    </MatchContext.Provider>
  );
}