import { useState, useEffect } from "react";

export default function Posts({server}) {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    handleFetchPosts();
  }, []);

  async function handleFetchPosts () {
    const endpoint = `${server}/posts`
    const reply = await fetch(`${endpoint}`)
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
          <div key={post.id + post.title}>
          <h3 key={post.title}>{post.title}</h3>
          <p key={post.id + post.content}>{post.content}</p>
          <p key={post.content + post.category}>Category: {post.category}</p>
          </div>
        );
      })}</div>
    </section>
    </>
  );
};
