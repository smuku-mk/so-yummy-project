import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 200px;    
  }
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
  }
`;

export const PictureDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 323px;
  width: 343px;

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const PictureImg = styled.img`
  border-radius: 8px;
`;

export const PictureDescription = styled.div`
  background-color: ${(props) => props.theme.inputBCG};
  color: ${(props) => props.theme.recTitle};
  position: absolute;
  margin-top: 245px;
  padding: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
  border-radius: 8px;
  width: 307px;

  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 268px;
  }
`;