import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Preschool from "./pages/Preschool";
import SpeechTherapy from "./pages/SpeechTherapy";
import Dance from "./pages/Dance";
import Montessori from "./pages/Montessori";
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preschool" element={<Preschool />} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/montessori" element={<Montessori />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

