import styled from "styled-components";
import searchfor_mobile from "../../images/mobile_img/searchfor_mobile.png";
import searchfor_tablet from "../../images/tablet_img/searchfor_tablet.png";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPageTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: ${(props) => props.theme.black};
  margin: 3rem 0;
  padding-top: 6rem;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 3rem auto;
    padding-top: 8rem;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
    margin: 4rem auto;
    padding-top: 10rem;
  }
`;

export const ListNav = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListHead = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.bannerBg};
  background-color: ${(props) => props.theme.green};
  border-radius: 5px;
  gap: 5rem;

  @media (min-width: 768px) {
    font-size: 18px;
    height: 60px;
  }
`;

export const ListSpanProducts = styled.span`
  position: absolute;
  left: 0;
  margin-left: 1rem;

  @media (min-width: 1440px) {
    margin-left: 2rem;
  }
`;

export const ListSpanNumber = styled.span`
  position: absolute;
  right: 0;
  margin-right: 6rem;

  @media (min-width: 768px) {
    right: 0;
    margin-right: 12rem;
  }
  @media (min-width: 1440px) {
    margin-right: 20rem;
  }
`;

export const ListSpanRemove = styled.span`
  position: absolute;
  right: 0;
  margin-right: 1rem;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderItem};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 1rem 0;
  }
  @media (min-width: 1440px) {
    padding: 2rem;
  }
`;

export const ListImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.itemBg};
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 81px;
    height: 81px;
  }
`;

export const ListTitle = styled.span`
  margin-top: 0.25rem;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ListAmount = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  margin-right: 6rem;
  width: 40px;
  height: 25px;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.bannerBg};
  border-radius: 5px;
  font-size: 10px;

  @media (min-width: 768px) {
    width: 70px;
    height: 35px;
    margin-right: 12rem;
  }
  @media (min-width: 1440px) {
    margin-right: 20rem;
`;

export const ListRemoveButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 2rem;
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  stroke: ${(props) => props.theme.black};

  &:hover {
    stroke: ${(props) => props.theme.green};
    ease-in-out;
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 2.5rem;
  }
`;

export const ListEmpty = styled.img`
  background-image: url(${searchfor_mobile});

  @media (min-width: 768px) {
    background-image: url(${searchfor_tablet});
  }
`;
