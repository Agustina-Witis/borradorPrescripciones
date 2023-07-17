import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth/Login';
import { HomeRouter } from './HomeRouter';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/home/*" element={<HomeRouter />} />
            <Route path="/*" element={<Navigate to={'/login'} />} />
        </Routes>   
    );
};
