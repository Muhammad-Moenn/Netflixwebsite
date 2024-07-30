import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate(); // Corrected the function name from `navigater` to `navigate`

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        console.log('Signed In');
      } else {
        console.log("Signed Out");
        navigate("/login");
      }
    });

  },[])

  return (
    <div className="App">
       <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
