# Blog Routing Lab

A small blog application built with React and React Router. Demonstrates dynamic routing, route parameters, a React Context auth system, and a protected admin route.

## Table of contents

- [Overview](#overview)
- [How to run](#how-to-run)
- [Features](#features)
- [Routes](#routes)
- [Built with](#built-with)
- [Author](#author)

## Overview

JavaScript React Router handles the URL  component mapping. A single AuthContext manages login state across the app.

## How to run

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Features

- Blog index page listing all posts
- Dynamic blog post pages — each post has its own URL based on its slug
- "Post not found" message for invalid slugs
- Mock in-memory data (3 sample posts)
- Auth Context with isAuthenticated, login(), logout()
- Login page with a single "Log In" button
- Navbar conditionally shows Login or Logout based on auth state
- Protected /admin route — unauthenticated users get redirected to /login


## Built with

- React 
- React Router DOM
- Vite 
- CSS

## Author

- Kwadwo Danso
- GitHub: [KwadwoDanso](https://github.com/KwadwoDanso)

## Acknowledgement
- Per Scholas Dynamic Routing module
- AI for styling 