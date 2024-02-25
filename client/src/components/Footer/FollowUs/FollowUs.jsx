import React from 'react';
import sprites from '../../../images/sprites.svg';
import {
  SocialsContainer,
  SocialsList,
  SocialMedia,
  SocialLink,
  SocialIcon,
} from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialMedia>
          <SocialLink href="https://www.facebook.com/">
            <SocialIcon>
              <use xlinkHref={`${sprites}#icon-facebook`} />
            </SocialIcon>
          </SocialLink>
        </SocialMedia>
        <SocialMedia>
          <SocialLink href="https://www.youtube.com/">
            <SocialIcon>
              <use xlinkHref={`${sprites}#icon-youtube`} />
            </SocialIcon>
          </SocialLink>
        </SocialMedia>
        <SocialMedia>
          <SocialLink href="https://twitter.com/">
            <SocialIcon>
              <use xlinkHref={`${sprites}#icon-twitter`} />
            </SocialIcon>
          </SocialLink>
        </SocialMedia>
        <SocialMedia>
          <SocialLink href="https://www.instagram.com/">
            <SocialIcon>
              <use xlinkHref={`${sprites}#icon-instagram`} />
            </SocialIcon>
          </SocialLink>
        </SocialMedia>
      </SocialsList>
    </SocialsContainer>
  );
};
