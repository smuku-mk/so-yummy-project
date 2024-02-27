import { RecipeList } from "./RecipeList";
import { ErrorMessage } from "./ErrorMessage";
import {
  TabsContainer,
  ScrollButton,
  StyledSvg,
  StyledSpan,
  CategoryList,
  CategoryItem,
  Header,
} from "./CategoriesList.styled";

export const CategoriesList = () => {
  const [category, setCategory] = useState("Beef");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    setLoading(true);
    try {
      setRecipes([]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setRecipes([]);
    }
    setLoading(false);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Header>Categories</Header>
      <TabsContainer>
        <ScrollButton disabled>
          <StyledSvg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          </StyledSvg>
          <StyledSpan></StyledSpan>
        </ScrollButton>
        <CategoryList>
          {[
            "Beef",
            "Breakfast",
            "Chicken",
            "Dessert",
            "Goat",
            "Lamb",
            "Miscellaneous",

            "Pasta",
            "Pork",
            "Seafood",
            "Side",
            "Starter",
            "Vegan",
            "Vegetarian",
          ].map((category) => (
            <CategoryItem
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </CategoryItem>
          ))}
        </CategoryList>
        <ScrollButton>
          <StyledSvg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <CustomPath d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          </StyledSvg>
          <StyledSpan></StyledSpan>
        </ScrollButton>
      </TabsContainer>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};
