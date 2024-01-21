import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Fullpost( {server}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  useEffect(() => {
    handleFetchPost();
  }, []);

  async function handleFetchPost() {
    const endpoint = `${server}/singlepost/${id}`;
    const reply = await fetch(`${endpoint}`);
    const data = await reply.json();
    setPost(data);
  }

  async function handleDeletionOfPosts(param) {
    const id = { id: param };
    const response = await fetch(`${server}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    const success = await response.json();
    if(success == "success") {
      navigate("/posts");
    }
    else {
      window.alert ("YOU CANNOT DELETE THIS POST");
    }
  }
  
  return (
    <div>
    <h3 key={`${post.id}-${post.title}`}>{post.title}</h3>
    <p key={post.content}>{post.content}</p>
    <p key={post.category}>Category: {post.category}</p>
    <button onClick={() => { handleDeletionOfPosts(post.id)}}>Delete</button>
    </div>
  );
};
