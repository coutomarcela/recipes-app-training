import Categories from "./Categories";
import RecipesGrid from "./RecipesGrid";
import SearchBar from "./SearchBar";


export default function Main() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <RecipesGrid />
    </div>
  );
}
