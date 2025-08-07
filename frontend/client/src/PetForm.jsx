import { useState, useContext } from "react";
import "./PetFormModern.css";
import { MatchContext } from "./MatchContext";
import pets from "./data/pets.json";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    key: "hasKids",
    question: "Do you have young children?",
    options: ["Yes", "No"],
  },
  {
    key: "hasYard",
    question: "Where do you live?",
    options: ["Apartment", "House with yard"],
  },
  {
    key: "outOften",
    question: "Do you spend a lot of time away from home?",
    options: ["Yes", "No"],
  },
  {
    key: "hasExperience",
    question: "Do you have experience with pets?",
    options: ["Yes", "No"],
  },
  {
    key: "hasAllergy",
    question: "Do you have allergies to fur?",
    options: ["Yes", "No"],
  },
];

function PetFormModern() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});
  const { setMatchedPets } = useContext(MatchContext);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const key = questions[currentQuestion].key;
    setFormData((prev) => ({ ...prev, [key]: answer.toLowerCase() }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      handleSubmit({ ...formData, [key]: answer.toLowerCase() });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

const handleSubmit = (data) => {
  const matched = pets
    .map((pet) => {
      const matchScore = calculateMatchScore(pet, data);
      return { ...pet, matchScore };
    })
    .filter((pet) => pet.matchScore >= 40)
    .sort((a, b) => b.matchScore - a.matchScore);

  
  fetch("http://localhost:5050/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      answers: data,
      matchedPets: matched,
    }),
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.success) {
        console.log("✅ Data sent to backend");
      } else {
        console.error("❌ Failed to submit");
      }
    })
    .catch((err) => {
      console.error("❌ Error submitting to backend:", err);
    });

  setMatchedPets(matched);
  navigate("/results");
};

  const calculateMatchScore = (pet, data) => {
    let score = 0;
    const total = 5;

    if (data.hasKids === "yes" && pet.goodWithKids) score++;
    if (data.hasYard === "house" && pet.needsYard) score++;
    if (data.outOften === "yes" && pet.energyLevel !== "low") score++;
    if (data.hasExperience === "yes" || !pet.experienceRequired) score++;
    if (data.hasAllergy === "no" || pet.hypoallergenic) score++;

    return Math.round((score / total) * 100);
  };

  const q = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="quiz-inner">
        <div className="question-box">
          <h2>{q.question}</h2>
          {q.options.map((opt) => (
            <button key={opt} onClick={() => handleAnswer(opt)} className="answer-btn">
              {opt}
            </button>
          ))}
          {currentQuestion > 0 && (
            <button onClick={handleBack} className="back-btn">
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PetFormModern;