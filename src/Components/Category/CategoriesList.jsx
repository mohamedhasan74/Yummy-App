import React, { useEffect, useState } from "react";
import Load from "../Loading/Load.jsx";
import Category from "./Category.jsx";

function CategoriesList() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [categories, setCategories] = useState([]);
  let getData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((categories) => setCategories(categories.categories));
  };
  useEffect(() => {
    getData();
  }, []);
  let allCategories = categories.map((category) => {
    return <Category key={category.idCategory} category={category} />;
  });
  return (
    <>
      <div className="container py-5">
        <div className="row gy-3">
          {Array.isArray(allCategories) && allCategories.length > 0 ? allCategories : <Load />}
          </div>
      </div>
    </>
  );
}

export default CategoriesList;
