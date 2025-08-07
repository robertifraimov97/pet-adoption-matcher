import { Routes, Route } from "react-router-dom";
import PetDetails from "./components/PetDetails";
import PetResults from "./components/PetResults";
import Home from "./Home";
<Route path="/" element={<Home />} />
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./PetForm";
import Tips from "./components/Tips";
import AllDogs from "./pages/AllDogs";
import AllCats from "./pages/AllCats";
import AllOtherPets from "./pages/AllOtherPets";
import AddPet from "./pages/AddPet";
import Shelters from "./pages/Shelters";
import FAQ from './pages/FAQ';
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/results" element={<PetResults />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/all-pets/dogs" element={<AllDogs />} />
        <Route path="/all-pets/cats" element={<AllCats />} />
        <Route path="/all-pets/other" element={<AllOtherPets />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

