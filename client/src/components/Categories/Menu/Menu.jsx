import { useEffect } from "react";
import { TabsContainer, CategoryList, CategoryItem } from "./Menu.styled";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/categories/operations";
import { setCategory } from "../../../redux/categories/categoriesSlice";
import { categories } from "../../../redux/categories/selectors";
import { MainPageTitle } from "../../MainTitlePage/MainTitlePage";
import { GlobalContainer } from "../../../styles/global";

export const Menu = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  return (
    <GlobalContainer>
      <MainPageTitle title="Categories" />
      <TabsContainer>
        <CategoryList>
          {categoriesList.map((category) => (
            <CategoryItem key={category.title} tabIndex="0" onClick={() => handleCategoryChange(category.title)}>
              {category.title}
            </CategoryItem>
          ))}
        </CategoryList>
      </TabsContainer>
    </GlobalContainer>
  );
};
