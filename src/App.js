import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from "./components/layout/navigation/navbar/NavBar";

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio/Portfolio';
import Contact from './views/Contact';
import FpdPage from './views/Portfolio/Fpd';
import LadderCupPage from './views/Portfolio/LadderCup';
import PlaygamesPage from './views/Portfolio/Playgames';
import MasTenisPage from './views/Portfolio/MasTenis';
import NotFound from './views/NotFound';

const App = () => {

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/fpd" element={<FpdPage />} />
          <Route path="/laddercup" element={<LadderCupPage />} />
          <Route path="/playgames" element={<PlaygamesPage />} />
          <Route path="/mastenis" element={<MasTenisPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
