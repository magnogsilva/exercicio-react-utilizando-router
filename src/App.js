import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Segunda from './pages/Segunda';
import NavBar from './components/NavBar';

function App() {
  
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/Segunda' element={<Segunda/>} />
      </Routes>
    </Router>

  );
}

export default App;
