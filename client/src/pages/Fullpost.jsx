import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Fullpost( {server}) {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  useEffect(() => {
    handleFetchPost();
  }, []);

  async function handleFetchPost () {
    const endpoint = `${server}/singlepost/${id}`;
    console.log(endpoint);
    const reply = await fetch(`${endpoint}`);
    const data = await reply.json();
    setPost(data);
  }
  
  return (
    <div>
    <h3 key={`${post.id}-${post.title}`}>{post.title}</h3>
    <p key={post.content}>{post.content}</p>
    <p key={post.category}>Category: {post.category}</p>
    </div>
  );
};
