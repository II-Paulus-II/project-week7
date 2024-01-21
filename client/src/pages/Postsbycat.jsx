import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Posts({server}) {

  const { name } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleFetchPosts();
  }, []);

  async function handleFetchPosts () {
    const endpoint = `${server}/posts/category/${name}`;
    const reply = await fetch(`${endpoint}`);
    const data = await reply.json();
    setPosts(data);
  }

  const postsTitle = "There be posts by category here!";

  return (
    <>
    <section className="postsContainer">
    <h2>{postsTitle}</h2>
    <div>{posts.map((post) => {
        return (
          <div key={`${post.id}-${post.title}`}>
          <h3 key={post.title}>{post.title}</h3>
          <p key={post.content}>{post.content}</p>
          </div>
        );
      })}</div>
    </section>
    </>
  );
};

