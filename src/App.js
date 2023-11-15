import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Mainlayout from './components/Layouts/Mainlayout';

function App() {
  return (
    <BrowserRouter>
        <Mainlayout>
      <Routes>
          <Route path="/product-table" element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
      </Routes>
        </Mainlayout>
    </BrowserRouter>

  );
}

export default App;
