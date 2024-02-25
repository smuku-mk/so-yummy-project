import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  ul {
    padding: 5px 10px;
    box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border: 1px solid rgba(34, 60, 80, 0.2);
    border-radius: 30px;
    background: ${(props) => props.theme.bannerBg};
    ;
  }
  button {
    color: ${(props) => props.theme.currentPage};
    &:hover {
      background-color: ${(props) => props.theme.green};
      color: ${(props) => props.theme.currentPage};
    }
  }
  button.Mui-selected {
    background-color: ${(props) => props.theme.iconBg};
    &:hover {
      background-color: ${(props) => props.theme.currentPage};
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ImgTitle = styled.p`
  margin-top: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${(props) => props.theme.mainTxt};
  opacity: 0.5;
`;

export const EmptyMobile = styled.img`
  width: 208px;
  height: 133px;
  object-fit: cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const EmptyTabDesk = styled.img`
  width: 350px;
  height: 225px;
  object-fit: cover;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.h2`
  padding-top: 114px;
  padding-bottom: 50px;

  font-size: 28px;
  line-height: 28px;
  color: ${(props) => props.theme.searchColor};

  @media screen and (min-width: 768px) {
   
    padding-bottom: 72px;
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 136px;
    font-size: 44px;
    line-height: 44px;
  } ;
`;
