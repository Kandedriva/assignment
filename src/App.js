import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DomesticAnimals from './Components/DomesticAnimals';
import WildAnimals from './Components/WildAnimals';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';

// import DomesticAnimals from './Components/DomesticAnimals';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/DomesticAnimals" element={<DomesticAnimals />} />
        <Route path="/WildAnimals" element={<WildAnimals />} />
      </Routes>
    </Router>
  );
}

export default App;
