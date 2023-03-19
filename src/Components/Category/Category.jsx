import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  const {strCategoryThumb, strCategory, strCategoryDescription } =
    props.category;
  return (
    <>
      <Link to={`/Categories/${strCategory}`} className="col-lg-3 col-md-6">
        <div className="inner p-1">
          <div className="box rounded-2 shadow position-relative overflow-hidden">
            <img alt="food" className="w-100" src={strCategoryThumb} />
            <div className="overlay position-absolute text-center d-flex flex-column align-items-center p-1 text-black">
              <h3>{strCategory}</h3>
              <p>{strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Category;
