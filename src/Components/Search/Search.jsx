import React, { useState } from "react";
import MealsList from "../Home/MealsList.jsx";

function Search() {
  const [letter, setLetter] = useState("");
  const [name, setName] = useState("");
  let getLetter = (value) => {
    setLetter(value);
  };
  let getName = (value) => {
    setName(value);
  };
  return (
    <>
      <div className="container py-5">
        <div className="row gy-3">
          <div className="col-md-6">
            <div className="inner p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search By Name"
                onChange={(e) => {
                  getName(e.target.value);
                  setLetter("");
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="inner p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search By First Letter"
                maxLength="1"
                onChange={(e) => {
                  getLetter(e.target.value);
                  setName("");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <MealsList letter={letter} name={name} />
    </>
  );
}

export default Search;
