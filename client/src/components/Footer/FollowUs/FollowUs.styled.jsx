import styled from 'styled-components';

export const SocialsContainer = styled.div``;

export const Socials = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.5px;
  list-style: none;
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 44px 0 0 0;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 41px;
  }
`;