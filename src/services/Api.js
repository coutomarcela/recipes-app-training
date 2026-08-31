import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

//função que pega todas as categorias
export async function getCategories() {
  //passar só url adicional é um comportamento padrão do axios.create, que tem uma propriedade baseURL e os métodos em letra minúscula
  const resposta = await apiClient.get("categories.php");
  return resposta.data;
}

//função que pega as receitas por nome
export async function getRecipesByName(name) {
  const resposta = await apiClient.get(`search.php?s=${name}`);
  return resposta.data.meals;
}

//função que pega as receitas por categoria
export async function getRecipesByCategories(category) {
  const resposta = await apiClient.get(`filter.php?c=${category}`);
  return resposta.data;
}

//função que pega as receitas pelo id
export async function getRecipesById(id) {
  const resposta = await apiClient.get(`/lookup.php?i=${id}`);
  return resposta.data;
}

//função que pega os ingredientes das receitas
export async function getIngredientsByName() {
  const resposta = await apiClient.get("list.php?i=list");
  return resposta.data;
}
