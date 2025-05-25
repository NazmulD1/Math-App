import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import { routes } from './routes';

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(JSON.parse(storedToken));
        }
    }, []);

    const handleTokenChange = (newToken) => {
        setToken(newToken);
        if (newToken) {
            sessionStorage.setItem('token', JSON.stringify(newToken));
        } else {
            sessionStorage.removeItem('token');
        }
    };

    // Create route elements with token handling
    const routeElements = routes.map((route) => {
        let element = route.element;
        
        // Add token to specific components that need it
        if (route.path === '/login') {
            element = React.cloneElement(route.element, { setToken: handleTokenChange });
        } else if (!route.public) {
            // Pass token and onTokenChange to all protected routes
            element = React.cloneElement(route.element, { 
                token: token,
                onTokenChange: handleTokenChange 
            });
        }

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.public ? (
                        element
                    ) : (
                        <ProtectedRoute token={token}>
                            {element}
                        </ProtectedRoute>
                    )
                }
            />
        );
    });

    return (
        <div className="app">
            <NavBar token={token} onTokenChange={handleTokenChange} />
            <main className="main-content">
                <Routes>
                    {routeElements}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
};

const ProtectedRoute = ({ children, token }) => {
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default App;
