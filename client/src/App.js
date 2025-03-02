import './App.css';
import Login from './pages/Login';
import Home from "./pages/Home/index";
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Admin from './pages/Admin/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path='/Login' element={<Login/>} />
              <Route path='/Register' element={<Register />} />
              <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
