import styled from "styled-components";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
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
