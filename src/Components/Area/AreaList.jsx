import React, { useEffect, useState } from "react";
import Load from "../Loading/Load.jsx";
import Area from "./Area.jsx";
function AreaList() {
  const apiUrlArea = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const [areas, setAreas] = useState([]);
  let getAreas = () => {
    fetch(apiUrlArea)
      .then((response) => response.json())
      .then((areas) => setAreas(areas.meals));
  };
  useEffect(() => {
    getAreas();
  }, []);
  let allAreas = areas.map((area) => {
    return <Area key={area.strArea} area={area} />;
  });
  return (
    <>
      <div className="container py-5">
        <div className="row gy-3">
          {" "}
          {Array.isArray(allAreas) && allAreas.length > 0 ? (
            allAreas
          ) : (
            <Load />
          )}
        </div>
      </div>
    </>
  );
}

export default AreaList;
