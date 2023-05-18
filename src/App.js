import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Requests from './pages/Requests';
import Brokers from './pages/Brokers';
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const UserStatus = createContext(null);

function App() {

const [user, setUser] = useState('');



  return (
  
    <main>
      <UserStatus.Provider value={{user, setUser}}>
      <BrowserRouter>
       
        <NavMenu/>
      
        <Routes>
       
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/requests" element={<Requests user={user} setUser={setUser}/>}/>
          <Route path="/brokers" element={<Brokers/>}/>
          <Route path="/calculator" element={<Calculator/>}/>

        </Routes>
       
        <Footer/>
        
      </BrowserRouter>

      </UserStatus.Provider>
      </main>

  );
}

export default App;
