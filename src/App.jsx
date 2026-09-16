import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import AdminLogin from './Pages/AdminLogin';
import ChiefEngineer from './Pages/ChiefEngineer';
import AudioEngineer from './Pages/AudioEngineer';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/chiefEng" element={<ChiefEngineer />} />
          <Route path="/audioEng" element={<AudioEngineer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
