import { useState, useEffect } from "react";

export default function Posts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleFetchPosts();
  }, []);

  async function handleFetchPosts () {

  }

  return (
    <>
    <p>Posts</p>
    </>
  );
};
