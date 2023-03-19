import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Load from "../Loading/Load.jsx";
import defaultImg from "./images/food.jpg";
function MealDeatils() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const id = useParams();
  let [meal, setMeal] = useState([]);
  let [strIngredients, setstrIngredients] = useState([]);
  let [strMeasures, setstrMeasures] = useState([]);
  let allRecips = strIngredients?.map((item, i) => {
    return (
      <>
        <span
          key={i}
          className="alert alert-primary d-inline-block fs-6 p-1 me-2"
        >
          {strMeasures[i]} {item}
        </span>
      </>
    );
  });
  let getMeal = (id) => {
    fetch(`${apiUrl}${id.mealId}`)
      .then((response) => response.json())
      .then((meal) => {
        setMeal(meal.meals[0]);
        let maps = new Map(Object.entries(meal.meals[0]));
        let Ingredient = [];
        let Measure = [];
        for (const [key, value] of maps) {
          if (key.startsWith("strIngredient") && value !== "")
            Ingredient.push(value);
          if (key.startsWith("strMeasure") && value !== " ")
            Measure.push(value);
        }
        setstrIngredients(Ingredient);
        setstrMeasures(Measure);
      });
  };
  useEffect(() => {
    getMeal(id);
  }, []);
  return (
    <>
      <div className="container p-5 text-white">
        <div className="row">
          {meal.length < 1 ? (
            <Load />
          ) : (
            <>
              <div className="col-md-4">
                <img
                  src={
                    Object.keys(meal).length !== 0
                      ? meal.strMealThumb
                      : defaultImg
                  }
                  alt="food"
                  className="img-fluid rounded-2"
                />
                <p className="fs-2">{meal.strMeal}</p>
              </div>
              <div className="col-md-8">
                <h1>Instructions</h1>
                <p>{meal.strInstructions}</p>
                <p className="fs-3 fw-semibold">
                  <span className="fs-2 fw-bold">Area : </span>
                  {meal.strArea}
                </p>
                <p className="fs-3 fw-semibold">
                  <span className="fs-2 fw-bold">Category : </span>
                  {meal.strCategory}
                </p>
                <div>
                  <p className="fs-2 fw-bold">recips : </p>
                  {allRecips}
                </div>

                {meal.strTags !== null && (
                  <>
                    <p className="fs-2 fw-bold">Tags :</p>
                    <span className="alert alert-danger d-inline-block p-1">
                      {meal.strTags}
                    </span>
                  </>
                )}

                <div>
                  <a
                    href={meal.strSource}
                    target={"_blank".toString()}
                    className="btn btn-success me-3"
                  >
                    source
                  </a>
                  <a
                    href={meal.strYoutube}
                    target={"_blank".toString()}
                    className="btn btn-danger "
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MealDeatils;
