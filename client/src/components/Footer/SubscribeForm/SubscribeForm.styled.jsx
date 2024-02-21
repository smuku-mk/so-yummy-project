import styled from 'styled-components';

export const Subscription = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 72px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Subscribe = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const Newsletter = styled.p`
  padding: 14px 0 28px 0;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  width: 339px;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Email = styled.input`
  background-color: inherit;
  color: inherit;
  border: 1px solid rgba(250, 250, 250, 0.2);
  border-radius: 6px;
  padding: 11px 0 11px 0;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  text-align: center;
  width: 204px;

  @media screen and (min-width: 768px) {
    padding: 15px 0 15px 0;
    font-size: 14px;
    width: 259px;
  }
  @media screen and (min-width: 1280px) {
    padding: 17.5px 0 17.5px 0;
    font-size: 18px;
    width: 339px;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.footerBg};
  color: inherit;
  border: none;
  border-radius: 6px;
  padding: 11px 0 11px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  text-align: center;
  cursor: pointer;
  width: 204px;

  @media screen and (min-width: 768px) {
    padding: 16px 0 16px 0;
    font-size: 16px;
    line-height: 112%;
    width: 187px;
  }

  @media screen and (min-width: 1280px) {
    padding: 21px 0 21px 0;
    width: 339px;
  }
`;
