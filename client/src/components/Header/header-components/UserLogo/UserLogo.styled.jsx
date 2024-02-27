import styled from "styled-components";

export const Avatar = styled.img`
  width: 34px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
  }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Name = styled.span`
  line-height: 20.4px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.navUser};

  @media screen and (min-width: 768px) {
    line-height: 23.8px;
    font-size: 14px;
  }
`;
