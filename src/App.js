import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';



import Home from './screens/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
