import { throttle } from "throttle-debounce";
import PropTypes from "prop-types";
import { fetchIngredients } from "../../../../redux/recipe/actions.js";

import icons from "../../../../images/sprites.svg";

import css from "./RecipeIngredientsFields.module.css";

export const RecipeIngredientsFields = ({
  ingredients,
  setIngredients,
  defaultValues,
}) => {
  const amounts = ["tbs", "tsp", "kg", "g", "pcs", "ml"];

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

  const chooseIngredient = (suggestion, index) => {
    ingredients[index].name = suggestion.ttl;
    ingredients[index].id = suggestion._id;
    setIngredients(ingredients);
  };

  return (
    <div className={css.container}>
      <div className={css.title_container}>
        <h3 className={css.title}>Ingredients</h3>
        <div className={css.count_container}>
          <button
            className={css.decrease_button}
            onClick={handleDeletionOflIngredient}
            type="button"
          >
            <svg className={css.icon_minus}>
              <use href={`${icons}#icon-ingredients-minus`} />
            </svg>
          </button>
          <span className={css.count}>{ingredients.length}</span>
          <button
            className={css.increase_button}
            onClick={handleAdditionalIngredient}
            type="button"
          >
            <svg className={css.icon_plus}>
              <use href={`${icons}#icon-ingredients-plus`} />
            </svg>
          </button>
        </div>
      </div>
      <ul className={css.ingredients_container}>
        {ingredients.map((ingredient, index) => (
          <li className={css.ingredient} key={index}>
            <div className={css.ingredient_container}>
              <label>
                <input
                  className={css.ingredient_input}
                  placeholder="Ingredient"
                  type="text"
                  name="ingredient-name"
                  onBlur={() => hideIngredientDropDown(index)}
                  onFocus={(evt) => showIngredientDropDown(evt, index)}
                  value={ingredient.name}
                  required
                  onChange={(event) => handleIngredientNameChange(event, index)}
                />
              </label>
              {ingredient.expanded && ingredient.suggestions.length > 0 && (
                <div className={css.ingredient_drop_down}>
                  {ingredient.suggestions.map((suggestion) => (
                    <p
                      onMouseDown={() => chooseIngredient(suggestion, index)}
                      key={suggestion._id}
                    >
                      {suggestion.ttl}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className={css.amount_container}>
              <label htmlFor="amount">
                <input
                  className={css.amount_input}
                  type="text"
                  name="amount"
                  value={ingredient.amount}
                  required
                  onChange={(event) =>
                    handleIngredientFieldChange("amount", event, index)
                  }
                />
              </label>

              <div className={css.amount_select_box_container}>
                <label htmlFor="amountType" >
                  <select
                    className={css.amount_select_box}
                    id="amountType"
                    name="amountType"
                    value={ingredient.amountType}
                    required
                    onChange={(event) =>
                      handleIngredientFieldChange("amountType", event, index)
                    }
                  >
                    {amounts.map((amount) => (
                      <option
                        className={css.amount}
                        value={amount}
                        key={amount}
                      >
                        {amount}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <button
              className={css.cross_button}
              type="button"
              onClick={() => handleIngredientRemoval(index)}
            >
              <svg className={css.icon_cross}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeIngredientsFields.propTypes = {
  ingredients: PropTypes.array,
  setIngredients: PropTypes.func,
  defaultValues: PropTypes.object,
};
