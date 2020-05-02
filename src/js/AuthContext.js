import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const login = () => {
        console.log('Context::Login...')
        setIsLoggedIn(true);
    }

    const logout = () => {
        console.log('Context::Logout...')
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
};
