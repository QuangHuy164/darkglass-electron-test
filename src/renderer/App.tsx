import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Fetch from '../components/Fetch';
import Home from '../components/Home';
import PedalDisplay from '../components/PedalDisplay';
import DragDrop from '../components/DragDrop';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedal" element={<PedalDisplay />} />
        <Route path="/dragdrop" element={<DragDrop />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </Router>
  );
}
