import Categories from "./Categories";
import RecipesGrid from "./RecipesGrid";
import SearchBar from "./SearchBar";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <SearchBar />
      <Categories />
      <RecipesGrid />
    </div>
  );
}
