import icons from "../../../images/sprites.svg";
import {
  Container,
  Title,
  ItemsList,
  Item,
  LinkWrapper,
} from "./FollowUs.styled";

export const FollowUs = () => {
  return (
    <Container>
      <Title>Follow us</Title>
      <ItemsList>
        <Item>
          <LinkWrapper href="#">
            <svg width="26" height="26">
              <use href={`${icons}#icon-facebook`} />
            </svg>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="#">
            <svg width="28" height="22">
              <use href={`${icons}#icon-youtube`} />
            </svg>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="#">
            <svg width="25" height="22">
              <use href={`${icons}#icon-twitter`} />
            </svg>
          </LinkWrapper>
        </Item>
        <Item>
          <LinkWrapper href="#">
            <svg width="24" height="24">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </LinkWrapper>
        </Item>
      </ItemsList>
    </Container>
  );
};
