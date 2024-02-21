import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top-color: rgba(0, 0, 0, 0.12);
  border-right-color: rgba(0, 0, 0, 0.12);
  overflow: hidden;
  min-height: 48px;
  display: flex;
`;

export const ScrollButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  color: inherit;
  width: 40px;
  flex-shrink: 0;
  opacity: ${({ disabled }) => (disabled ? "0" : "0.8")};
`;

export const StyledSvg = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.25rem;
`;

export const StyledSpan = styled.span`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  inset: 0px;
  border-radius: inherit;
`;

export const CategoryList = styled.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  scrollbar-width: none;
  overflow: auto hidden;
  margin-bottom: 0px;
`;

export const CategoryItem = styled.li`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: rgb(189, 189, 189);
  text-transform: capitalize;
  padding: 0px 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  letter-spacing: 0.02857em;
  max-width: 360px;
  min-width: 90px;
  position: relative;
  min-height: 48px;
  flex-shrink: 0;
  overflow: hidden;
  white-space: normal;
  text-align: center;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
`;

export const Header = styled.h2`
  padding-bottom: 72px;
  font-size: 32px;
  line-height: 32px;
  padding-top: 114px;
  font-family: Poppins;
  color: rgb(0, 24, 51);
`;

const StyledDiv = styled.div`
  padding-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 28px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    gap: 32px;
    margin-bottom: 200px;
  }
`;
