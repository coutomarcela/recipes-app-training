import Card from "./Card";
import { RecipesContext } from "../../context/RecipesContext";
import { useContext } from "react";
import "./recipesGrid.css";

export default function RecipesGrid() {
  const { recipes } = useContext(RecipesContext);

  return (
    <section className="recipes-section">
      <h2 id="recipes-title" className="section-title">
        RECEITAS
      </h2>
      <div
        id="recipes-grid"
        className="recipes-grid"
        role="list"
        aria-label="Lista de receitas"
      >
        {/* só renderiza o card se recipes for verdadeiro, senão o map não acontece */}

        {recipes &&
          recipes.map((recipe) => {
            return (
              <Card
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                id={recipe.idMeal}
                key={recipe.idMeal}
              />
            );
          })}
      </div>
    </section>
  );
}
