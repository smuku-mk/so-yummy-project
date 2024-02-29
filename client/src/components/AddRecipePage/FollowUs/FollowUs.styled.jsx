import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  width: auto;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.followTitle};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const ItemsList = styled.ul`
  display: flex;
  gap: 18px;
  height: 26px;
  list-style: none;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  fill: ${(props) => props.theme.socialIcons};

  &:hover,
  &:active,
  &:focus {
    fill: ${(props) => props.theme.iconHover};
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:visited {
    fill: ${(props) => props.theme.socialIcons};
  }
`;
export const LinkIcon = styled.svg`
  fill: ${(props) => props.theme.socialIcons};
  &:hover,
  &:active,
  &:focus {
    fill: ${(props) => props.theme.iconHover};
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:visited {
    fill: ${(props) => props.theme.socialIcons};
  }
`;
