import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Newpost from "./pages/Newpost.jsx";
import Categories from "./pages/Categories.jsx";
import Fullpost from "./pages/Fullpost.jsx";

function App() {

  let SERVER_LOCATION;

  if(window.location.hostname === "localhost") {
    SERVER_LOCATION = "http://localhost:8888"
  } else {
    SERVER_LOCATION = "https://NOTSURE";
  }

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/newpost">New Post</Link>
    <Link to="/categories">Categories</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts server={SERVER_LOCATION} />} />
      <Route path="/newpost" element={<Newpost />} />
      <Route path="/categories" element={<Categories server={SERVER_LOCATION} />} />
      <Route path="/fullpost/:id" element={<Fullpost server={SERVER_LOCATION} />} />
    </Routes>
    <div></div>
    </>
  )
}

export default App
