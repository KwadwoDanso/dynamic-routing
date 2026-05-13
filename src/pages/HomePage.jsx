// HomePage.jsx — landing page
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section>
            <h1>Welcome</h1>
            <p>A simple blog with dynamic routing and a protected admin area.</p>
            <Link to="/blog">View blog</Link>
        </section>
    );
}