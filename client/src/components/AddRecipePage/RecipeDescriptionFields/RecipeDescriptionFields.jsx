import { useDispatch } from "react-redux";
import icons from "../../../images/sprites.svg";
import { updateRecipePicture } from "../../../redux/recipe/actions.js";
import {
  Container,
  PhotoContainer,
  PhotoUploaded,
  PhotoInput,
  Icon,
  IconContainer,
  LabelsContainer,
  RecipeInput,
  Label,
  SelectBox,
} from "./RecipeDescriptionFields.styled.jsx";

export const RecipeDescriptionFields = ({ recipeImage }) => {
  const dispatch = useDispatch();
  const categories = [
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
  ];

  let cookingTimes = [];
  for (let i = 5; i <= 120; i = i + 5) {
    cookingTimes.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleSendRecipePicture = (e) => {
    const thumb = e.target;
    if (!thumb.files[0]) return;

    dispatch(updateRecipePicture(thumb));
  };

  return (
    <Container>
      {recipeImage ? (
        <label htmlFor="thumb">
          <PhotoContainer>
            <PhotoInput
              type="file"
              accept="image/*,.png,.jpg,.web"
              name="thumb"
              id="thumb"
              onChange={handleSendRecipePicture}
            />
            <PhotoUploaded src={recipeImage} alt="Recipe" />
          </PhotoContainer>
        </label>
      ) : (
        <label htmlFor="thumb">
          <PhotoContainer>
            <PhotoInput
              type="file"
              accept="image/*,.png,.jpg,.web"
              name="thumb"
              id="thumb"
              onChange={handleSendRecipePicture}
            />
            <IconContainer>
              <Icon>
                <use href={`${icons}#icon-photo-add-recipe`} />
              </Icon>
            </IconContainer>
          </PhotoContainer>
        </label>
      )}

      <LabelsContainer>
        <Label>
          <RecipeInput
            placeholder="Enter item title"
            type="text"
            name="title"
            required
            minLength="3"
          />
        </Label>
        <Label>
          <RecipeInput
            placeholder="Enter about recipe"
            type="text"
            name="description"
            required
            minLength="6"
          />
        </Label>
        <div>
          <Label htmlFor="categoryType">
            Category
            <SelectBox id="categoryType" name="categoryType" required>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </SelectBox>
          </Label>
        </div>
        <div>
          <Label htmlFor="cookingTime">
            Cooking time
            <SelectBox id="cookingTime" name="cookingTime" required>
              {cookingTimes}
            </SelectBox>
          </Label>
        </div>
      </LabelsContainer>
    </Container>
  );
};
