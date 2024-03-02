import styled from "styled-components";
import searchfor_mobile from "../../images/mobile_img/searchfor_mobile.png";
import searchfor_tablet from "../../images/tablet_img/searchfor_tablet.png";

export const Block = styled.div`
  width: 343px;
  height: 323px;
  display: flex;
  flex-direction: column;
`;

export const RecipesElement = styled.li`
  margin-bottom: 28px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 32px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    margin-right: 14px;
    margin-bottom: 100px;
  }
`;

export const BlockPicture = styled.div`
  width: 343px;
  height: 323px;
  display: flex;
  justify-content: center;
`;

export const BlockPictureImg = styled.img`
  width: 343px;
  height: 323px;
  position: absolute;
  border-radius: 8px;
`;

export const BlockPictureDescription = styled.div`
  background-color: #fff;
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

export const RecipesListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 64px;
  padding: 0 16rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const RecipesNoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 14px;
  padding: 3rem 0;

  media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const RecipesNoImg = styled.div`
background-image: url(${searchfor_mobile});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 350px;
height: 225px;

@media (min-width: 768px) { 
  background-image: url(${searchfor_tablet});

  `;
