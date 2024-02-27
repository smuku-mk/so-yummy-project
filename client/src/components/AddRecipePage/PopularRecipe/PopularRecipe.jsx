import defaultImage from "../../../images/addRecipe/defaultImageSmall.jpg";
import {
  Container,
  PopularRecipesList,
  PopularRecipeItem,
  Title,
  ImageContainer,
  Image,
  InfoContainer,
  DishTitle,
  RecipeLink,
  DishDescription,
} from "./PopularRecipe.styled.jsx";

const popularRecipes = [
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e889803",
    },
    title: "Apple Frangipan Tart",
    description: "A delicious tart made with almond cream and fresh apples.",
    thumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
  },
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e8897f7",
    },
    title: "Potato Gratin with Chicken",
    description:
      "A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.",
    thumb: "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
  },
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e8897f9",
    },
    title: "Lamb tomato and sweet spices",
    description:
      "A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",
    thumb: "https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg",
  },
  {
    _id: {
      $oid: "640cd5ac2d9fecf12e8897fb",
    },
    title: "Spicy Arrabiata Penne",
    description:
      "An Italian pasta dish made with penne and a spicy tomato-based sauce, typically containing garlic, chili flakes, and parsley.",
    thumb: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  },
];

export const PopularRecipe = () => {
  return (
    <Container>
      <Title>Popular recipes</Title>
      <PopularRecipesList>
        {popularRecipes.map((popularRecipe, index) => (
          <PopularRecipeItem key={index}>
            <ImageContainer>
              <Image src={popularRecipe.thumb || defaultImage} alt="a dish" />
            </ImageContainer>
            <InfoContainer>
              <DishTitle>
                <RecipeLink href={`/recipe/${popularRecipe._id.$oid}`}>
                  {popularRecipe.title}
                </RecipeLink>
              </DishTitle>
              <DishDescription>
                {popularRecipe.description.length < 90
                  ? popularRecipe.description
                  : popularRecipe.description.substring(0, 90) + "..."}
              </DishDescription>
            </InfoContainer>
          </PopularRecipeItem>
        ))}
      </PopularRecipesList>
    </Container>
  );
};
