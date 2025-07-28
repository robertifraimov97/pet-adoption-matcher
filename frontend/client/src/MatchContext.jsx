import { createContext, useState } from "react";
import petsData from "./data/pets.json"; // או הנתיב הנכון אל הדאטה שלך

export const MatchContext = createContext();

export function MatchProvider({ children }) {
  const [matchedPets, setMatchedPets] = useState([]);
  const [pets, setPets] = useState(petsData); // ← מוסיפים את זה כאן

  return (
    <MatchContext.Provider value={{ matchedPets, setMatchedPets, pets, setPets }}>
      {children}
    </MatchContext.Provider>
  );
}