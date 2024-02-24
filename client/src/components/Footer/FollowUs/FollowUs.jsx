import React from "react";
import sprites from "../../../images/sprites.svg";
import { SocialsContainer, SocialsList, SocialMedia, SocialIcon } from "./FollowUs.styled";

export const FollowUs = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialMedia>
          <SocialIcon>
            <use xlinkHref={`${sprites}#icon-facebook`} />
          </SocialIcon>
        </SocialMedia>
        <SocialMedia>
          <SocialIcon>
            <use xlinkHref={`${sprites}#icon-youtube`} />
          </SocialIcon>
        </SocialMedia>
        <SocialMedia>
          <SocialIcon>
            <use xlinkHref={`${sprites}#icon-twitter`} />
          </SocialIcon>
        </SocialMedia>
        <SocialMedia>
          <SocialIcon>
            <use xlinkHref={`${sprites}#icon-instagram`} />
          </SocialIcon>
        </SocialMedia>
      </SocialsList>
    </SocialsContainer>
  );
};
