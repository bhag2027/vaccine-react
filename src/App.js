import logo from './logo.svg';
import './App.css';
import AddVaccine from './components/AddVaccine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewVaccine from './components/ViewVaccine';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVaccine/>}/>
        <Route path='/view' element={<ViewVaccine/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
