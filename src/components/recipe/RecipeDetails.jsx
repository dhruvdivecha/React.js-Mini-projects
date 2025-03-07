import React, { useEffect, useState } from "react";
import { fetchMeal } from "./recipeData";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchMeal();
      if (data?.meals) {
        const selectedMeal = data.meals.find((m) => m.idMeal === id);
        setMeal(selectedMeal);
      }
    }
    getData();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="recipe-details">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>Ingredients</h2>
      <ul className="ingredients-list">
        {ingredients.map(({ ingredient, measure }, index) => (
          <li key={index}>{`${measure} ${ingredient}`}</li>
        ))}
      </ul>
      <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-link">
        Watch on YouTube
      </a>
    </div>
  );
};

export default RecipeDetails;
