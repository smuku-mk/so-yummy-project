import css from "./PopularRecipe.module.css";
import defaultImage from "../../../../images/addRecipe/defaultImageSmall.jpg";

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
    <div className={css.container}>
      <h3 className={css.title}>Popular recipes</h3>
      <ul className={css.popular_recipes}>
        {popularRecipes.map((popularRecipe, index) => (
          <li className={css.popular_recipe} key={index}>
            <div className={css.image_container}>
              <img
                src={popularRecipe.thumb || defaultImage}
                className={css.image}
                alt="a dish"
              ></img>
            </div>
            <div className={css.info_container}>
              <h3 className={css.dish_title}>{popularRecipe.title}</h3>
              <p className={css.dish_description}>
                {popularRecipe.description.length < 90
                  ? popularRecipe.description
                  : popularRecipe.description.substring(0, 90) + "..."}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
