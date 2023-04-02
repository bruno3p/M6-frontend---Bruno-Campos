import { useNavigate, Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/userContext';

const ProtectedRoutes = () => {
    const { userData, setCurrentRoute } = useContext(UserContext)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!userData) {
            const pathname = window.location.pathname
            
            setCurrentRoute(pathname)
            navigate("/");
        }
    }, [])

    return (
        <>
            {userData && <Outlet />}
        </>
    )
}

export default ProtectedRoutes;