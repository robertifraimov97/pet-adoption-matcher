import { useEffect, useState } from "react";
import sheltersData from "../data/shelters.json";
import "./Shelters.css";

function Shelters() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    setShelters(sheltersData);
  }, []);

  return (
    <section className="shelters-section">
      <h2>Animal Shelters in Israel 🐾</h2>
      <div className="shelter-list">
        {shelters.map((shelter, index) => (
          <div className="shelter-card" key={index}>
            <h3>{shelter.name}</h3>
            <p className="location">📍 {shelter.location}</p>
            <p>{shelter.description}</p>
            <a href={shelter.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shelter.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="navigate-button"
               >
                Navigate with Google Maps
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shelters;