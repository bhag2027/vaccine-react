import logo from './logo.svg';
import './App.css';
import AddVaccine from './components/AddVaccine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVaccine/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
