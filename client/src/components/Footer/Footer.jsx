import { FollowUs } from './FollowUs';
import { Nav } from './Nav';
import { SubscribeForm } from './SubscribeForm';
import sprites from '../../images/sprites.svg';
import { AllFooter, Container, Information, Title, Logo, List, Features } from './Footer.styled';

export const Footer = () => {
  return (
    <AllFooter>
      <Container>
        <Information>
          <Title>
            <Logo>
              <use xlinkHref={`${sprites}#icon-logo`} />
            </Logo>
            So Yummy
          </Title>
          <List>
            <Features>Database of recipes that can be replenished</Features>
            <Features>Flexible search for desired and unwanted ingredients</Features>
            <Features>Ability to add your own recipes with photos</Features>
            <Features>Convenient and easy to use</Features>
          </List>
        </Information>
        <Nav />
        <SubscribeForm />
      </Container>
      <FollowUs />
    </AllFooter>
  );
};
