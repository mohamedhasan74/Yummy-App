import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Meal(props) {
  const { idMeal, strMeal, strMealThumb } = props.meal;
  return (
    <>
      <Link to={`/Meals/${idMeal}`} className="col-lg-3 col-md-4">
        <div className="inner p-2">
          <div className="box rounded-2 shadow bg-light position-relative overflow-hidden">
            <img alt="food" className="img-fluid" src={strMealThumb} />
            <div className="overlay position-absolute d-flex align-items-center p-3 fs-3 text-black">
              {strMeal}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Meal;
