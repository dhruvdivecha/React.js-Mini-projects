import React, { useEffect, useState } from "react";
import { fetchMeal } from "./recipeData";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const data = await fetchMeal(search);
      if (data?.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    }
    getData();
  }, [search]);

  return (
    <div className="recipes-container">
      <div className="home-link-container">
          <Link to="/" className="home-link">Home</Link>
      </div>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="meals-grid">
        {meals.map(({ idMeal, strMeal, strMealThumb }) => (
          <div key={idMeal} className="meal-card" onClick={() => navigate(`/recipe/${idMeal}`)}>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
