import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 14px 9px;
  margin-bottom: 14px;
  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: ${(props) => props.theme.bannerBg};

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    padding: 28px 24px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    padding: 40px;
    margin-bottom: 50px;
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 124px;
  height: 124px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 228px;
    height: 232px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    width: 318px;
    height: 324px;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  height: 124px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 232px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 324px;
    margin-left: 50px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${(props) => props.theme.mainTxt};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const CardDescription = styled.p`
  display: inline-block;
  max-height: 50px;
  width: 163px;
  padding: 0;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.p};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 110px;
    width: 404px;
    gap: 14px;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: 140px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardTime = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: ${(props) => props.theme.mainTxt};

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CardButtonSee = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 27px;
  right: 9px;
  bottom: 14px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.lightTxt};
  background: ${(props) => props.theme.green};
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${(props) => props.theme.green};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 138px;
    height: 45px;
    right: 24px;
    bottom: 28px;
    font-size: 14px;
    line-height: 21px;
    &:hover {
      background: ${(props) => props.theme.green};
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 172px;
    height: 54px;
    right: 40px;
    bottom: 40px;
    padding: 18px 40px;
    font-size: 16px;
    line-height: 24px;
    &:hover {
      background: ${(props) => props.theme.green};
    }
  }
`;

export const CardButtonDelete = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 9px;
  top: 14px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.lightTxt};
  background: #8baa36;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: ${(props) => props.theme.currentPage};
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 38px;
    height: 38px;
    right: 24px;
    top: 28px;
    &:hover {
      background: ${(props) => props.theme.currentPage};
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 44px;
    height: 44px;
    right: 40px;
    top: 40px;
    &:hover {
      ${(props) => props.theme.currentPage};
    }
  }
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.green};
  stroke: ${(props) => props.theme.itemBg};
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: ${(props) => props.theme.currentPage};
    stroke: ${(props) => props.theme.lightTxt};
  }
  svg {
    width: 10px;
    height: 11px;
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  svg {
    width: 16px;
    height: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
    svg {
      width: 18px;
      height: 20px;
    }
  }
`;
