import { getCategories } from "../../services/Api";
import { useEffect, useState, useContext } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { getRecipesByCategories } from "../../services/Api";
import { RecipesContext } from "../../context/RecipesContext";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const { setRecipes } = useContext(RecipesContext);

  useEffect(() => {
    async function loadCategories() {
      try {
        //momento em que pego a informação das categorias
        const response = await getCategories();
        //response é um obj com a chave categories que tem um array com as categorias
        setCategories(response.categories);
        console.log(response.categories);
      } catch (erro) {
        console.error("Erro:", erro.message);
      }
    }

    loadCategories();
  }, []);

  async function handleCategoryClick(event) {
    event.preventDefault();
    const selectedCategory = event.target.dataset.category;
    console.log(selectedCategory);
    const response = await getRecipesByCategories(selectedCategory);
    setRecipes(response.meals);
    console.log(response.meals);
  }

  return (
    <section className="categories-section">
      <h2 className="section-title">Categorias</h2>
      <div
        id="categories"
        className="categories"
        role="list"
        aria-label="Filtros por categoria"
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          //lógica da renderização condicional: enquanto não houver categories
          definido - enquanto não tiver retorno da api - não haverá renderização
          {categories &&
            categories.map((category) => {
              return (
                <Button
                  onClick={handleCategoryClick}
                  data-category={category.strCategory}
                >
                  {category.strCategory}
                </Button>
              );
            })}
        </ButtonGroup>
      </div>
    </section>
  );
}
