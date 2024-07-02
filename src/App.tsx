import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution" element={<AnotherPage />} />
      </Routes>
    </Router>
  )
}

export default App
