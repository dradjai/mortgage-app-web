import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Brokers from './pages/Brokers';
import FooterComponent from './components/Footer/FooterComponent';
import Hero from './components/Hero/Hero';

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles/App.scss';

export const UserStatus = createContext(null);


function App() {

const [user, setUser] = useState('');




  return (
  <>
      <UserStatus.Provider value={{user, setUser}}>
     
      <BrowserRouter>
       
        <NavMenu/>
        <Hero/>
        <Routes>
       
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/requests" element={<Requests user={user} setUser={setUser}/>}/>
          <Route path="/brokers" element={<Brokers/>}/>
          <Route path="/calculator" element={<Calculator/>}/>

        </Routes>
       
      </BrowserRouter>
      </UserStatus.Provider>
      <FooterComponent/>
      
      </>
  );
}

export default App;
