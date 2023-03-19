import React from "react";
import { Link } from "react-router-dom";

function Area(props) {
  let { strArea } = props.area;
  return (
    <>
      <Link to={`/Areas/${strArea}`} className="col-md-3 text-white text-decoration-none">
        <div className="inner p-1 d-flex flex-column align-items-center">
            <i className="fas fa-house-laptop fa-4x"></i>
            <h3>{strArea}</h3>
        </div>
      </Link>
    </>
  );
}

export default Area;
