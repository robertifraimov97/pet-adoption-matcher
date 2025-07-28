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

function App() {
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
      </Routes>
    </div>
  );
}

export default App;

