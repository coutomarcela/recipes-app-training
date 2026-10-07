import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import { getIngredientsByName, getRecipesByName } from "../../services/Api";
import { RecipesContext } from "../../context/RecipesContext";
import "./searchBar.css";

export default function SearchBar() {
  const [typedRecipeName, setTypedRecipeName] = useState("");
  const { setRecipes } = useContext(RecipesContext);

  //filtrar por ingrediente -> meals.strIngredient
  // async function filterIngredients() {
  //   const ingredients = [];
  //   const ingredient = await getIngredientsByName();
  //   console.log(ingredient.meals.length);
  //   for (let i = 0; i < ingredient.meals.length; i++) {
  //     if (
  //       ingredient.meals[i].strIngredient
  //         .toLowerCase()
  //         .includes(typedIngredient)
  //     ) {
  //       ingredients.push(ingredient.meals[i].strIngredient);
  //     }
  //     return ingredients;
  //   }
  // }

  //função que faz a busca pelo input
  async function search() {
    if (typedRecipeName === "") {
      return alert("Digite alguma coisa");
    }
    //muda o valor de recipes para o valor que foi digitado no input
    const result = await getRecipesByName(typedRecipeName);
    console.log(result);
    setRecipes(await getRecipesByName(typedRecipeName));
    // filterIngredients();
  }

  // filterIngredients();

  return (
    <section className="search-section">
      <div className="search-wrapper">
        <TextField
          id="search-input"
          label="Buscar receita"
          variant="outlined"
          className="search-input"
          aria-label="Campo de busca de receitas"
          onChange={(evt) => setTypedRecipeName(evt.target.value)}
          sx={{
            backgroundColor: "#FFF8E8",

            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#3C8845",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#3C8845",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiInputBase-input": {
              fontFamily: "Quicksand",
              fontSize: "1rem",
              fontWeight: 500,
            },
            "& .MuiInputLabel-root": {
              fontFamily: "Quicksand",
              fontSize: "1rem",
              fontWeight: 500,
            },
          }}
        />
        <Button
          variant="contained"
          id="search-btn"
          className="search-btn"
          aria-label="Buscar"
          onClick={() => search()}
          sx={{
            bgcolor: "#3C8845",
            "&:hover": { bgcolor: "#2F6D38" },
            fontFamily: "Quicksand",
            fontSize: "1em",
          }}
        >
          Buscar
        </Button>
      </div>
    </section>
  );
}
