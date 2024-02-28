import styled from "styled-components";

export const Block = styled.div`
  width: 343px;
  height: 445px;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  @media (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`;

export const BlockPicture = styled.a`
  width: 343px;
  height: 323px;
  display: flex;
  justify-content: center;
`;

export const BlockPictureImg = styled.img`
  width: 343px;
  height: 323px;
  position: absolute;
`;

export const BlockPictureDescription = styled.div`
  background-color: ${(props) => props.theme.label};
  border-radius: 8px;
  width: 307px;
  height: 52px;
  padding: 16px;
  margin-top: 245px;
  position: absolute;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.headers};
`;

export const PictureDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.recTitle};
  font-family: "Poppins", sans-serif;
`;

export const Button = styled.a`
  background-color: #8aa936;
  border-radius: 6px;
  width: 94px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.fontLight};
  margin-top: 24px;
  margin-left: 249px;
  border: 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const CategoryBlock1 = styled.div``;

export const CategoryBlock2 = styled.div``;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.headers};
  font-family: "Poppins", sans-serif;

  &:hover {
    color: ${(props) => props.theme.currentLink};
  }

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const CategoriesTabletSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CategoriesListContainer = styled.ul`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CategoryElement = styled.li`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CategoriesMobileSection = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CategoriesDesktopSection = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }
`;
