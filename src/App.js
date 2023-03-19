import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import MealsList from "./Components/Home/MealsList.jsx";
import MealDeatils from "./Components/Home/MealDeatils.jsx";
import CategoriesList from "./Components/Category/CategoriesList.jsx";
import AreaList from "./Components/Area/AreaList.jsx";
import IngredientList from "./Components/Ingredient/IngredientList.jsx";
import Search from "./Components/Search/Search.jsx";
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {[
          "/",
          "Categories/:CategoryName",
          "Areas/:AreaName",
          "/Ingredients/:IngredientName",
        ].map((path, i) => (
          <Route path={path} key={i} element={<MealsList />} />
        ))}
        <Route
          path="/Search"
          element={
            <>
              <Search />
            </>
          }
        />
        <Route
          path="/Categories"
          element={
            <>
              <CategoriesList />
            </>
          }
        />
        <Route
          path="/Areas"
          element={
            <>
              <AreaList />
            </>
          }
        />
        <Route
          path="/Ingredients"
          element={
            <>
              <IngredientList />
            </>
          }
        />
        <Route
          path="/Meals/:mealId"
          element={
            <>
              <MealDeatils />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
