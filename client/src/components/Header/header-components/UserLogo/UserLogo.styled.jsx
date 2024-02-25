import styled from "styled-components";

export const Avatar = styled.img`
  width: 34px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 44px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Name = styled.span`
  line-height: 20.4px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.currentUser};

  @media screen and (min-width: 768px) {
    line-height: 23.8px;
    font-size: 14px;
  }
`;
