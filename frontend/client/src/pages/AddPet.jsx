import { useState } from "react";
import "./AddPet.css";
import SuccessModal from "../components/SuccessModal";

function AddPet() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    description: "",
    image: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New pet submitted:", formData);
    setShowModal(true);

    // כאן בעתיד תוכל לשלוח את הנתונים לשרת או לשמור מקומית
    setFormData({
      name: "",
      type: "",
      breed: "",
      age: "",
      description: "",
      image: ""
    });
  };

  return (
    <div className="add-pet-container">
      <h2>Add a Pet for Adoption</h2>
      <form className="add-pet-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Breed:
          <input type="text" name="breed" value={formData.breed} onChange={handleChange} />
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} min="0" />
        </label>

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>

        <label>
          Image URL:
          <input type="url" name="image" value={formData.image} onChange={handleChange} />
        </label>

        <button type="submit">Submit Pet</button>
      </form>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>  
  );
}

export default AddPet;