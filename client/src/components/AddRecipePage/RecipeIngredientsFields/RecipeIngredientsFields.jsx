import React, { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";
import PropTypes from "prop-types";
import { fetchIngredients } from "../../../redux/recipe/actions.js";
import icons from "../../../images/sprites.svg";
import { fetchIngredientsTTL } from "../../../redux/recipe/actions.js";
import {
  Container,
  Title,
  TitleContainer,
  CountContainer,
  DecreaseButton,
  IconMinus,
  Count,
  IncreaseButton,
  IconPlus,
  IngredientsContainer,
  Ingredient,
  IngredientContainer,
  IngredientInput,
  AmountContainer,
  AmountInput,
  AmountSelectBoxContainer,
  AmountSelectBox,
  CrossButton,
  IconCross,
} from "./RecipeIngredientsFields.styled";

export const RecipeIngredientsFields = ({
  ingredients,
  setIngredients,
  defaultValues,
}) => {
  const amounts = ["tbs", "tsp", "kg", "g", "pcs", "ml"];

  const [ingredientsTTL, setIngredientsTTL] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingredients = await fetchIngredientsTTL();
        setIngredientsTTL(ingredients);
      } catch (error) {
        console.error("Error fetching ingredients TTL:", error);
      }
    };

    fetchData();
  }, []);

  const hideIngredientDropDown = (index) => {
    ingredients[index].expanded = false;
    ingredients[index].suggestions = [];
    setIngredients(ingredients);
  };

  const showIngredientDropDown = (evt, index) => {
    ingredients[index].expanded = true;
    setIngredients(ingredients);
    updateSuggestions(evt, index);
  };

  const handleAdditionalIngredient = () => {
    if (ingredients.length === 30) {
      return false;
    }
    ingredients.push(defaultValues);
    setIngredients(ingredients);
  };

  const handleDeletionOflIngredient = () => {
    if (ingredients.length === 1) {
      return false;
    }
    ingredients.pop();
    setIngredients(ingredients);
  };

  const handleIngredientRemoval = (index) => {
    if (ingredients.length === 1) {
      return false;
    }
    ingredients.splice(index, 1);
    setIngredients(ingredients);
  };

  const handleIngredientNameChange = async (evt, index) => {
    ingredients[index].name = evt.target.value;
    setIngredients(ingredients);
    updateSuggestions(evt, index);
  };

  const updateSuggestions = throttle(250, async (evt, index) => {
    if (evt.target.value.trim().length > 1) {
      ingredients[index].suggestions = await fetchIngredients(evt.target.value);
    } else {
      ingredients[index].suggestions = [];
    }
    setIngredients(ingredients);
  });

  const handleIngredientFieldChange = (field, evt, index) => {
    ingredients[index][field] = evt.target.value;
    setIngredients(ingredients);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Ingredients</Title>
        <CountContainer>
          <DecreaseButton onClick={handleDeletionOflIngredient} type="button">
            <IconMinus>
              <use xlinkHref={`${icons}#icon-ingredients-minus`}></use>
            </IconMinus>
          </DecreaseButton>
          <Count>{ingredients.length}</Count>
          <IncreaseButton onClick={handleAdditionalIngredient} type="button">
            <IconPlus>
              <use xlinkHref={`${icons}#icon-ingredients-plus`}></use>
            </IconPlus>
          </IncreaseButton>
        </CountContainer>
      </TitleContainer>
      <IngredientsContainer>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index}>
            <IngredientsContainer>
              {ingredients.map((ingredient, index) => (
                <Ingredient key={index}>
                  <IngredientContainer>
                    <label>
                      <IngredientInput
                        type="text"
                        name="ingredient-name"
                        value={ingredient.name}
                        onBlur={() => hideIngredientDropDown(index)}
                        onFocus={(evt) => showIngredientDropDown(evt, index)}
                        onChange={(event) =>
                          handleIngredientNameChange(event, index)
                        }
                        list={`ingredient-list-${index}`}
                        required
                      />
                      <datalist id={`ingredient-list-${index}`}>
                        {ingredientsTTL.map((ingredient, index) => (
                          <option key={index} value={ingredient}>
                            {ingredient}
                          </option>
                        ))}
                      </datalist>
                    </label>
                  </IngredientContainer>
                </Ingredient>
              ))}
            </IngredientsContainer>

            <AmountContainer>
              <label htmlFor="amount">
                <AmountInput
                  type="text"
                  name="amount"
                  value={ingredient.amount}
                  required
                  onChange={(event) =>
                    handleIngredientFieldChange("amount", event, index)
                  }
                />
              </label>
              <AmountSelectBoxContainer>
                <label htmlFor="amountType">
                  <AmountSelectBox
                    id="amountType"
                    name="amountType"
                    value={ingredient.amountType}
                    onChange={(event) =>
                      handleIngredientFieldChange("amountType", event, index)
                    }
                    required
                  >
                    {amounts.map((amount) => (
                      <option value={amount} key={amount}>
                        {amount}
                      </option>
                    ))}
                  </AmountSelectBox>
                </label>
              </AmountSelectBoxContainer>
            </AmountContainer>
            <CrossButton
              type="button"
              onClick={() => handleIngredientRemoval(index)}
            >
              <IconCross>
                <use xlinkHref={`${icons}#icon-x`}></use>
              </IconCross>
            </CrossButton>
          </Ingredient>
        ))}
      </IngredientsContainer>
    </Container>
  );
};

RecipeIngredientsFields.propTypes = {
  ingredients: PropTypes.array,
  setIngredients: PropTypes.func,
  defaultValues: PropTypes.object,
};
