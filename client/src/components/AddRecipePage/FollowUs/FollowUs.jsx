import icons from "../../../images/sprites.svg";
import {
  Container,
  Title,
  ItemsList,
  Item,
  LinkWrapper,
  LinkIcon,
} from "./FollowUs.styled";

export const FollowUs = () => {
  return (
    <Container>
      <Title>Follow us</Title>
      <ItemsList>
        <Item>
          <LinkWrapper href="https://www.facebook.com">
            <LinkIcon width="26" height="26">
              <use href={`${icons}#icon-facebook`} />
            </LinkIcon>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="https://www.youtube.com/">
            <LinkIcon width="28" height="22">
              <use href={`${icons}#icon-youtube`} />
            </LinkIcon>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="https://twitter.com/">
            <LinkIcon width="25" height="22">
              <use href={`${icons}#icon-twitter`} />
            </LinkIcon>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="https://www.instagram.com/">
            <LinkIcon width="24" height="24">
              <use href={`${icons}#icon-instagram`} />
            </LinkIcon>
          </LinkWrapper>
        </Item>
      </ItemsList>
    </Container>
  );
};
