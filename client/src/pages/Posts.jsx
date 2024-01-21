import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts({server}) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleFetchPosts();
  }, []);

  async function handleFetchPosts () {
    const endpoint = `${server}/posts`;
    const reply = await fetch(`${endpoint}`);
    const data = await reply.json();
    setPosts(data);
  }

  const postsTitle = "There be posts here!";

  return (
    <>
    <section className="postsContainer">
    <h2>{postsTitle}</h2>
    <div>{posts.map((post) => {
        return (
          <div key={`${post.id}-${post.title}`}>
          <Link to={`/fullpost/${post.id}`}><h3 key={post.title}>{post.title}</h3></Link>
          </div>
        );
      })}</div>
    </section>
    </>
  );
};

