// LoginPage.jsx — button calls login() and navigates to /admin
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/admin");
    };

    return (
        <section>
            <h1>Log In</h1>
            <p>Click below to simulate signing in.</p>
            <button onClick={handleLogin}>Log In</button>
        </section>
    );
}