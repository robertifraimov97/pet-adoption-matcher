import { useState, useContext } from "react";
import "./PetForm.css";
import { MatchContext } from "./MatchContext";
import pets from "./data/pets.json";
import { useNavigate } from "react-router-dom";

function PetForm() {
  const [formData, setFormData] = useState({
    hasKids: "",
    hasYard: "",
    outOften: "",
    hasExperience: "",
    hasAllergy: ""
  });

  const { setMatchedPets } = useContext(MatchContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const matched = pets
    .map((pet) => {
      let score = 0;

      if (formData.hasKids === "yes" && pet.goodWithKids) score++;
      if (formData.hasYard === "house" && pet.needsYard) score++;
      if (formData.outOften === "no" && pet.energyLevel !== "high") score++;
      if (formData.hasExperience === "yes" || !pet.experienceRequired) score++;
      if (formData.hasAllergy === "no" || pet.hypoallergenic) score++;

        const matchScore = calculateMatchScore(pet, formData);

      return { ...pet, matchScore };
    })
    .filter((pet) => pet.matchScore >= 40)
    .sort((a, b) => b.matchScore - a.matchScore);

  setMatchedPets(matched);
  navigate("/results");
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pet Match Questionnaire</h2>

      <label>Do you have young children?</label><br />
      <select name="hasKids" value={formData.hasKids} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br /><br />

      <label>Where do you live?</label><br />
      <select name="hasYard" value={formData.hasYard} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="apartment">Apartment</option>
        <option value="house">House with yard</option>
      </select><br /><br />

      <label>Do you spend a lot of time away from home?</label><br />
      <select name="outOften" value={formData.outOften} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br /><br />

      <label>Do you have experience with pets?</label><br />
      <select name="hasExperience" value={formData.hasExperience} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br /><br />

      <label>Do you have allergies to fur?</label><br />
      <select name="hasAllergy" value={formData.hasAllergy} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br /><br />

      <button type="submit">Find My Match! 🐾</button>
    </form>
  );

  function calculateMatchScore(pet, formData) {
  let score = 0;
  const total = 5;

  if (formData.hasKids === "yes" && pet.goodWithKids) score++;
  if (formData.hasYard === "house" && pet.needsYard) score++;
  if (formData.outOften === "yes" && pet.energyLevel !== "low") score++;
  if (formData.hasExperience === "yes" || !pet.experienceRequired) score++;
  if (formData.hasAllergy === "no" || pet.hypoallergenic) score++;

  return Math.round((score / total) * 100);
}
}

export default PetForm;