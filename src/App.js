import Navigation from "./components/layout/navigation/navbar/NavBar";
import { Routes, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
