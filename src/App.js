import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about-me' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
