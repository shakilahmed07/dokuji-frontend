import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Dojo from "./pages/Dojo";
import Home from "./pages/Home";
import NFT from "./pages/NFT";
import Team from "./pages/Team";
import Wardrobe from "./pages/Wardrobe";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dojo" element={<Dojo />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="/team" element={<Team />} />
      <Route path="/wardrobe" element={<Wardrobe />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
