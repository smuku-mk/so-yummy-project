import styled from 'styled-components';

export const SocialsContainer = styled.div``;

export const SocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 14px;
  list-style: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 44px 0 0 0;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 41px;
  }
`;

export const SocialMedia = styled.li``;

export const SocialIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: ${props => props.theme.social};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    fill: ${props => props.theme.socialHover};
  }
`;
