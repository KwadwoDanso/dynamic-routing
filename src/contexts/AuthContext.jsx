// AuthContext.jsx — simple in-memory auth state
import { createContext, useState, useContext, useCallback, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback(() => setIsAuthenticated(true), []);
    const logout = useCallback(() => setIsAuthenticated(false), []);

    const value = useMemo(
        () => ({ isAuthenticated, login, logout }),
        [isAuthenticated, login, logout]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Convenience hook so components don't repeat useContext(AuthContext)
export function useAuth() {
    return useContext(AuthContext);
}