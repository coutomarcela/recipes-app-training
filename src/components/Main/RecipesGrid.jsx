import Card from "./Card";
import { RecipesContext } from "../../context/RecipesContext";
import { useContext, useEffect } from "react";
import "./recipesGrid.css";
import { getRandomRecipe } from "../../services/Api";

export default function RecipesGrid() {
  const { recipes, setRecipes } = useContext(RecipesContext);

  useEffect(() => {
    async function loadCategories() {
      try {
        //momento em que pego a informação das categorias
        const response = await getCategories();
        //response é um obj com a chave categories que tem um array com as categorias
        setCategories(response.categories);
        // console.log(response.categories);
      } catch (erro) {
        console.error("Erro:", erro.message);
      }
    }
  }, null);

  useEffect(() => {
    async function loadRandomRecipe() {
      try {
        const randomRecipes = [];
        for (let i = 0; i < 6; i++) {
          const response = await getRandomRecipe();
          //cada vez que a getRandomRecipe roda, sorteia uma receita nova. como a resposta da api vem response = [{strMeal: "Pizza"}], precisamos pegar o primeiro elemento desse array, que é {strMeal:"Pizza"}
          randomRecipes.push(response[0]);
        }
        setRecipes(randomRecipes);
      } catch (erro) {
        console.error("Erro:", erro.message);
      }
    }
    loadRandomRecipe();
  }, []);

  return (
    <section className="recipes-section">
      <h2 id="recipes-title" className="section-title">
        RECEITAS DO DIA
      </h2>
      <div
        id="recipes-grid"
        className="recipes-grid"
        role="list"
        aria-label="Lista de receitas"
      >
        {recipes &&
          /* só renderiza o card se recipes for verdadeiro, senão o map não acontece */
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
