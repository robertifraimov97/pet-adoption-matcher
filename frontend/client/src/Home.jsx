import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const startMatching = () => {
    navigate("/form");
  };

  const goToDogs = () => {
    navigate("/all-pets/dogs");
  };

  const goToCats = () => {
  navigate("/all-pets/cats");
  };

  const goToOtherAnimals = () => {
  navigate("/all-pets/other");
  };

  return (
    <>
      <div className="hero">
        <h1>Pet Adoption Matcher 🐾</h1>
        <p>
          Welcome to the Pet Adoption Matcher!<br />
          Our platform helps you find the perfect pet based on your lifestyle and preferences.
        </p>

        <p className="hero-subtext">
            Our mission is to make adoption simple, safe, and successful – 
            for both pets and people. Join us in helping animals find loving homes!
        </p>

        <button onClick={startMatching}>Start Matching</button>
      </div>
        <section className="quick-categories">
            <h2>Explore Categories</h2>
            <div className="category-cards">
                    <div className="card" onClick={goToDogs}>
                        <span role="img" aria-label="dog">🐶</span>
                        <p>Dogs</p>
                    </div>
                <div className="card" onClick={goToCats}>
                    <span role="img" aria-label="cat">🐱</span>
                    <p>Cats</p>
                </div>
                <div className="card" onClick={goToOtherAnimals}>
                    <span role="img" aria-label="paw">🐾</span>
                    <p>Other Animals</p>
                </div>
                <div className="card" onClick={() => navigate("/shelters")}>
                    <span role="img" aria-label="shelter" >🏠</span>
                    <p>Shelters</p>
                </div>
        </div>
    </section>

      <section className="benefits">
        <h2>Why Use Pet Matcher?</h2>
        <ul>
          <li>🎯 Personalized matching based on lifestyle</li>
          <li>💚 Helps reduce pet abandonment</li>
          <li>🏠 Supports animal shelters and rescues</li>
        </ul>
      </section>
    </>
  );
}

export default Home;