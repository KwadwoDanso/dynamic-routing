// Navbar.jsx — conditional nav based on auth state
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/admin">Admin</Link>
                    <button onClick={logout}>Log Out</button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
}
