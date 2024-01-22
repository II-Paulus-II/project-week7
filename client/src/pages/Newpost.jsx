import { useEffect, useState } from "react";

import "../css/form.css";

export default function Newpost({server}) {
  const emptyForm = {
    title: "",
    content: "",
    category_id: "",
  };
  const [form, setForm] = useState(emptyForm);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleFetchCategories();
  }, []);

  async function handleFetchCategories() {
    const endpoint = `${server}/categories`;
    const reply = await fetch(`${endpoint}`);
    const data = await reply.json();
    setCategories(data);
  }

  async function handleSubmit(event) {
    const endpoint = `${server}/newpost`;
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    console.log("me is submit");
    console.log("formValues are ", formValues);
    const reply = await fetch(`${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
    const resJson = await reply.json();
    setForm({...emptyForm});
  }

  //nice react
  function handleForm(event) {
    setForm({...form, [event.target.name]: event.target.value, });
  }

  return (
   <div className="newPost">
      <form className="formNewPost" onSubmit={handleSubmit}>
        <label className="labelNewPost">Title</label>
        <input className="inputNewPost" name="title" value={form.title} onChange={handleForm} required />
        <label className="labelNewPost">content</label>
        <textarea className="inputNewPost bigHeight" name="content" type="text" value={form.content} onChange={handleForm} required></textarea>
        <label className="labelNewPost" htmlFor="categorySelect"> Select a category: </label>
        <select className="selectNewPost" name="category" value={form.category_id} onChange={handleForm} required id="categorySelector" >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      <button className="NewPostSend">Add Post</button>
      </form>
    </div> 
  );
};
