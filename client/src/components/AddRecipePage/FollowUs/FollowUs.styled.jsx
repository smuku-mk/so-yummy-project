import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  width: auto;
`;

export const Title = styled.h3`
  color: #3e4462;
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
  fill: #8baa36;

  &:hover,
  &:active,
  &:focus {
    fill: #1e1f28;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
