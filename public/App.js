import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import VerifyEmail from './components/VerifyEmail'
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/verification" element={<VerifyEmail/>}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
