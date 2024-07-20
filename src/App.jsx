import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Alzhibot from './components/Alzhibot';
import Especialistas from './components/Especialistas';
import Interactua from './components/Interactua';
import Pacientes from './components/Pacientes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alzhibot" element={<Alzhibot />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/interactua" element={<Interactua />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Router>
  );
};

export default App;
