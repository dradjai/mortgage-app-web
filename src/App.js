import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Requests from './pages/Requests';
import Brokers from './pages/Brokers';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu/>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/brokers" element={<Brokers/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
