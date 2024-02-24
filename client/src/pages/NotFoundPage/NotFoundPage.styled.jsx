import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 204px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 203px;
  }
`;

export const PicBox = styled.div`
  display: flex;
  justyfy-content: center;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextBox = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 206px;

  @media screen and (min-width: 768px) {
    max-width: 428px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.black};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.black};
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
