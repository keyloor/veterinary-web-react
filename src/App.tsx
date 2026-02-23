import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./shared/Footer";
import Header from "./shared/Header";
import Home from "./features/Home/Home";
import Pets from "./features/pets/Pets";
import { Profile } from "./features/Profile/Profile";
import NotFound from "./shared/NotFound";
import PetProfile from "./features/pets/PetProfile";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <BrowserRouter>
        <Header />

        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/pets" element={<Pets />} />
            <Route path="/pets/:id" element={<PetProfile />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
