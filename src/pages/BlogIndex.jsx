// BlogIndex.jsx — lists all posts, each linking to its slug
import { Link } from "react-router-dom";
import { posts } from "../lib/posts.js";

export default function BlogIndex() {
    return (
        <section>
            <h1>Blog</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}