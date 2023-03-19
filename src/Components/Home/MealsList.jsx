import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal.jsx";
import Load from "../Loading/Load.jsx";
function MealsList(props) {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/";
  let params = useParams();
  const [meals, setMeals] = useState([]);
  let getApi = (api, type, char, endPoint = "") => {
    fetch(`${apiUrl}${type}.php?${char}=${endPoint}`)
      .then((response) => response.json())
      .then((meals) => setMeals(meals.meals));
  };
  let getData = () => {
    if (params.hasOwnProperty("CategoryName")) {
      getApi(apiUrl, "filter", "c", params.CategoryName);
    } else if (params.hasOwnProperty("AreaName")) {
      getApi(apiUrl, "filter", "a", params.AreaName);
    } else if (params.hasOwnProperty("IngredientName")) {
      getApi(apiUrl, "filter", "i", params.IngredientName);
    } else if (props.hasOwnProperty("letter") && props.letter.length > 0) {
      getApi(apiUrl, "search", "f", props.letter);
    } else if (props.hasOwnProperty("name") && props.name.length > 0) {
      getApi(apiUrl, "search", "s", props.name);
    } else {
      getApi(apiUrl, "search", "s");
    }
  };
  useEffect(() => {
    getData();
  }, [props.letter, props.name]);
  let allMeals = meals?.map((meal) => {
    return <Meal key={meal.idMeal} meal={meal} />;
  });

  return (
    <>
      <div className="container py-5">
        <div className="row gy-3">
          {Array.isArray(allMeals) && allMeals.length > 0 ? allMeals : <Load />}
        </div>
      </div>
    </>
  );
}

export default MealsList;
