import { useEffect } from "react";
import {
  TabsContainer,
  ScrollButton,
  StyledSvg,
  StyledSpan,
  CategoryList,
  CategoryItem,
  Header,
} from "./Menu.styled";

import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categories/operations';
import { setCategory } from "../../redux/categories/categoriesSlice";
import { categories } from '../../redux/categories/selectors'

export const Menu = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
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
          {categoriesList.map((category) => (
            <CategoryItem key={category.title} onClick={() => handleCategoryChange(category.title)}>
              {category.title}
            </CategoryItem>
          ))}
        </CategoryList>
        <ScrollButton>
          <StyledSvg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          </StyledSvg>
          <StyledSpan></StyledSpan>
        </ScrollButton>
      </TabsContainer>
    </div>
  );
};