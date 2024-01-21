import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Categories({server}) {
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    handleFetchCategories();
  }, []);

  async function handleFetchCategories () {
    const endpoint = `${server}/categories`
    const reply = await fetch(`${endpoint}`)
    const data = await reply.json();
    setCategories(data);
  }
  
  const categoriesTitle = "There be categories here";

  return (
    <>
    <section className="categoriesContainer">
    <h2>{categoriesTitle}</h2>
    <div>{categories.map((category) => {
        return (
          <div key={category.id + category.name}>
          <Link to={`/categories/posts/${category.name}`}><h3 key={category.name}>{category.name}</h3></Link>
          </div>
        );
      })}</div>
    </section>
    </>
  );
};
