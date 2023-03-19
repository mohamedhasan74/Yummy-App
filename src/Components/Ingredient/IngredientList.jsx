import React, { useEffect, useState } from "react";
import Load from "../Loading/Load.jsx";
import Ingredient from "./Ingredient.jsx";

function IngredientList() {
  const apiUrlIngredients =
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  const [ingredients, setIngredients] = useState([]);
  let getAreas = () => {
    fetch(apiUrlIngredients)
      .then((response) => response.json())
      .then((ingredients) => setIngredients(ingredients.meals));
  };
  useEffect(() => {
    getAreas();
  }, []);
  let allIngredients = ingredients.map((ingredient, i) => {
    return (
      i < 20 && (
        <Ingredient key={ingredient.idIngredient} ingredient={ingredient} />
      )
    );
  });
  return (
    <>
      <div className="container py-5">
        <div className="row gy-3 justify-content-center">
          {Array.isArray(allIngredients) && allIngredients.length > 0 ? (
            allIngredients
          ) : (
            <Load />
          )}
        </div>
      </div>
    </>
  );
}

export default IngredientList;
