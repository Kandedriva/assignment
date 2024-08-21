import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DomesticAnimals from './Components/DomesticAnimals';
import WildAnimals from './Components/WildAnimals';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// import DomesticAnimals from './Components/DomesticAnimals';


function App() {

  function displayDetails(descriptions){
    fetch(`http://localhost:5001/${descriptions}`)
    .then(response=>response.json())
    .then(details=>console.log(details))
    .catch(error=>{
      console.log(error)
    })

  }
  return (
    <>
      <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/DomesticAnimals" element={<DomesticAnimals displayDetails={displayDetails}/>} />
        <Route path="/WildAnimals" element={<WildAnimals />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
