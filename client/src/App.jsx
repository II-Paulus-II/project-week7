import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Newpost from "./pages/Newpost.jsx";
import Categories from "./pages/Categories.jsx";

function App() {

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/newpost">New Post</Link>
    <Link to="/categories">Categories</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/newpost" element={<Newpost />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    <div></div>
    </>
  )
}

export default App
