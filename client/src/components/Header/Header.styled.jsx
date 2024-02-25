import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
