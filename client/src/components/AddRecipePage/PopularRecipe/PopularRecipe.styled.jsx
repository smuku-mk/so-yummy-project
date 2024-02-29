import styled from "styled-components";

export const Container = styled.div`
  margin: 36px auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.popularTitle};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin: 0 auto;
`;

export const PopularRecipesList = styled.ul`
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: flex start;
    gap: 32px;
    width: 319px;
  }
`;

export const PopularRecipeItem = styled.li`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  padding: 0 0px 13px 0;
  margin: 0 auto;
  width: 100%;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    height: 98px;
    width: 336px;
    padding: 0 13px 13px 0;
  }
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0;

  @media screen and (min-width: 768px) {
    width: 102px;
  }
`;

export const InfoContainer = styled.div`
  height: 56px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 208px;
  }
`;

export const DishTitle = styled.h3`
  color: ${(props) => props.theme.popularTitle};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 2px;
`;

export const RecipeLink = styled.a`
  color: ${(props) => props.theme.popularTitle};
`;

export const DishDescription = styled.p`
  color: ${(props) => props.theme.popularDescription};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  width: 213px;
`;
