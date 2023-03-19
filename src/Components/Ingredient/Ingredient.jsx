import React from "react";
import { Link } from "react-router-dom";

function Ingredient(props) {
  let { strIngredient, strDescription } = props.ingredient;

  return (
    <>
      <Link to={`/Ingredients/${strIngredient}`} className="col-md-3 text-white text-decoration-none">
        <div className="inner p-1 d-flex flex-column align-items-center">
          <i className="fas fa-drumstick-bite fa-4x"></i>
          <h4 className="text-center">{strIngredient}</h4>
          <p className="text-center">
            {strDescription.split(" ").slice(0, 20).join(" ")}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Ingredient;
