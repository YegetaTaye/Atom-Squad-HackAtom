import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swipers from "./Swipers";
import Compare from "./Compare";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./Pages/Landing";
import { Faq } from "./Pages/Faq";
import Events from "./Pages/Events";
import Quiz from "./Pages/Quiz"
import WorldMap from "./Pages/WorldMap";
import EnergyCalculator from "./Pages/EnergyCalculator";
import EthiopiaResouce from "./Pages/EthiopiaResouce (2)";
// import Calculate from "./Pages/Calculate";
// import Question from './components/Question'

function App() {
  const [count, setCount] = useState(0);
  const position = [51.505, -0.09];
  function Layout({ children }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Swipers /><Compare /><Landing /></>} />
          <Route path="/event" element={<Events />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/calculate" element={<EnergyCalculator />} />
          <Route path="/ethiopia" element={<EthiopiaResouce />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route element={<Header/>}>
          <Route path="/world" element={<WorldMap />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default App;
