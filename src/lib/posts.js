// Mock in-memory blog data
export const posts = [
    {
        id: 1,
        slug: "first-post",
        title: "My First Post",
        content: "Welcome to the blog. This is the first post.",
    },
    {
        id: 2,
        slug: "react-router-basics",
        title: "React Router Basics",
        content: "React Router lets you map URLs to components. The :slug parameter is captured with useParams.",
    },
    {
        id: 3,
        slug: "protected-routes",
        title: "Protected Routes",
        content: "A protected route checks auth state and redirects to /login if the user is not signed in.",
    },
];