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
import ArrimatePage from './views/Portfolio/Arrimate';
import NotFound from './views/NotFound';

const App = () => {

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact index path="/juando_resume" element={<Home />} />
          <Route path="/juando_resume/about" element={<About />} />
          <Route path="/juando_resume/portfolio" element={<Portfolio />} />
          <Route path="/juando_resume/fpd" element={<FpdPage />} />
          <Route path="/juando_resume/laddercup" element={<LadderCupPage />} />
          <Route path="/juando_resume/playgames" element={<PlaygamesPage />} />
          <Route path="/juando_resume/arrimate" element={<ArrimatePage />} />
          <Route path="/juando_resume/mastenis" element={<MasTenisPage />} />
          <Route path="/juando_resume/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
