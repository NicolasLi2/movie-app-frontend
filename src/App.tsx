import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/user/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgetPass from './components/auth/ForgetPass';
import VerifyEmail from './components/auth/VerifyEmail';
import ResetPass from './components/auth/ResetPass';
import AdminNav from './admin/AdminNav';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/admin' element={<AdminNav />} />
                <Route path='/' element={<Home />} />
                <Route path='/auth/sign-in' element={<SignIn />} />
                <Route path='/auth/sign-up' element={<SignUp />} />
                <Route path='/auth/forget-password' element={<ForgetPass />} />
                <Route path='/auth/verify-email' element={<VerifyEmail />} />
                <Route path='/auth/reset-password' element={<ResetPass />} />
            </Routes>
        </div>
    );
}

export default App;
