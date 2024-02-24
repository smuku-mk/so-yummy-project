import notfound1x_mobile from "../../images/mobile_img/notfound1x_mobile.png";
import notfound2x_mobile from "../../images/mobile_img/notfound2x_mobile.png";
import notfound1x_tablet from "../../images/tablet_img/notfound1x_tablet.png";
import notfound2x_tablet from "../../images/tablet_img/notfound2x_tablet.png";
import notfound1x_dekstop from "../../images/dekstop_img/notfound1x_dekstop.png";
import notfound2x_dekstop from "../../images/dekstop_img/notfound2x_dekstop.png";
import { Container, PicBox, TextBox, Title, Text } from "./NotFoundPage.styled";

export const NotFound = () => {
  return (
    <Container>
      <PicBox>
        <picture>
          <img
            src={notfound1x_mobile}
            srcSet={`${notfound1x_mobile}, ${notfound2x_mobile} 2x`}
            alt="Page not found"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${notfound1x_tablet}, ${notfound2x_tablet} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${notfound1x_dekstop}, ${notfound2x_dekstop} 2x`}
          />
        </picture>
      </PicBox>
      <TextBox>
        <Title>We are sorry,</Title>
        <Text>but the page you were looking for can't be found..</Text>
      </TextBox>
    </Container>
  );
};
