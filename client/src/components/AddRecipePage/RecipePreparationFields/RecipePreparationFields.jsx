import css from "./RecipePreparationFields.module.css";

export const RecipePreparationFields = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Recipe Preparation</h3>
      <textarea
        className={css.text_area}
        name="preparation"
        rows="20"
        placeholder="Enter recipe here..."
        required
        minLength="10"
      ></textarea>
    </div>
  );
};
