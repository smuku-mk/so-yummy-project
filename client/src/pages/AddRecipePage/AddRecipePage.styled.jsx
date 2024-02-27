import styled from "styled-components";

export const Container = styled.section`
  display: block;
  width: 100%;
  margin: 50px auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 72px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    margin-top: 100px;
    margin-bottom: 200px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-contain: flex-start;
  width: 250px;
  height: 44px;
  font-weight: 600;
  font-size: 44px;
  margin: 0 auto 0 0;
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 121px;
`;

export const CommonContainer = styled.div`
  width: 319px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
