import styled from "styled-components";

export const StyledButton = styled.button`
  --color: #fafafa;
  --font-size: 14px;
  --border: 1px solid #8baa36;
  --border-radius: 24px 44px;
  --background-color: #8baa36;
  --gap: unset;
  --padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
  font-size: var(--font-size);

  width: 129px;
  height: 46px;

  color: var(--color);
  background-color: #22252a;
  padding: var(--padding);
  border: var(--border);
  border-radius: var(--border-radius);
  transition: background-color 200ms, border-color 200ms, color 200ms;
  cursor: pointer;
  margin-left: 5px;

  &:focus,
  &:hover {
    background-color: #22252a;
    border: var(--border);
  }

  &.dark:focus,
  &.dark:hover {
    background-color: #8baa36;
    border: var(--border);
  }

  &:disabled {
    filter: opacity(80%);
    cursor: auto;
    background-color: #8baa36;
    color: rgb(224, 224, 224);
  }
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 52px;
  }
`;
