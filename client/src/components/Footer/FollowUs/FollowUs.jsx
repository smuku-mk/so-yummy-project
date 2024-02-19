import React from 'react';
import { SocialsContainer, Socials } from './FollowUs.styled';
import svg from '../../images/sprites.svg';

export const FollowUs = () => {
  return (
    <SocialsContainer>
      <Socials>
        <li>
          {/*    <svg>
        <use xlinkHref={${svg}#icon-facebook} />
      </svg> */}
          FB
        </li>
        <li>
          {/*    <svg>
        <use xlinkHref={${svg}#icon-youtube} />
      </svg> */}
          YT
        </li>
        <li>
          {/*    <svg>
        <use xlinkHref={${svg}#icon-x} />
      </svg> */}
          X
        </li>
        <li>
          {/*    <svg>
        <use xlinkHref={${svg}#icon-instagram} />
      </svg> */}
          Instagram
        </li>
      </Socials>
    </SocialsContainer>
  );
};
