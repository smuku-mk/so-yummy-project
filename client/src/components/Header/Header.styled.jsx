import styled from "styled-components";

const getBgColor = (variant, theme) => {
  if (variant) {
    return theme.mainBg;
  } else {
    return "transparent";
  }
};

export const BgContainer = styled.div`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: ${(props) => getBgColor(props.variant, props.theme)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;

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
