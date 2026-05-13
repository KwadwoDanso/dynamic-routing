// BlogPost.jsx — reads :slug from URL, finds the post, shows it
// Falls back to "Post not found" if no match
import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts.js";

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <section>
                <h1>Post not found</h1>
                <Link to="/blog">Back to blog</Link>
            </section>
        );
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/blog">Back to blog</Link>
        </article>
    );
}