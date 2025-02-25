import './App.css';
import Login from './pages/Login';
import Home from "./pages/Home/index";
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
