import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  display: block;
  width: 100%;
  margin: 100px auto 10px auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 72px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    margin-top: 150px;
    margin-bottom: 200px;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 250px;
  height: 44px;
  font-weight: 600;
  font-size: 44px;
  margin: 0 auto 50px 16px;
  color: ${(props) => props.theme.mainTitle};
`;
