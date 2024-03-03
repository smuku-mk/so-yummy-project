import styled from "styled-components";

export const RecipesListContainer = styled.ul`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 16px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    margin-right: 14px;
    margin-bottom: 100px;
    width: 1240px;
  }
`;

export const RecipesElement = styled.li`
  margin-bottom: 28px;
  width: 320px;

  @media (min-width: 768px) {
    width: 336px;
    flex: 0 0 calc(50% - 16px);
    justify-content: center;
    margin-right: 16px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    flex: 0 0 calc(25% - 10px);
    margin-right: 10px;
    width: 300px;
  }
`;

export const Block = styled.div`
  width: 320px;
  height: 323px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const BlockPicture = styled.div`
  width: 320px;
  height: 323px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const BlockPictureImg = styled.img`
  width: 320px;
  height: 323px;
  position: absolute;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const BlockPictureDescription = styled.div`
  background-color: ${(props) => props.theme.inputBCG};
  border-radius: 8px;
  width: 320px;
  height: 52px;
  padding: 16px;
  margin-top: 245px;
  position: absolute;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.headers};
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const PictureDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.recTitle};
  font-family: "Poppins", sans-serif;
`;
