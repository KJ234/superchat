
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import Loginform from './components/loginform';
import Homepage from "./components/pages/homepage";

function App() {
  return (
  
      
    <Router>
    <Routes>
      <>
      <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<Loginform/>} />
      </>
    </Routes>

  </Router>

  );
}

export default App;
