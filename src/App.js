import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/layout/navigation/navbar/NavBar";

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio/Portfolio';
import Contact from './views/Contact';
import FpdPage from './views/Portfolio/fpd/Fpd';
import LadderCupPage from './views/Portfolio/LadderCup';
import PlaygamesPage from './views/Portfolio/Playgames';
import MasTenisPage from './views/Portfolio/MasTenis';
import ArrimatePage from './views/Portfolio/Arrimate';
import NotFound from './views/NotFound';
import { useEffect } from 'react';
import { Placeholder } from "react-bootstrap";

const App = () => {
  const queryString = require('query-string');
  useEffect(() => {
    const params = queryString.parse(document.location.search);
    const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
    if (document.location.pathname === '/' && redirect) {
      document.location.assign(`${document.location.origin}${redirect}`);
    }
  }, [])


  const LazyHome = React.lazy(() => import("./views/Portfolio/fpd/Fpd"));

  return (
    <>
      <Navigation />
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/fpd"
          element={
            <React.Suspense fallback={<Placeholder xs={6} />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route path="/laddercup" element={<LadderCupPage />} />
        <Route path="/playgames" element={<PlaygamesPage />} />
        <Route path="/arrimate" element={<ArrimatePage />} />
        <Route path="/mastenis" element={<MasTenisPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
