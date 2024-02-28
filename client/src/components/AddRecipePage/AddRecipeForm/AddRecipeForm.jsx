import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addRecipe } from "../../../redux/recipe/actions.js";
import { resetRecipeImage } from "../../../redux/recipe/slice.js";
import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields.jsx";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields.jsx";
import { RecipePreparationFields } from "../RecipePreparationFields/RecipePreparationFields.jsx";
import { FormContainer } from "./AddRecipeForm.styled.jsx";
import { SimpleButton } from "../../Button/index.jsx";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const recipeImage = useSelector((state) => state.recipe?.recipeImage);

  useEffect(() => {
    dispatch(resetRecipeImage());
  }, [dispatch]);

  const defaultValues = {
    name: "",
    amount: 0,
    amountType: "tbs",
    ingredientId: null,
    expanded: false,
    suggestions: [],
  };
  const [ingredients, setIngredients] = useState([defaultValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      categoryType,
      cookingTime,
      thumb,
      preparation,
    } = e.currentTarget.elements;

    const payload = {
      title: title.value,
      description: description.value,
      category: categoryType.value,
      time: cookingTime.value,
      thumb: thumb.name,
      preview: recipeImage || thumb.name,
      ingredients: ingredients
        .filter((ingredient) => ingredient.ingredientId !== undefined)
        .map((ingredient) => ({
          id: ingredient.ingredientId,
          measure: `${ingredient.amount} ${ingredient.amountType}`,
        })),
      instructions: preparation.value,
    };

    dispatch(addRecipe(payload)).then(() => {
      toast.success("Your recipe has been created.");
    });
    e.currentTarget.reset();
    setIngredients([defaultValues]);
  };

  return (
    <FormContainer
      name="addrecipe_form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <RecipeDescriptionFields recipeImage={recipeImage} />
      <RecipeIngredientsFields
        setIngredients={setIngredients}
        ingredients={[...ingredients]}
        defaultValues={defaultValues}
      />
      <RecipePreparationFields />
      <SimpleButton>Add</SimpleButton>
    </FormContainer>
  );
};
